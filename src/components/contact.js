import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Contact() {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true)
  }

  return (
    <div>
      <br></br>
      <h1 class="titles">Fancy a chat?</h1>
      <br></br>
      <div class="contact-form">
        <p>
          So would I.
          Fill out the form below, and I'll get back to you as soon as possible.
        </p><br></br>
        {/* <Form name="contact" noValidate validated={validated} onSubmit={handleSubmit} method="POST" data-netlify="true">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" required/>
            <Form.Control.Feedback type="invalid">
              Please tell me who you are, so I know who to reply to!
            </Form.Control.Feedback>
          </Form.Group> */}

          {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email so I can reply to you!
            </Form.Control.Feedback>
          </Form.Group> */}

          {/* <Form.Group controlId="formBasicMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Enter message" required/>
            <Form.Control.Feedback type="invalid">
              Please enter a message so I know what you want to chat about!
            </Form.Control.Feedback>
          </Form.Group> */}
{/* 
          <Button variant="primary" type="submit">
            Get in touch
          </Button> */}
        {/* </Form> */}
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Contact;