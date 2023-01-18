import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import image from "../sign-in/geometry-g8bc5c6b0e_1280.png";

import "./sign-up.styles.css";

const SignUp = () => {
  return (
    <>
      <div className="sign-up-container">
        <div className="img-box-left">
          <img className="sign-up-img" src={image} alt="Math Instruments"></img>
        </div>
        <div className="log-in-box">
          <div className="log-in-text-box">
            <h1>Stwórz konto !</h1>
            <p>Zarejestruj się za pomocą e-mail i hasła</p>
          </div>
          <form onSubmit={""}>
            <div className="input-form">
              <input
                type="text"
                name="name"
                placeholder="Podaj imię"
                required
              />
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
              <input
                type="password"
                name="password"
                placeholder="Powtórz hasło"
                required
              />
            </div>
            <div className="btn-box">
              <Button type="submit" buttonType="secondary">
                Utwórz konto
              </Button>
            </div>
            <div className="to-register-box">
              <span className="register-span">
                Masz już konto?
                <Link className="link-to-register" to="/zaloguj-sie">
                  Zaloguj się
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
