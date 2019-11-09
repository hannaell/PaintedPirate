import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const ListStyled = styled.div`
    height: 90vh;
    width: 63vw;
    margin-left:1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

`

const api = new WooCommerceRestApi({
    url: 'https://paintedpirate.test',
    consumerKey: process.env.REACT_APP_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
    version: 'wc/v3'
});


api.get('products', {
        per_page: 20, // 20 products per page
    })
    // .then(res => res.json())
    // .then((result) => {
    //     this.setState({
    //         isLoaded: true,
    //         items: result.items
    //     });
    // })
    .then((response) => {
        // Successful request
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
        console.log('Total of pages:', response.headers['x-wp-totalpages']);
        console.log('Total of items:', response.headers['x-wp-total']);
    })
    .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log('Response Status:', error.response.status);
        console.log('Response Headers:', error.response.headers);
        console.log('Response Data:', error.response.data);
    })
    .finally(() => {
        // Always executed.
    });

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products', {
                per_page: 20, // 20 products per page
            })
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                // console.log('Response Status:', error.response.status);
                // console.log('Response Headers:', error.response.headers);
                // console.log('Response Data:', error.response.data);
            })
            .finally(() => {
                // Always executed.
            });
    }, []);

    console.log(products);
    console.log(products[0] && products[0].images[0].src);
    return(
        <ListStyled>
            {
            products.map((product, index) => (
                <ProductCard  {...product} 
                key = {product.id}
                productName = {product.name}
                productPrice = {product.price}
                // productImg = {product.images[0].src}
                productImg = {product.images.map(productImages => {
                        return ({keys: productImages.id, src: productImages.src})
                        // (<img key={productImages.id} src={productImages.src}></img>)
                        
                    })
                }
                />
                ))}
        </ListStyled>
    );
}

export default ProductList;