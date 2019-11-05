import React from 'react';
import styled from 'styled-components';
import { H2, P } from '../typo';

const CardStyled = styled.div`
    height: 37vh;
    width: 48.7vw;
    background-color: aqua;
    
`;

const CartCard = (props) => {
    return(
        <CardStyled>
            <img src={props.productImg} alt='product img'></img>
            <H2 text={props.productName}/>
            <P text='COLOUR:' fontWeight='bold' />
            <P text='SIZE:' fontWeight='bold' />
            <P text='QUANTITY:' fontWeight='bold' />
            <P text={props.productPrice} />
            {/* <h3>{props.productName}</h3>
            <p>{props.productPrice}</p> */}
        </CardStyled>
    );
}

export default CartCard;