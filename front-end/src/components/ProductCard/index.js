import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    /* height: 20vh; */
    width: 23.8vw;
    padding: 2vw;
`
const ImgStyled = styled.img`
    width: 23.8vw;
`;

const ProductCard = (props) => {
    console.log('====================================');
    console.log(props.productImg[0]);
    console.log('====================================');
    return(
        <CardStyled>
            <ImgStyled {...props.productImg[0]} alt='product img'></ImgStyled>
            <h3>{props.productName}</h3>
            <p>{props.productPrice}</p>
        </CardStyled>
    );
}

export default ProductCard;