import React from 'react';
import styled from 'styled-components';
import { H2, P } from '../typo';

const CardStyled = styled.div`
    height: 37vh;
    width: 48.7vw;
    border-bottom: 1px solid #686A5C;
    display: flex;
`;

const ImgStyled = styled.img`
    height: 33.5vh;
    width: 15.2vw;
    background-color: gray;
    padding: 0;
    margin: 0;
`;

const TextDiv = styled.div`
    height: 25vh;
    width: 10vw;
    margin-top: 5vh;
    margin-left: 1.2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const InfoTextDiv = styled.div`
    height: 15vh;
    width: 10vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const InfoDiv = styled.div`
    height: 15vh;
    width: 10vw;
    margin-top: 15vh;
    margin-left: 1.2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const CartCard = (props) => {
    return(
        <CardStyled>
            <ImgStyled src={props.productImg} ></ImgStyled>
            <TextDiv>
                <H2 text='Hoodie with skull print' fontSize='22px' fontWeight='900'/>
                <InfoTextDiv>
                    <P text='COLOUR:' fontWeight='bold' />
                    <P text='SIZE:' fontWeight='bold' />
                    <P text='QUANTITY:' fontWeight='bold' />
                </InfoTextDiv>
            </TextDiv>
            <InfoDiv>
                <P text='BLACK'/>
                <P text='M'/>
                <P text='- 1 +'/>
            </InfoDiv>
            <P text={props.productPrice} />
        </CardStyled>
    );
}

export default CartCard;