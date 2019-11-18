import React, { useState, useEffect } from 'react';
import { api } from '../components/WooCommerce'
import ProductCardClicked from '../components/ProductCardClicked';
// import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// const api = new WooCommerceRestApi({
//     url: 'https://paintedpirate.test',
//     consumerKey: process.env.REACT_APP_CONSUMER_KEY,
//     consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
//     version: 'wc/v3',
//     axiosConfig: {headers: null}
// });


// api.get('products', {
//         per_page: 20, // 20 products per page
//     })
//     // .then(res => res.json())
//     // .then((result) => {
//     //     this.setState({
//     //         isLoaded: true,
//     //         items: result.items
//     //     });
//     // })
//     .then((response) => {
//         // Successful request
//         console.log('Response Status:', response.status);
//         console.log('Response Headers:', response.headers);
//         console.log('Response Data:', response.data);
//         console.log('Total of pages:', response.headers['x-wp-totalpages']);
//         console.log('Total of items:', response.headers['x-wp-total']);
//     })
//     .catch((error) => {
//         // Invalid request, for 4xx and 5xx statuses
//         console.log('Response Status:', error.response.status);
//         console.log('Response Headers:', error.response.headers);
//         console.log('Response Data:', error.response.data);
//     })
//     .finally(() => {
//         // Always executed.
//     });

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
    console.log('productInfo Image', productInfo.images);
    return(
        <div>
            <ProductCardClicked
                // productImg = {productInfo.images.map(productImages => {
                //             return ({keys: productImages.id, src: productImages.src})
                //         })
                //     } 
                // productImg = {productInfo.images}
                productName = {productInfo.name}
                productPrice = {productInfo.price}
                productDescription = {productInfo.description}
            />
        </div>
    );
}

export default Product;