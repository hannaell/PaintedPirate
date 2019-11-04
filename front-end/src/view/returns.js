import React from 'react';
import styled from 'styled-components';
import { H1, H3 } from '../components/typo';
import Layout from '../components/Layout';
import ReturnForm from '../components/ReturnForm';

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
        <Layout>
            <H1Styled>
                <H1 text='For returns or claims*, please fill in the form and' fontWeight='bold'/>
                <H1 text='upload a picture if needed.' fontWeight='bold'/>
                <H3 text='*Please note that it´s a return fee.' fontWeight='bold' marginTop='1vh' />
            </H1Styled>
            <ReturnForm />
        </Layout>
    );
}

export default Returns;