// import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  ImageMen,
  // FormE,
  Container,
  ContactTitle,
  // ContactInput,
  // ContactLabel,
  // ContactBtn,
} from './Contact.styled';
export function Contact() {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  const initialValue = {
    name: '',
    email: '',
  };
  const validation = Yup.object({
    name: Yup.string(),
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  const onSubmit = value => {
    console.log('Form data', value);
  };

  return (
    <Wrapper id="contact">
      <ImageMen></ImageMen>

      <Container>
        <ContactTitle>Request Callback</ContactTitle>

        <Formik
          initialValues={initialValue}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {
            ({
              // values,
              // errors,
              // touched,
              // handleChange,
              // handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {/* {errors.email && touched.email && errors.email} */}
                <input
                  type="email"
                  name="email"
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.password}
                />
                {/* {errors.password && touched.password && errors.password} */}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )
            /* {formik => {
            return (
              <Form>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <button type="submit" disabled={!formik.isValid}>
                  Submit
                </button>
              </Form>
            );
          }} */
          }
        </Formik>
        {/* <FormE>
          <ContactLabel for="name">
            Enter your name
            <ContactInput
              value={name}
              placeholder="Enter your name"
              type="text"
              name="name"
              minLength="2"
              pattern="[a-zA-Zа-яёА-ЯЁ]+"
              title="Use just letter"
              required
            />
          </ContactLabel>
          <label>
            <ContactInput
              value={email}
              placeholder="Enter email*"
              type="email"
              name="user-email"
              required
            />
            <span>Enter email*</span>
          </label>

          <ContactBtn type="button">Send</ContactBtn>
        </FormE> */}
      </Container>
    </Wrapper>
  );
}
