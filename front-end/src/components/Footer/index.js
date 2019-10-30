import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { P } from '../typo';

const FooterStyled = styled.div`
    height: 14.9vh;
    width: 100%;
    background-color: #1A1A1A;
    display:flex;
    align-items: center;
`;

const DivStyled = styled.div`
    height: 9vh;
    width: 10vw;
    margin-left: 6vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <DivStyled>
                <P text='EMAIL' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='PHONE' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='LOCATION' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <StyledLink to='/Sitemap'><P text='SITEMAP' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/></StyledLink>
            </DivStyled>
            <DivStyled>
                <P text='CLIENT SERVICE' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='SHIPPING' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='RETURNS' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
            </DivStyled>
            <DivStyled>
                <P text='FACEBOOK' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='INSTAGRAM' fontsize='10px' fontweight='bold' color='#F7F7F7' padding='2px'/>
            </DivStyled>
        </FooterStyled>
    );
}

export default Footer;