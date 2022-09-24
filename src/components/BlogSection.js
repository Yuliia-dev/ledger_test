import { Container, BlogText, BlogTitle, BlogBtn } from './BlogSection.styled';

export function BlogSection() {
  return (
    <section id="blog">
      <picture>
        <source
          srcSet={`
    ${require('./images/home/blog.webp')} 1x, 
    ${require('./images/home/blog@2x.webp')} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`
    ${require('./images/home/blog.jpg')} 1x, 
    ${require('./images/home/blog@2x.jpg')} 2x`}
        />
        <img
          src={require('./images/home/blog.jpg')}
          alt="Cup of tea and notebooks"
        />
      </picture>
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
    </section>
  );
}
