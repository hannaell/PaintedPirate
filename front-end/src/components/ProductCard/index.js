import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    height: 20vh;
    width: 15vw;
    padding: 2vw;
`

const ProductCard = (props) => {
    return(
        <CardStyled>
            <img src={props.productImg} alt='product image'></img>
            <h3>{props.productName}</h3>
            <p>{props.productPrice}</p>
        </CardStyled>
    );
}

export default ProductCard;