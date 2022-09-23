export function Contact() {
  return (
    <section id="contact">
      <picture>
        <source
          srcSet={`
    ${require('./images/home/contact.webp')} 1x, 
    ${require('./images/home/contact@2x.webp')} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`
    ${require('./images/home/contact.jpg')} 1x, 
    ${require('./images/home/contact@2x.jpg')} 2x
  `}
        />
        <img src={require('./images/home/contact.jpg')} alt="Men" />
      </picture>

      <label>
        Enter your name
        <input
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
        Enter email*
        <input
          placeholder="Enter email*"
          type="email"
          name="user-email"
          required
        />
      </label>

      <button type="button">Send</button>
    </section>
  );
}
