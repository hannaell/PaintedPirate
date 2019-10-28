import React from 'react';
import styled from 'styled-components';
import { P } from '../typo';

const DivStyled = styled.div`
    height: 14.9vh;
    width: 100%;
    background-color: #1A1A1A;
`;

const Footer = () => {
    return (
        <DivStyled>
            <P text='EMAIL' fontsize='10px' fontweight='bold' color='#F7F7F7'/>
            <P text='PHONE' fontsize='10px' fontweight='bold' color='#F7F7F7'/>
            <P text='LOCATION' fontsize='10px' fontweight='bold' color='#F7F7F7'/>
            <P text='SITEMAP' fontsize='10px' fontweight='bold' color='#F7F7F7'/>
        </DivStyled>
    );
}

export default Footer;