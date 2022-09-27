import {
  Wrapper,
  ImagePeople,
  Container,
  TextAbout,
  TitleAbout,
  AboutBtn,
} from './AboutSection.styled';
export function AboutSection() {
  return (
    <Wrapper id="about">
      <ImagePeople></ImagePeople>
      <Container>
        <TextAbout>What you are looking for</TextAbout>
        <TitleAbout>We provide bespoke solutions</TitleAbout>
        <TextAbout>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </TextAbout>
        <AboutBtn type="button">Read More</AboutBtn>
      </Container>
    </Wrapper>
  );
}
