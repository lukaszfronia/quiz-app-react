import { Fragment, useContext, useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";

import { AuthContext } from "../../context/auth.context";
import {
  signOutUser,
  displayNameFromDatabase,
} from "../../utils/firebase/firebase.utils";

import "./navigation.styles.css";

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const goToSignInHandler = () => {
    navigate("zaloguj-sie/");
  };

  const signOutHandler = async () => {
    try {
      await signOutUser();

      setCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="naviagion-container">
        <Link className="logo" to="/">
          <h1>
            Quiz<span className="quiz-color">Math</span>
          </h1>
        </Link>

        <div className="links-container">
          <Link className="link" to="/">
            Stwórz Quiz
          </Link>

          {currentUser ? (
            <>
              <Link className="link" to="/statystyki">
                Statystyki
              </Link>
              <Button onClick={signOutHandler}>Wyloguj się</Button>
            </>
          ) : (
            <Button onClick={goToSignInHandler}>Zaloguj się</Button>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
