import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import CartList from '../components/CartList';
import Footer from '../components/Footer';

const ColorDiv = styled.div`
    width: 100vw;
    background-color: #F7F7F7;
`;

const Cart = () => {
    return(
        <ColorDiv>
            <Menu />
            <CartList />
            <Footer />
        </ColorDiv>
    );
}

export default Cart;