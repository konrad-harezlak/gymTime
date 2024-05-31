import Header from "../components/layout/Header.js";
import "../assets/styles/contact.scss";

function Contact() {
  return (
    <div>
      <Header />
      <main className="contact-container">
        <div className="contact__header">
          <h1>Kontakt</h1>
        </div>
        <div className="contact__links">
          <h2>Odwiedź nas na:</h2>
          <ul>
            <li>[FB] </li>
            <li>[TT] </li>
            <li>[IG] </li>
          </ul>
          <h2>Skontaktuj się z nami:</h2>
          <ul>
            <li>Adres Email: biuro@gymtime.com</li>
            <li>Numer telefonu: +48 123 123 123</li>
          </ul>
          <span>Jesteśmy czynni od poniedziałku do piątku <br/>w godzianch 8:00-16:00</span>
        </div>
        <div className="contact__form">
          <h2>Wyślij do nas maila:</h2>
          <form className="contact__form__input-container">
            <label htmlFor="name">Imie i Nazwisko: </label>
            <input className="contact__form__input-container__input" id="name" type="text" placeholder="Jan Kowalski.."></input>
            <label htmlFor="email">Adres Email</label>
            <input className="contact__form__input-container__input" id="email" type="mail" placeholder="example@example.com.."></input>
            <label htmlFor="number">Numer telefonu</label>
            <input className="contact__form__input-container__input" id="number" type="tel" placeholder="+48123123123"></input>
            <label htmlFor="message"> Wiadomość:</label>
            <input className="contact__form__input-container__input" id="message" type="text" placeholder="Wiadmość.."></input>
            <input className="contact__form__input-container__input" type="button" value="Wyślij!"></input>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Contact;
