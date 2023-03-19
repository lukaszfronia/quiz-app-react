import { Fragment, useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";
import menu from "./menu.png";
import close from "./close (1).png";

import { AuthContext } from "../../context/auth.context";
import {
  signOutUser,
  displayNameFromDatabase,
} from "../../utils/firebase/firebase.utils";

import "./navigation.styles.css";

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [isMobile, setIsMobile] = useState(false);

  const [sticky, setSticky] = useState(null);

  useEffect(() => {
    const handlerScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);

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
  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <Fragment>
      <div className={sticky ? "sticky" : ""}>
        <header className="naviagion-container">
          <Link className="logo" to="/">
            <h1 className="logo-text">
              Quiz<span className="quiz-color">Math</span>
            </h1>
          </Link>

          <nav
            className={isMobile ? "nav-open main-nav" : "main-nav"}
            onClick={() => setIsMobile(false)}
          >
            <ul className="main-nav-list">
              <li>
                <Link className="link" to="stworzquiz/">
                  Stwórz Quiz
                </Link>
              </li>
              {currentUser ? (
                <>
                  <li>
                    <Link className="link" to="/statystyki">
                      Statystyki
                    </Link>
                  </li>
                  <li>
                    <Button onClick={signOutHandler}>Wyloguj się</Button>
                  </li>
                </>
              ) : (
                <li>
                  <Button onClick={goToSignInHandler}>Zaloguj się</Button>
                </li>
              )}
            </ul>
          </nav>

          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <img
                src={close}
                alt="przycisk do zamykania menu"
                className="close-menu-icon"
              />
            ) : (
              <img
                src={menu}
                alt="przycisk do otwierania menu"
                className="open-menu-icon"
              />
            )}
          </button>
        </header>
        <div className="bottom-line"></div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
