import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const ColorDiv = styled.div `
    width: 100vw;
    background-color: #1A1A1A;
`;

const Gallery = () => {
    return(
        <ColorDiv>
            <Menu />
            <Footer />
        </ColorDiv>

    );
}

export default Gallery;