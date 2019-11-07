import React from 'react';
import styled from 'styled-components';
import { H1, H3 } from '../components/typo';
import Menu from '../components/Menu';
import ReturnForm from '../components/ReturnForm';
import Footer from '../components/Footer';

const ColorDiv = styled.div `
    width: 100vw;
    background-color: #F7F7F7;
`;

const H1Styled = styled.div`
    width: 60vw;
    padding-left: 13vw;
    padding-top: 14vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Returns = () => {
    return(
        <ColorDiv>
            <Menu />
            <H1Styled>
                <H1 text='For returns or claims*, please fill in the form and' fontWeight='bold'/>
                <H1 text='upload a picture if needed.' fontWeight='bold'/>
                <H3 text='*Please note that it´s a return fee.' fontSize='20px' fontWeight='bold' marginTop='1vh' />
            </H1Styled>
            <ReturnForm />
            <Footer />
        </ColorDiv>
    );
}

export default Returns;