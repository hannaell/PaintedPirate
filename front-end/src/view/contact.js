import React from 'react';
import Layout from '../components/Layout';
import { H1 } from '../components/typo';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
    return (
        <Layout>
            <H1 text='For questions or time booking, please fill in the form and upload a picture for inspiration.' />
            <ContactForm />
            <Map />
        </Layout>
    );
}

export default Contact;