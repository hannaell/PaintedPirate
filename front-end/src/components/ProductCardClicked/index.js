import React, { useState } from 'react';
import styled from 'styled-components';
import { H1, H2, H3, P } from '../typo';
import Layout from '../Layout';
import ProductCategories from '../ProductCategoies';

const DivStyled = styled.div`
    height: 86.6vh;
    width: 100vw;
    display: flex;
`;

const ImgDivStyled = styled.div`
    height: 73.4vh;
    width: 48.8vw;
    margin-top: 13.2vh;
    margin-left: 2.2vw;
`;

const RightDivStyled = styled.div`
    min-height: 100vh;
    width: 17.3vw;
    margin-top: 13.2vh;
    margin-left: 1.2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
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
    min-height: 14vh;
    width: 14.4vw;
    display: flex;
    flex-direction: column;
`;

const WhiteButtonStyled = styled.div`
    height: 5.5vh;
    width: 14.3vw;
    background-color: #F7F7F7;
    border: 2px solid #060606;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const SizeDiv = styled.div`
    height: 5.5vh;
    width: 14.3vw;
    background-color: #F7F7F7;
    border-left: 2px solid #060606;
    border-right: 2px solid #060606;
    border-bottom: 2px solid #060606;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const BlackButtonStyled = styled.div`
    height: 5.5vh;
    width: 14.3vw;
    margin-top: 1vh;
    background-color: #060606;
    border: 2px solid #060606;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

const DescriptionDiv = styled.div`
    width: 10.1vw;
    text-align: left;
    margin-top: 1.9vh;
    margin-left: 2vw;
`;
const MoreDivStyled = styled.div`
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
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
`;

const ProductCardClicked = (props) => {
    const [toggleDescription, setToggleDescription] = useState(false);
    const [toggleMaterial, setToggleMaterial] = useState(false);
    const [toggleSize, setToggleSize] = useState(false);

    // const toggleDescription = () => {
    //     if (toggle === false) {
    //         setToggle(true);

    //     } else if (toggle === true) {
    //         setToggle(false);
    //     }
    // };

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
                        <H2 text={props.productPrice} fontWeight='900' marginRight='5px'/>
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
                        <WhiteButtonStyled onClick={() => {setToggleSize(!toggleSize)}}>
                            <H3 text='Select Size' fontSize='20px' textTransform='uppercase'/>
                        </WhiteButtonStyled>
                        {toggleSize &&
                            <div>
                                <SizeDiv><P text='S' marginLeft='1.5vw'/></SizeDiv>
                                <SizeDiv><P text='M' marginLeft='1.5vw'/></SizeDiv>
                                <SizeDiv><P text='L' marginLeft='1.5vw'/></SizeDiv>
                            </div>
                        }
                        <BlackButtonStyled><H3 text='Add To Bag' color='#F7F7F7' fontSize='20px' textTransform='uppercase'/></BlackButtonStyled>
                    </ButtonDivStyled>
                    <H3 text='Material' fontSize='20px' fontWeight='500' textTransform='uppercase' marginTop='2.3vh' onClick={() => {setToggleMaterial(!toggleMaterial)}}/>
                    {toggleMaterial && <DescriptionDiv>
                        {props.productMaterial}
                    </DescriptionDiv>}
                    <H3 text='Details' fontSize='20px' fontWeight='500' textTransform='uppercase' marginTop='2.3vh' onClick={() => {setToggleDescription(!toggleDescription)}}/>
                    {toggleDescription && <DescriptionDiv>
                        {props.productDescription}
                    </DescriptionDiv>}
                    {/* <DescriptionDiv>
                        {props.productDescription}
                    </DescriptionDiv> */}
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