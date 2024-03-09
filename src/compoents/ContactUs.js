import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/esm/Button';



function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <>
    <form ref={form} onSubmit={sendEmail} id='forms'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="phone" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <div id='space'> </div>
      <Button variant="primary" type="submit" value="Send" >Send</Button>{' '}
    </form>
  </>

  );
};


export default Form