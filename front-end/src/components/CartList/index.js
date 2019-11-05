import React from 'react';
import styled from 'styled-components';
import { H1, H3, P } from '../typo';
import CartCard from '../CartCard';

const CartStyled = styled.div`
    height: 95vh;
    width: 73.8vw;
    margin-left: 13vw;
    display: flex;
    border: 2px solid #1A1A1A;
`;

const CartDiv = styled.div`
    height: 100%;
    width: 48.7vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TotalDiv = styled.div`
    height: 100%;
    width: 25vw;
    border-left: 2px solid #1A1A1A;
`;

const TopStyled = styled.div`
    height: 11.3vh;
    width: 100%;
    border-bottom: 1px solid #686A5C;
    display: flex;
    align-items: center;
`;

const ButtonStyled = styled.button`
    height: 5.5vh;
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background-color: #1A1A1A;
`;

const ScrollDiv = styled.div`
    height: 78.2vh;
    scroll-behavior: smooth;
    overflow-y: auto;
`;

const TotalDivStyled = styled.div`
    height: 78.2vh;
    width: 100%;
`;

const BottomStyled = styled.div`
    height: 5.5vh;
    width: 100%;
    border-top: 1px solid #686A5C;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InsideDiv = styled.div`
    height: 3vh;
    width: 100%;
    margin-top: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CartList = () => {
    return(
        <CartStyled>
            <CartDiv>
                <div>
                    <TopStyled>
                        <H1 text='CART' fontWeight='bold' marginLeft='2.3vw' />
                    </TopStyled>
                    <ScrollDiv>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </ScrollDiv>
                </div>
                <ButtonStyled><H3 text='PROCEED TO CHECKOUT' color='#F7F7F7'/></ButtonStyled>
            </CartDiv>
            <TotalDiv>
                <TopStyled>
                    <H1 text='TOTAL' fontWeight='bold' marginLeft='2.3vw' />
                </TopStyled>
                <TotalDivStyled>
                    <InsideDiv>
                        <P text='ORDER VALUE' fontWeight='500' marginLeft='1.3vw' />
                        <P text='1000 SEK' fontWeight='500' marginRight='1.3vw' />
                    </InsideDiv>
                    <InsideDiv>
                        <P text='DELIVERY' fontWeight='500' marginLeft='1.3vw' />
                        <P text='79 SEK' fontWeight='500' marginRight='1.3vw' />
                    </InsideDiv>
                    <P text='DO YOU HAVE ANY DISCOUNT CODE? ' fontWeight='500'/>
                    <InsideDiv>
                        <P text='HANNMILLE100' fontWeight='500' marginLeft='1.3vw' />
                        <P text='-100 SEK' fontWeight='500' marginRight='1.3vw' />
                    </InsideDiv>
                </TotalDivStyled>
                <BottomStyled>
                    <P text='TOTAL:' fontWeight='bold' marginLeft='1.3vw' />
                    <P text='979 SEK' fontWeight='bold' marginRight='1.3vw' />
                </BottomStyled>
            </TotalDiv>
        </CartStyled>
    );
}

export default CartList;