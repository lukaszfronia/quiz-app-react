import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.css";
const Navigation = () => {
  return (
    <Fragment>
      <div className="naviagion-container">
        <Link className="logo" to="/">
          <h1>Logo</h1>
        </Link>

        <div className="links-container">
          <Link className="link" to="/">
            Stwórz Quiz
          </Link>
          <Link className="link" to="/">
            Statystyki
          </Link>
          <Link className="link" to="/">
            Zaloguj się
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
