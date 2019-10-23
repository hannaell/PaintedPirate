import  React, { useState, useEffect } from  'react';
// import  '../App.css';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

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

// // Create a product
// api.post('products', {
//     name: 'Premium Quality', // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
//     type: 'simple',
//     regular_price: '21.99',
// })
// .then((response) => {
//     // Successful request
//     console.log('Response Status:', response.status);
//     console.log('Response Headers:', response.headers);
//     console.log('Response Data:', response.data);
// })
// .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log('Response Status:', error.response.status);
//     console.log('Response Headers:', error.response.headers);
//     console.log('Response Data:', error.response.data);
// })
// .finally(() => {
//     // Always executed.
// });

// // Edit a product
// api.put('products/1', {
//     sale_price: '11.99', // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
// })
// .then((response) => {
//     // Successful request
//     console.log('Response Status:', response.status);
//     console.log('Response Headers:', response.headers);
//     console.log('Response Data:', response.data);
// })
// .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log('Response Status:', error.response.status);
//     console.log('Response Headers:', error.response.headers);
//     console.log('Response Data:', error.response.data);
// })
// .finally(() => {
//     // Always executed.
// });

// // Delete a product
// api.delete('products/1', {
//         force: true, // Forces to delete instead of move to the Trash
// })
// .then((response) => {
//     // Successful request
//     console.log('Response Status:', response.status);
//     console.log('Response Headers:', response.headers);
//     console.log('Response Data:', response.data);
// })
// .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log('Response Status:', error.response.status);
//     console.log('Response Headers:', error.response.headers);
//     console.log('Response Data:', error.response.data);
// })
// .finally(() => {
//     // Always executed.
// });

const WooCommerce = () => {

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
                console.log('Response Status:', error.response.status);
                console.log('Response Headers:', error.response.headers);
                console.log('Response Data:', error.response.data);
            })
            .finally(() => {
                // Always executed.
            });
        }, []
    );

    return(
        <div>
            <p>{console.log(products[0] && products[0].name)}</p>
            <p>{products[0] && products[0].name}</p>
            <div>
                {/* {products.map(product => (
                    <h2>{product.id}</h2>
                ))} */}
            </div>
            <p>någonting</p>
        </div>
    );

}
export  default  WooCommerce;
