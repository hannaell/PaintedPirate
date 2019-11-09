import React from 'react';
import styled from 'styled-components';
import { H3 } from '../components/typo';
import Menu from '../components/Menu';
import ProductList from '../components/ProductList';
import ProductCategories from '../components/ProductCategoies';
import Footer from '../components/Footer';

const ColorDiv = styled.div `
    width: 100vw;
    background-color: #F7F7F7;
`;

const ListDiv = styled.div`
    width: 100vw;
    padding-top: 12.7vh;
    display: flex;
    justify-content: flex-start;
`;

const ProductDiv = styled.div`
    width: 63vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;    
`;

const CategoryDiv = styled.div`
    width: 63vw;
    height: 2vh;
    margin-left: 1vw;
    display: flex;
    justify-content: flex-start;
`;

const Shop = () => {
    return(
        <ColorDiv>
            <Menu />
            <ListDiv>
                    <ProductCategories />
                <ProductDiv>
                    <CategoryDiv>
                        <H3 text='NEW ARRIVALS' fontSize='20px' fontWeight='500'/>
                    </CategoryDiv>
                    <ProductList />
                </ProductDiv>
            </ListDiv>
            <Footer />
        </ColorDiv>
    );
}

export default Shop;