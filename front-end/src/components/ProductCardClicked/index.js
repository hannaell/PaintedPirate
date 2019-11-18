import React from 'react';
import styled from 'styled-components';
import { H1, H2, H3, P } from '../typo';
import Layout from '../Layout';
import ProductCategories from '../ProductCategoies';
import { log } from 'util';

const DivStyled = styled.div`
    height: 86.6vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
`;

const ImgDivStyled = styled.div`
    height: 73.4vh;
    width: 48.8vw;
    margin-top: 13.2vh;
`;

// const ImgStyled = styled.img`
//     width: 48.8vw;
// `;

const RightDivStyled = styled.div`
    height: 73vh;
    width: 17.4vw;
    margin-top: 13.2vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PriceStyled = styled.div`
    height: 2vh;
    margin-top: 2vh;   
    display: flex;
`;

const ColorStyled = styled.div`
    height: 15vh;
    width: 10vw;
    margin-top: 5.7vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const GreenStyled = styled.div`
    height: 1.5vh;
    width: 7vw;
    margin: 0.25vh;
    background-color: #686A5C;
    border: 2px solid #000000;
`;

const BeigeStyled = styled.div`
    height: 1.5vh;
    width: 7vw;
    margin: 0.25vh;
    background-color: #E5D8C6;
    border: 2px solid #000000;
`;

const WhiteStyled = styled.div`
    height: 1.5vh;
    width: 7vw;
    margin: 0.25vh;
    background-color: #FFFFFF;
    border: 2px solid #000000;
`;

const BlackStyled = styled.div`
    height: 1.5vh;
    width: 7vw;
    margin: 0.25vh;
    background-color: #060606;
    border: 2px solid #000000;
`;

const ButtonDivStyled = styled.div`
    height: 12vh;
    width: 14.4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const WhiteButtonStyled = styled.button`
    height: 5.5vh;
    width: 14.3vw;
    background-color: #F7F7F7;
    border: 2px solid #060606;
`;

const BlackButtonStyled = styled.button`
    height: 5.5vh;
    width: 14.3vw;
    background-color: #060606;
    border: 2px solid #060606;    
`;

const MoreDivStyled = styled.div`
    /* height: 18vh; */
    width: 48.8vw;
    margin-top: 0.5vh;
    display: flex; 
    justify-content: space-between;
`;

const MoreImgStyled = styled.img`
    width: 11.3vw;
`;

const BottomDivStyled = styled.div`
    height: 21.1vh;
    width: 48.8vw;
    margin-top: 15vh;
    margin-bottom: 8vh;
    margin-left: 25.6vw;
    /* background-color: aqua; */
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
`;

const ProductCardClicked = (props) => {
    return(
        <Layout>
            <DivStyled>
                <ProductCategories />
                <ImgDivStyled>
                    {props.productImg}
                </ImgDivStyled>
                <RightDivStyled>
                    <H1 text={props.productName} textTransform='uppercase' fontStyle='italic' fontWeight='900'/>
                    <PriceStyled>
                        <H2 text={props.productPrice} fontWeight='900'/>
                        <H2 text='SEK' fontWeight='900'/>
                    </PriceStyled>
                    <ColorStyled>
                        <H3 text='colour' fontSize='20px' fontWeight='500' textTransform='uppercase' margin='0.25vh'/>
                        <GreenStyled></GreenStyled>
                        <BeigeStyled></BeigeStyled>
                        <WhiteStyled></WhiteStyled>
                        <BlackStyled></BlackStyled>
                    </ColorStyled>
                    <ButtonDivStyled>
                        <WhiteButtonStyled><H3 text='Select Size' fontSize='20px' textTransform='uppercase'/></WhiteButtonStyled>
                        <BlackButtonStyled><H3 text='Add To Bag' color='#F7F7F7' fontSize='20px' textTransform='uppercase'/></BlackButtonStyled>
                    </ButtonDivStyled>
                    <H3 text='Material' fontSize='20px' fontWeight='500' textTransform='uppercase' marginTop='2.3vh'/>
                    <H3 text='Details' fontSize='20px' fontWeight='500' textTransform='uppercase' marginTop='2.3vh'/>
                    {/* <P text={props.productDescription} /> */}
                    {props.productDescription}
                    <H3 text='Shipping' fontSize='20px' fontWeight='500' textTransform='uppercase' marginTop='2.3vh'/>
                </RightDivStyled>
            </DivStyled>
            <BottomDivStyled>
                <H2 text='You may also like' fontSize='22px' fontWeight='900'/>
                <MoreDivStyled>
                    <MoreImgStyled src='../images/paintedpirate-tshirt-mockup-merch.jpg'></MoreImgStyled>
                    <MoreImgStyled src='../images/paintedpirate-tshirt-mockup-merch.jpg'></MoreImgStyled>
                    <MoreImgStyled src='../images/paintedpirate-tshirt-mockup-merch.jpg'></MoreImgStyled>
                    <MoreImgStyled src='../images/paintedpirate-tshirt-mockup-merch.jpg'></MoreImgStyled>
                </MoreDivStyled>
            </BottomDivStyled>
        </Layout>
    );
}

export default ProductCardClicked;