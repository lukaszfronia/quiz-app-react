import { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";

import "./navigation.styles.css";

{
  /* Dodac helperFunction która przeniesie nas do Strony logowania12 */
}
const Navigation = () => {
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
          <Link className="link" to="/">
            Statystyki
          </Link>

          <Button>Zaloguj się</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
