import {
  Wrapper,
  ImageCoffee,
  Container,
  BlogText,
  BlogTitle,
  BlogBtn,
} from './BlogSection.styled';

export function BlogSection() {
  return (
    <Wrapper id="blog">
      <ImageCoffee></ImageCoffee>
      <Container>
        <BlogText>April 16 2020</BlogText>
        <BlogTitle>Blog Post One</BlogTitle>
        <BlogText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </BlogText>
        <BlogBtn type="button">Read Our Blog</BlogBtn>
      </Container>
    </Wrapper>
  );
}
