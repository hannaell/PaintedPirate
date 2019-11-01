import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { H1 } from '../components/typo';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const H1Styled = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Contact = () => {
    return (
        <Layout>
            <H1Styled>
                <H1 text='For questions or time booking, please fill in' fontWeight='bold'/>
                <H1 text='the form and upload a picture for inspiration.' fontWeight='bold'/>
            </H1Styled>
            <ContactForm />
            <Map />
        </Layout>
    );
}

export default Contact;