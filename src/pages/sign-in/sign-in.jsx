import Button from "../../components/button/button.component";
import GoogleButton from "react-google-button";

import image from "./geometry-g8bc5c6b0e_1280.png";

import { Link } from "react-router-dom";

import "./sign-in.styles.css";

const SignIn = () => {
  return (
    <>
      <div className="log-in-container">
        <div className="log-in-box">
          <div className="log-in-text-box">
            <h1>Witaj ponownie !</h1>
            <p>Zaloguj się za pomocą e-mail i hasła</p>
          </div>
          <form onSubmit={""}>
            <div className="input-form">
              <input
                type="e-mail"
                name="email"
                placeholder="Podaj adres e-mail"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Podaj hasło"
                required
              />
            </div>
            <div className="btn-box">
              <Button type="submit" buttonType="secondary">
                Zaloguj się
              </Button>
              <GoogleButton type="light"></GoogleButton>
            </div>
            <div className="to-register-box">
              <span className="register-span">
                Nie masz jeszcze konta ?
                <Link className="link-to-register" to="/zarejestruj-sie">
                  Zarejestruj się
                </Link>
              </span>
            </div>
          </form>
        </div>
        <div className="img-box">
          <img className="log-in-img" src={image} alt="Math Instruments"></img>
        </div>
      </div>
    </>
  );
};

export default SignIn;
