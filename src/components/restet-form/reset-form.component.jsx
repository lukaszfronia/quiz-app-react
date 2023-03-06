import { useState, useContext } from "react";
import { motion } from "framer-motion";

import {
  setNewPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import "./reset-form.styles.css";

const defaultField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const ResetForm = ({ currentUser, setOverlay, setModal, setCurrentUser }) => {
  const [formFields, setFormFields] = useState(defaultField);
  const { password, confirmPassword } = formFields;

  //Funkcje
  const resetFields = () => {
    setFormFields(defaultField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Podane hasła się różnią");

    try {
      await setNewPassword(currentUser, password);
      // await signOutUser();

      setCurrentUser(null);
      resetFields();
      setOverlay(false);
      setModal(false);
      alert("Hasło zostało zmienione");
    } catch (error) {
      // TODO: Ulepszyć wyswitlanie się błędów
      switch (error.code) {
        case "auth/wrong-password":
          alert("Błędne hasło");

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

  const setOverlayHandler = () => {
    setOverlay(false);
    setModal(false);
  };

  return (
    <motion.div
      className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      }}
    >
      <div className={`reset-container `}>
        <div className="log-in-box">
          <div className="log-in-text-box">
            <h1>Wprowadź nowe hasło</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-form">
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
              <Button onClick={setOverlayHandler} buttonType="secondary">
                Cofnij
              </Button>
              <Button type="submit" buttonType="secondary">
                Zapisz
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ResetForm;
