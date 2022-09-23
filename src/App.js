import {
  Header,
  Hero,
  AboutSection,
  Cases,
  BlogSection,
  Team,
  Contact,
  Footer,
} from './components';
import { Container, Wrapper } from './App.styled';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero />
      </Wrapper>
      <Container>
        <AboutSection />
        <Cases />
        <BlogSection />
        <Team />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
