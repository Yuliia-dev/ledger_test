import { Container, CasesText, CasesTitle, CasesList } from './Cases.styled';
export function Cases() {
  return (
    <Container id="cases">
      <CasesText>This is what we do</CasesText>
      <CasesTitle>Business Cases</CasesTitle>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </CasesText>
      <CasesList>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases1.webp')} 1x, 
    ${require('./images/cases/cases1@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases1.jpg')} 1x, 
    ${require('./images/cases/cases1@2x.jpg')} 2x`}
            />
            <img
              src={require('./images/cases/cases1.jpg')}
              alt="People at the table"
            />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases2.webp')} 1x, 
    ${require('./images/cases/cases2@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases2.jpg')} 1x, 
    ${require('./images/cases/cases2@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases2.jpg')} alt="Laptop" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases3.webp')} 1x, 
    ${require('./images/cases/cases3@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases3.jpg')} 1x, 
    ${require('./images/cases/cases3@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases3.jpg')} alt="Notebook" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases4.webp')} 1x, 
    ${require('./images/cases/cases4@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases4.jpg')} 1x, 
    ${require('./images/cases/cases4@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases4.jpg')} alt="Buildings" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases5.webp')} 1x, 
    ${require('./images/cases/cases5@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases5.jpg')} 1x, 
    ${require('./images/cases/cases5@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/cases/cases5.jpg')} alt="Handshake" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/cases/cases7.webp')} 1x, 
    ${require('./images/cases/cases7@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/cases/cases7.jpg')} 1x, 
    ${require('./images/cases/cases7@2x.jpg')} 2x
  `}
            />
            <img
              src={require('./images/cases/cases7.jpg')}
              alt="Hands together"
            />
          </picture>
        </li>
      </CasesList>
    </Container>
  );
}
