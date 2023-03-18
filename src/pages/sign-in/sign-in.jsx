import Button from "../../components/button/button.component";
import GoogleButton from "react-google-button";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  addGeneralStatsForUser,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import image from "./geometry-g8bc5c6b0e_1280.png";
import google from "./google.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import {
  createUserDocumentFromAuth,
  addCollectionAndDocumentsToUser,
  addSummaryAllQuizToUser,
  addUserNameToGeneralStats,
  createRankingDocument,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.css";
import { async } from "@firebase/util";

const defaultField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, allUserUid } = useContext(AuthContext);
  const [formFields, setFormFields] = useState(defaultField);
  const { email, password } = formFields;

  //Funkcje

  const resetFields = () => {
    setFormFields(defaultField);
  };

  const logInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setCurrentUser(user);

      if (!allUserUid.some((item) => item.uid === user.uid)) {
        await createUserDocumentFromAuth(user);
        await createRankingDocument(user);
        await addCollectionAndDocumentsToUser(user);
        await addSummaryAllQuizToUser(user);
        await addGeneralStatsForUser(user);
        await addUserNameToGeneralStats(user, user.displayName);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Błędne hasło", {
            position: "top-center",
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
          });

          resetFields();
          break;
        case "auth/user-not-found":
          toast.error("Błędny adres e-mail", {
            position: "top-center",
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
          });
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
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
                className="input-sign-in"
                type="e-mail"
                name="email"
                value={email}
                placeholder="Podaj adres e-mail"
                onChange={onChangeHandler}
                required
              />
              <input
                className="input-sign-in"
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
              <Button
                type="button"
                className="btn-google"
                onClick={logInWithGoogle}
              >
                <div className="btn-google-box">
                  <img
                    className="icon-google"
                    src={google}
                    alt="ikonka google"
                  />
                  <span>Zaloguj się z Google</span>
                </div>
              </Button>
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
