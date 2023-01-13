import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";
import Statistic from "../statistic/statistic";

import "./navigation.styles.css";

{
  /* Dodac helperFunction która przeniesie nas do Strony logowania */
}
const Navigation = () => {
  const navigate = useNavigate();

  const goToSignInHandler = () => {
    navigate("zaloguj-sie/");
  };

  return (
    <Fragment>
      <div className="naviagion-container">
        <Link className="logo" to="/">
          <h1>
            Quiz<span>Math</span>
          </h1>
        </Link>

        <div className="links-container">
          <Link className="link" to="/">
            Stwórz Quiz
          </Link>
          <Link className="link" to="/statystyki">
            Statystyki
          </Link>
          <Button onClick={goToSignInHandler}>Zaloguj się</Button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
