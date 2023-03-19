import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  setNewPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import "./reset-form.styles.css";

const defaultField = {
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

    if (password !== confirmPassword)
      return toast.warn("Podane hasła się róźnią", {
        className: "toast-message",
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });

    try {
      await setNewPassword(currentUser, password);
      // await signOutUser();

      resetFields();
      setOverlay(false);
      setModal(false);
      toast.success("Hasło zostało zmienione", {
        className: "toast-message",
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    } catch (error) {
      // TODO: Ulepszyć wyswitlanie się błędów
      console.log(error);
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
    <>
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
              <h1 className="change-password-title">Wprowadź nowe hasło</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-form">
                <input
                  className="input-sign-in"
                  type="password"
                  name="password"
                  placeholder="Podaj hasło"
                  onChange={onChangeHandler}
                  value={password}
                  required
                />
                <input
                  className="input-sign-in"
                  type="password"
                  name="confirmPassword"
                  placeholder="Powtórz hasło"
                  onChange={onChangeHandler}
                  value={confirmPassword}
                  required
                />
              </div>
              <div className="btn-box-reset-form">
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
    </>
  );
};

export default ResetForm;
