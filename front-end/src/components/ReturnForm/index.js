import React from 'react';
import styled from 'styled-components';
import { P, H2, H3 } from '../typo';

const FormStyled = styled.form`
    height: 78vh;
    width: 74vw;
    padding-left: 13vw;
    padding-top: 6.5vh;
`;

const InputStyled = styled.div`
    height: 60vh;
    width: 49vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TextInputStyled = styled.input`
    height: 5vh;
    width: 24vw;
    font-size: 16px;
    background-color: #F7F7F7;
    border: 2px solid #1A1A1A;
`;

const TextAreaStyled = styled.textarea`
    height: 32vh;
    width: 49vw;
    font-size: 16px;
    background-color: #F7F7F7;
    border: 2px solid #1A1A1A;
`;

const ButtonStyled = styled.button`
    height: 5.5vh;
    width: 37vw;
    margin-top: 4.4vh;
    background-color: #1A1A1A;
`;

class ReturnForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
        status: ''
        };
    }

    render() {
        const { status } = this.state;
        return (
            < FormStyled
                onSubmit={this.submitForm}
                action = 'https://formspree.io/xknwkzeb'
                method='POST'
                enctype='multipart/form-data'
            >
                <InputStyled>
                    <label><H2 text='Name' fontWeight='bold' paddingBottom='4px' paddingTop='18px'/></label>
                    <TextInputStyled type='text' name='name' placeholder='Camille Jadermark' />
                    <label><H2 text='E-mail' fontWeight='bold' paddingBottom='4px' paddingTop='18px' /></label>
                    <TextInputStyled type='email' name='email' placeholder='camille-justine@live.se' />
                    <label><H2 text='Message' fontWeight='bold' paddingBottom='4px' paddingTop='18px' /></label>
                    <TextAreaStyled name='message' placeholder='Hello, ny name is Camille.'></TextAreaStyled>
                </InputStyled>
                <input type='file' name='attachment' accept='image/png, image/jpeg' />
                {status === 'SUCCESS' ? <P text='Thanks!' /> : <ButtonStyled><H3 text='SEND' color='#F7F7F7'/></ButtonStyled>}
                {status === 'ERROR' && <P text='Ooops! There was an error.' />}
            </FormStyled>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: 'SUCCESS' });
            } else {
                this.setState({ status: 'ERROR' });
            }
        };
        xhr.send(data);
        console.log(data);
    }
}

export default ReturnForm;