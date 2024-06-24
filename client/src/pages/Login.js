import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import "../assets/styles/login.scss";

function Login() {
  return (
    <div>
      <Header />
      <main className="login-container">
        <div className="login-container__login-form">
          <form>
            <input type='text' placeholder="Login.." autoComplete="on"/>
            <input type='password' placeholder="Login.." autoComplete="off"/>
            <button> Login </button>
          </form>
        </div>
        <div className="login-container__register-container"></div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
