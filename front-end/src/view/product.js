import React, { useState, useEffect } from 'react';
import { api } from '../components/WooCommerce'
import ProductCardClicked from '../components/ProductCardClicked';
import styled from 'styled-components';
import { P } from '../components/typo';

const ImgStyled = styled.img`
    width: 48.8vw;
`;

const Product = (props) => {
    console.log('props', props)
    const slug = props.match.params.product
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        api.get(`products?slug=${slug}`, {
                per_page: 20, // 20 products per page
            })
            .then((response) => {
                 console.log('response', response)
                setProductInfo(response.data[0])
            })
            .catch((error) => {
                //Invalid request, for 4xx and 5xx statuses
                // console.log('Response Status:', error.response.status);
                // console.log('Response Headers:', error.response.headers);
                // console.log('Response Data:', error.response.data);
            })
            .finally(() => {
                // Always executed.
            });
    }, []);

    console.log('productInfo', productInfo);
    // console.log('productInfo Image', productInfo.images);

    return(
        <div>
            <ProductCardClicked 
                productImg = {
                    (productInfo.images && productInfo.images.length > 0 ? <ImgStyled src = {
                            productInfo.images[0].src
                    }
                /> : null)}                    
                productName = {productInfo.name}
                productPrice = {productInfo.price}
                productMaterial = {
                    (productInfo.short_description && productInfo.short_description.length > 0 ? <P text = {
                        productInfo.short_description.replace('<p>', '').replace('</p>', '')
                    }
                /> : null)}
                productDescription = {
                    (productInfo.description && productInfo.description.length > 0 ? <P text = {
                        productInfo.description.replace('<p>', '').replace('</p>', '')
                    }
                /> : null)}
            />
        </div>
    );
}

export default Product;