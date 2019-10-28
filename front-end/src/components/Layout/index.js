import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Wrapper = styled.div`
    margin: 0 auto;
`

const Layout = (props) => {
    return(
        <Wrapper {...props}>
            {props.children}
            <Menu />
            <Footer />
        </Wrapper>
    );
}

export default Layout;