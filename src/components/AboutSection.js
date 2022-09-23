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
        <img src={require('./images/home/people.jpg')} alt="People" />
      </picture>
      <p>What you are looking for</p>
      <h2>We provide bespoke solutions</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
        ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
        illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste
        maiores deleniti?
      </p>
      <button type="button">Read More</button>
    </section>
  );
}
