// import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  ImageMen,
  FormForContact,
  Container,
  ContactTitle,
  ContactInput,
  ContactLabel,
  ContactBtn,
} from './Contact.styled';
export function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <Wrapper id="contact">
      <ImageMen></ImageMen>

      <Container>
        <ContactTitle>Request Callback</ContactTitle>

        <FormForContact
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit(e);
            alert('Form is send');
          }}
        >
          <ContactLabel htmlFor="name">Name</ContactLabel>
          <ContactInput
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <ContactLabel htmlFor="email">Email </ContactLabel>
          <ContactInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <ContactBtn type="submit">Submit</ContactBtn>
        </FormForContact>
      </Container>
    </Wrapper>
  );
}
