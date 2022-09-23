export function Team() {
  return (
    <section>
      <p>Who we are</p>
      <h2>Who we are</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul>
        <li>
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
          <h3>John Doe</h3>
          <p lang="en">President</p>
        </li>
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
          <h3>Jane Doe</h3>
          <p lang="en">Vice President</p>
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
          <h3>Steve Smith</h3>
          <p lang="en">Marketing Head</p>
        </li>
      </ul>
    </section>
  );
}
