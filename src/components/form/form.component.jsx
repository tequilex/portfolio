import { useState } from "react";
import emailjs from 'emailjs-com'

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./form.styles.scss";

const Form = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message
    }

    emailjs.send(
      'service_6jnooky',
      'template_4srhnr9',
      templateParams,
      'Yg2bnAxs3XkEhAVum'
    ).then((response) => {
      console.log('Email sent successfully');
      setName('')
      setEmail('')
      setMessage('')
      setStatus(true)
    })
    .catch((error) => {
      console.log('failed to send email', error);
    })
  }

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          placeholder="asasa@mail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Subject"
          type="text"
          placeholder="Just saying hi"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Message"
          type="text"
          placeholder="Let's talk about..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {status && (<div className="status">Ваше сообщение отправлено!</div>)}
        <Button type='submit'>Send message</Button>
      </form>
    </div>
  );
};
export default Form;
