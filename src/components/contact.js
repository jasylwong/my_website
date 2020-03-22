import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
      <br></br>
      <h1 class="titles">Fancy a chat?</h1>
      <div class="contact-form">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Get in touch
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Contact;