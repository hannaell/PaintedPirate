import React from 'react';
import styled from 'styled-components';
import { H3 } from '../typo';

const CardStyled = styled.div`
    height: 65vh;
    width: 30vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ImgStyled = styled.img`
    width: 30vw;
    cursor: pointer;
`;

const NameStyled = styled.div`
    cursor: pointer;
`;

const PriceStyled = styled.div`
    height: 2vh;   
    display: flex;
`;

const ProductCard = (props) => {
    return(
        <CardStyled onClick={() => { props.onClick(props.slug) }}>
            <ImgStyled {...props.productImg[0]} alt='product img'></ImgStyled>
            <NameStyled>
                <H3 text={props.productName} fontSize='22px' fontWeight='800' marginTop='1.5vh' textTransform='uppercase'/>
            </NameStyled>
            <PriceStyled>
                <H3 text={props.productPrice} fontSize='20px' fontWeight='500' marginTop='6.9vh' marginRight='5px'/>
                <H3 text='SEK' fontSize='20px' fontWeight='500' marginTop='6.9vh' />
            </PriceStyled>            
        </CardStyled>
    );
}

export default ProductCard;