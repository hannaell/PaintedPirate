import React, { useState, useEffect } from 'react';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { P } from '../typo';

const api = new WooCommerceRestApi({
    url: 'https://paintedpirate.test',
    consumerKey: process.env.REACT_APP_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
    version: 'wc/v3'
});


api.get('products/categories', {
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

const ProductCategories = () => {
        const [categories, setCategories] = useState([]);

        useEffect(() => {
            api.get('products/categories', {
                    per_page: 20, // 20 products per page
                })
                .then((response) => {
                    setCategories(response.data)
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
        }, []);

        console.log(categories);
    return(
        <div>
            {categories.map(category => (
                    <P  {...category} 
                        key = {category.id}
                        text = {category.name}
                    />
                    // ,console.log(category.display)
                ))}
        </div>
    );
}

export default ProductCategories;
