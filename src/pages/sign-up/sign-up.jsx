import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/button/button.component";
import image from "../sign-in/geometry-g8bc5c6b0e_1280.png";

import {
  createUserAccountWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up.styles.css";
const defaultField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = formFields;

  //Funkcje
  const resetFields = () => {
    setFormFields(defaultField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Podane hasła się różnią");

    try {
      const { user } = await createUserAccountWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });

      resetFields();
      navigate("/zaloguj-sie");
    } catch (error) {
      // TODO: Ulepszyć wyswitlanie się błędów
      switch (error.code) {
        case "auth/wrong-password":
          alert("Błędne hasło");
          resetFields();
          break;
        case "auth/user-not-found":
          alert("Błędny adres e-mail");
          resetFields();
          break;
        default:
          console.log(error);
      }
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // Reszta kodu
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
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <input
                type="text"
                name="displayName"
                placeholder="Podaj imię"
                onChange={onChangeHandler}
                value={displayName}
                required
              />
              <input
                type="e-mail"
                name="email"
                placeholder="Podaj adres e-mail"
                onChange={onChangeHandler}
                value={email}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Podaj hasło"
                onChange={onChangeHandler}
                value={password}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Powtórz hasło"
                onChange={onChangeHandler}
                value={confirmPassword}
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
