import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { P } from '../typo';

const FooterStyled = styled.div`
    height: 15vh;
    width: 100vw;
    background-color: #1A1A1A;
    display:flex;
    align-items: center;
`;

const DivStyled = styled.div`
    height: 15vh;
    width: 22vw;
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

const AStyled = styled.a`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <DivStyled>
                <P text='HENKE@PAINTEDPIRATE.COM' fontsize='12px' fontweight='bold' color='#F7F7F7' paddingBottom='2px'/>
                <P text='031-15 00 07' fontsize='12px' fontweight='bold' color='#F7F7F7' paddingBottom='2px'/>
                <P text='BERTSHULT LOFTÅS 100' fontsize='12px' fontweight='bold' color='#F7F7F7' />
                <P text='438 93 LANDVETTER' fontsize='12px' fontweight='bold' color='#F7F7F7' paddingBottom='2px'/>
                <StyledLink to='/Contact'><P text='SITEMAP' fontsize='12px' fontweight='bold' color='#F7F7F7' /></StyledLink>
            </DivStyled>
            <DivStyled>
                <P text='CLIENT SERVICE' fontsize='12px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='SHIPPING' fontsize='12px' fontweight='bold' color='#F7F7F7' padding='2px'/>
                <P text='RETURNS' fontsize='12px' fontweight='bold' color='#F7F7F7' padding='2px'/>
            </DivStyled>
            <DivStyled>
                <AStyled href='https://www.facebook.com/PaintedPirate/' target='_blank'><P text='FACEBOOK' fontsize='12px' fontweight='bold' color='#F7F7F7' padding='2px'/></AStyled>
                <AStyled href='https://www.instagram.com/henketattoo/' target='_blank'><P text='INSTAGRAM' fontsize='12px' fontweight='bold' color='#F7F7F7' padding='2px'/></AStyled>
            </DivStyled>
        </FooterStyled>
    );
}

export default Footer;