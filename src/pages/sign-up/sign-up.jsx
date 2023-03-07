import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import Button from "../../components/button/button.component";
import image from "../sign-in/geometry-g8bc5c6b0e_1280.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/auth.context";
import {
  createUserAccountWithEmailAndPassword,
  createUserDocumentFromAuth,
  addCollectionAndDocumentsToUser,
  addSummaryAllQuizToUser,
  addGeneralStatsForUser,
  addUserNameToGeneralStats,
  createRankingDocument,
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

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  //Funkcje
  const resetFields = () => {
    setFormFields(defaultField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return toast.warn("Podane hasła się róźnią", {
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });

    try {
      const { user } = await createUserAccountWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      await createRankingDocument(user);
      await addCollectionAndDocumentsToUser(user);
      await addSummaryAllQuizToUser(user);
      await addGeneralStatsForUser(user);
      await addUserNameToGeneralStats(user, displayName);

      resetFields();
      navigate("/zaloguj-sie");
    } catch (error) {
      // TODO: Ulepszyć wyswitlanie się błędów
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
