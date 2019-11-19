import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H3 } from '../typo';

const MenuStyled = styled.div`
    height: 10vh;
    width: 100vw;    
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    position: fixed;
`;

const DivStyled = styled.div`
    height: 100%;
    width: 35vw;
    margin-left: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CartStyled = styled.div`
    height: 100%;
    width: 5vw;
    margin-right: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Menu = () => {
    return(
        <MenuStyled>
            <DivStyled>
                <StyledLink to='/'><img src='../images/PP-LOGO.svg'></img></StyledLink>
                <StyledLink to='/Gallery'><H3 text='GALLERY' fontSize='20px' fontWeight='500' /></StyledLink>
                <StyledLink to='/Contact'><H3 text='CONTACT' fontSize='20px' fontWeight='500' /></StyledLink>
                <StyledLink to='/Shop'><H3 text='SHOP' fontSize='20px' fontWeight='500' /></StyledLink>
            </DivStyled>
            <CartStyled>
                <H3 text='CART' fontSize='20px' fontWeight='500' />
            </CartStyled>
        </MenuStyled>
    );
}

export default Menu;