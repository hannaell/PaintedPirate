import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import ProductList from '../components/ProductList';
import ProductCategories from '../components/ProductCategoies';
import Footer from '../components/Footer';

const ColorDiv = styled.div `
    width: 100vw;
    background-color: #F7F7F7;
`;

const Shop = () => {
    return(
        <ColorDiv>
            <Menu />
            <ProductCategories />
            <ProductList />
            <Footer />
        </ColorDiv>
    );
}

export default Shop;