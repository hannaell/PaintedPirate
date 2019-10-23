import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStyled = styled.div`
    height: 5vh;
    width: 100vw;
    background-color: aqua;
`

const Menu = () => {
    return(
        <MenuStyled>
            <Link to='/Contact' />
            <Link to='/Gallery' />
            <Link to='/Shop' />
        </MenuStyled>
    );
}

export default Menu;