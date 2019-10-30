import React from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
    color: ${props => props.color || '#1A1A1A'};
`

const H2Styled = styled.h2`
    color: ${props => props.color || '#1A1A1A'};
`

const H3Styled = styled.h3`
    color: ${props => props.color || '#1A1A1A'};
`

const PStyled = styled.p`
    font-size: ${props => props.fontsize || '16px'};
    font-weight: ${props => props.fontweight || 'normal'};
    color: ${props => props.color || '#1A1A1A'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '1px'};
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