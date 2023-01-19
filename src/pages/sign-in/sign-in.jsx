import Button from "../../components/button/button.component";
import GoogleButton from "react-google-button";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import image from "./geometry-g8bc5c6b0e_1280.png";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./sign-in.styles.css";
import { async } from "@firebase/util";

const SignIn = () => {
  const navigate = useNavigate();
  //Funkcje
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // Reszta kodu
  return (
    <>
      <p>{currentUser?.displayName}</p>
      <div className="log-in-container">
        <div className="log-in-box">
          <div className="log-in-text-box">
            <h1>Witaj ponownie !</h1>
            <p>Zaloguj się za pomocą e-mail i hasła</p>
          </div>
          <form onSubmit={handleSubmit}>
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
              <Button buttonType="secondary">Zaloguj się</Button>
              <GoogleButton
                type="light"
                onClick={logInWithGoogle}
              ></GoogleButton>
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
