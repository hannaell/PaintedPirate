import React from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
    font-size: ${props => props.fontSize || '32px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.color || '#1A1A1A'};
    margin: ${props => props.margin || '0px'};
    padding-top: ${props => props.paddingTop || '0px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    padding-left: ${props => props.paddingLeft || '0px'};
    padding-right: ${props => props.paddingRight || '0px'};
`

const H2Styled = styled.h2`
    font-size: ${props => props.fontSize || '24px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.color || '#1A1A1A'};
    margin: ${props => props.margin || '0px'};
    padding-top: ${props => props.paddingTop || '0px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    padding-left: ${props => props.paddingLeft || '0px'};
    padding-right: ${props => props.paddingRight || '0px'};
`

const H3Styled = styled.h3`
    font-size: ${props => props.fontSize || '18px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.color || '#1A1A1A'};
    margin: ${props => props.margin || '0px'};
    padding-top: ${props => props.paddingTop || '0px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    padding-left: ${props => props.paddingLeft || '0px'};
    padding-right: ${props => props.paddingRight || '0px'};
    z-index: ${props => props.zIndex || '0'};
`

const PStyled = styled.p`
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.color || '#1A1A1A'};
    margin: ${props => props.margin || '0px'};
    padding-top: ${props => props.paddingTop || '0px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    padding-left: ${props => props.paddingLeft || '0px'};
    padding-right: ${props => props.paddingRight || '0px'};
`

export const H1 = (props) => {
    return <H1Styled {...props}>{props.text}</H1Styled>
}

export const H2 = props => {
  return <H2Styled {...props}>{props.text}</H2Styled>
}

export const H3 = props => {
  return <H3Styled {...props}>{props.text}</H3Styled>
}

export const P = props => {
  return <PStyled {...props}>{props.text}</PStyled>
}