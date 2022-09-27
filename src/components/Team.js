import {
  Container,
  TeamText,
  TeamTitle,
  TeamList,
  TeamName,
  OverlayWrapper,
  Overlay,
  Link,
  ItemLi,
} from './Team.styled';
export function Team() {
  return (
    <Container>
      <TeamText>Who we are</TeamText>
      <TeamTitle>Our Professional Team</TeamTitle>
      <TeamText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TeamText>
      <TeamList>
        <ItemLi>
          <Link href="./">
            <OverlayWrapper>
              <picture>
                <source
                  srcSet={`
    ${require('./images/team/person1.webp')} 1x, 
    ${require('./images/team/person1@2x.webp')} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`
    ${require('./images/team/person1.jpg')} 1x, 
    ${require('./images/team/person1@2x.jpg')} 2x`}
                />
                <img src={require('./images/team/person1.jpg')} alt="Men" />
              </picture>
              <Overlay>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                in, deserunt laudantium facere, aut enim possimus ipsum velit
                itaque voluptates nisi ipsa beatae dolor cupiditate.
              </Overlay>
            </OverlayWrapper>
          </Link>
          <TeamName>John Doe</TeamName>
          <TeamText lang="en">President</TeamText>
        </ItemLi>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/team/person2.webp')} 1x, 
    ${require('./images/team/person2@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/team/person2.jpg')} 1x, 
    ${require('./images/team/person2@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/team/person2.jpg')} alt="Women" />
          </picture>
          <TeamName>Jane Doe</TeamName>
          <TeamText lang="en">Vice President</TeamText>
        </li>
        <li>
          <picture>
            <source
              srcSet={`
    ${require('./images/team/person3.webp')} 1x, 
    ${require('./images/team/person3@2x.webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`
    ${require('./images/team/person3.jpg')} 1x, 
    ${require('./images/team/person3@2x.jpg')} 2x
  `}
            />
            <img src={require('./images/team/person3.jpg')} alt="Men" />
          </picture>
          <TeamName>Steve Smith</TeamName>
          <TeamText lang="en">Marketing Head</TeamText>
        </li>
      </TeamList>
    </Container>
  );
}
