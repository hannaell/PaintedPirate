import React from 'react';
import styled from 'styled-components';
import { H1 } from '../components/typo';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const ColorDiv = styled.div`
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

const Contact = () => {
    return (
        <ColorDiv>            
            <Menu />
            <H1Styled>
                <H1 text='For questions and booking, please fill in the form and' fontWeight='bold'/>
                <H1 text='upload a picture for inspiration.' fontWeight='bold'/>
            </H1Styled>
            <ContactForm />
            <Map />   
            <Footer />
        </ColorDiv>
    );
}

export default Contact;