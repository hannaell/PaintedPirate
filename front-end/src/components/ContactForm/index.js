import React from 'react';
import styled from 'styled-components';
import { P } from '../typo';


class ContactForm extends React.Component {
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
      <form
        onSubmit={this.submitForm}
        action = 'https://formspree.io/xknwkzeb'
        method='POST'
      >
        
        <label>Name:</label>
        <input type='text' name='name' />
        <label>Email:</label>
        <input type='email' name='email' />
        <label>Message:</label>
        <input type='text' name='message' />
        {status === 'SUCCESS' ? <P text='Thanks!'/> : <button>Submit</button>}
        {status === 'ERROR' && <P text='Ooops! There was an error.' />}
      </form>
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

export default ContactForm;