import React from 'react';
import ProductList from '../components/ProductList';
import ProductCategories from '../components/ProductCategoies';

const Shop = () => {
    return(
        <div>
            <ProductCategories />
            <ProductList />
        </div>
    );
}

export default Shop;