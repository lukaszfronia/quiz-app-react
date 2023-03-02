import Button from "../../components/button/button.component";
import GoogleButton from "react-google-button";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import image from "./geometry-g8bc5c6b0e_1280.png";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  addCollectionAndDocumentsToUser,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.css";
import { async } from "@firebase/util";

const defaultField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [formFields, setFormFields] = useState(defaultField);
  const { email, password } = formFields;
  const [googleUser, setGoogleUser] = useState(currentUser?.displayName);

  //Funkcje

  const resetFields = () => {
    setFormFields(defaultField);
  };

  const logInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setCurrentUser(user);
      await createUserDocumentFromAuth(user);
      console.log(googleUser);
      if (user.displayName !== googleUser) {
        await addCollectionAndDocumentsToUser(user);
        console.log(user.displayName);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setGoogleUser(currentUser?.displayName);
    console.log(googleUser);
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFields();
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
                value={email}
                placeholder="Podaj adres e-mail"
                onChange={onChangeHandler}
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Podaj hasło"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="btn-box">
              <Button type="submit" buttonType="secondary">
                Zaloguj się
              </Button>
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
