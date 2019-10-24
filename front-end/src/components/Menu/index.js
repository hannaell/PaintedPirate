import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { P } from '../typo';

const MenuStyled = styled.div`
    height: 8vh;
    width: 100vw;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
`
const LogoStyled = styled.img`
    width: 4vw;
    padding: 2vh;
`

const DivStyled = styled.div`
    height: 100%;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`

const StyledLink = styled(Link)`
    padding: 1vh;
    text-decoration: none;
    /* color: white; */
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Menu = () => {
    return(
        <MenuStyled>
            <LogoStyled src='' alt='Logo'/>
            <DivStyled>
                <StyledLink to='/Contact'><P text='CONTACT' /></StyledLink>
                <StyledLink to='/Gallery'><P text='GALLERY'/></StyledLink>
                <StyledLink to='/Shop'><P text='SHOP'/></StyledLink>
            </DivStyled>
        </MenuStyled>
    );
}

export default Menu;