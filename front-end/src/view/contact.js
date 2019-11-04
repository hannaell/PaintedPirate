import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { H1 } from '../components/typo';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const H1Styled = styled.div`
    width: 60vw;
    padding-left: 13vw;
    padding-top: 14vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Contact = () => {
    return (
        <Layout>
            <H1Styled>
                <H1 text='For questions and booking, please fill in the form and' fontWeight='bold'/>
                <H1 text='upload a picture for inspiration.' fontWeight='bold'/>
            </H1Styled>
            <ContactForm />
            <Map />
        </Layout>
    );
}

export default Contact;