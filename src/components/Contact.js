import {
  Wrapper,
  ImageMen,
  Container,
  ContactTitle,
  ContactInput,
  ContactBtn,
} from './Contact.styled';
export function Contact() {
  return (
    <Wrapper id="contact">
      <ImageMen></ImageMen>

      <Container>
        <ContactTitle>Request Callback</ContactTitle>
        <label>
          <ContactInput
            placeholder="Enter your name"
            type="text"
            name="user-name"
            minLength="2"
            pattern="[a-zA-Zа-яёА-ЯЁ]+"
            title="Use just letter"
            required
          />
        </label>
        <label>
          <ContactInput
            placeholder="Enter email*"
            type="email"
            name="user-email"
            required
          />
        </label>

        <ContactBtn type="button">Send</ContactBtn>
      </Container>
    </Wrapper>
  );
}
