import React from 'react';

class ContactPage extends React.Component {
  render() {
    return(
      <div>
        <br />
        <h1 className="titles">Fancy a chat?</h1>
        <br />
        <br />
        <div class="contact-form">
          <p>
            So would I. Get in touch using <strong><a href="mailto:jasylwong@gmail.com">jasylwong@gmail.com</a></strong>, 
            and I'll holla back as soon as possible.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;