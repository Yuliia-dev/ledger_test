import { useState } from 'react';
import {
  Wrapper,
  ImageMen,
  Form,
  Container,
  ContactTitle,
  ContactInput,
  ContactLabel,
  ContactBtn,
} from './Contact.styled';
export function Contact() {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');

  return (
    <Wrapper id="contact">
      <ImageMen></ImageMen>

      <Container>
        <ContactTitle>Request Callback</ContactTitle>
        <Form>
          <ContactInput
            // value={name}
            // placeholder="Enter your name"
            type="text"
            name="name"
            minLength="2"
            pattern="[a-zA-Zа-яёА-ЯЁ]+"
            title="Use just letter"
            required
          />
          <ContactLabel for="name">Enter your name</ContactLabel>
          <label>
            <ContactInput
              // value={email}
              // placeholder="Enter email*"
              type="email"
              name="user-email"
              required
            />
            <span>Enter email*</span>
          </label>

          <ContactBtn type="button">Send</ContactBtn>
        </Form>
      </Container>
    </Wrapper>
  );
}
