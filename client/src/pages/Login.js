import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/login.scss";

function Login() {
  return (
    <div>
      <Header />
      <main className="login-container">
        <div className="login-container__login-form">
          <h1>Zaloguj się! </h1>
          <form>
            <input
              className="login-container__login-form__input"
              type="text"
              placeholder="Login.."
              autoComplete="on"
            />
            <input
              className="login-container__login-form__input"
              type="password"
              placeholder="Password.."
              autoComplete="off"
            />
            <button> Login </button>
          </form>
        </div>
        <div className="login-container__register-container">
          <h1> Dołącz do grona zadowolonych sportowców,</h1>
          <p>
            którzy dzięki naszemu systemowi wspomagającemu treningi, osiągają
            swoje cele szybciej i efektywniej. Skorzystaj z narzędzi, które
            pomogą Ci poprawić wydajność, monitorować postępy i optymalizować
            każdy aspekt Twojego treningu.
          </p>
          <Link to="/register">
            <div className="login-container__register-container__button">
              Dołącz już dziś! <FontAwesomeIcon icon={faArrowRight} size="2x"/>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
