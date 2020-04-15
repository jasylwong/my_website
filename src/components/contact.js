import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: 'null',
    }
  }

  handleChange = (event) => {
    console.log(event);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
    })
  }

  render() {
    return(
      <div>
        <br></br>
        <h1 class="titles">Fancy a chat?</h1>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full name:</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message:</Form.Label>
              <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} rows="3" />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send message</Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
          </Form>
        </div>
      </div>
    )
  }
}

export default Contact;