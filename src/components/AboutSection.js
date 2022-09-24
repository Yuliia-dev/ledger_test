import {
  ImagePeople,
  Container,
  TextAbout,
  TitleAbout,
  AboutBtn,
} from './AboutSection.styled';
export function AboutSection() {
  return (
    <section id="about">
      <picture>
        <source
          srcSet={`
    ${require('./images/home/people.webp')} 1x, 
    ${require('./images/home/people@2x.webp')} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`
    ${require('./images/home/people.jpg')} 1x, 
    ${require('./images/home/people@2x.jpg')} 2x`}
        />
        <ImagePeople src={require('./images/home/people.jpg')} alt="People" />
      </picture>
      <Container>
        <TextAbout>What you are looking for</TextAbout>
        <TitleAbout>We provide &nbsp; bespoke solutions</TitleAbout>
        <TextAbout>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </TextAbout>
        <AboutBtn type="button">Read More</AboutBtn>
      </Container>
    </section>
  );
}
