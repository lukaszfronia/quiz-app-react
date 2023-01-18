import { Outlet, useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";

// import image from "./brain-g19d53071e_1920.jpg";
import graduation from "./graduation-g428339860_1280.png";
import Button from "../../components/button/button.component";
import { AuthContext } from "../../context/auth.context";

import "./home.styles.css";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const goToQuizHandler = () => {
    navigate("quiz/");
  };
  const goToSignInPageHandler = () => {
    navigate("zaloguj-sie/");
  };
  return (
    <Fragment>
      <div className="home-container">
        <div className="text-box">
          <h1 className="primary-text">Naucz się MATEMATYKI w łatwy sposób</h1>
          <p className="secondary-text">
            Pomożemy Ci zrozumieć matematykę od zaraz
          </p>
          <div className="button-box">
            {currentUser ? (
              <Button buttonType="secondary" onClick={goToQuizHandler}>
                Zaczynajmy
              </Button>
            ) : (
              <Button buttonType="secondary" onClick={goToSignInPageHandler}>
                Zaczynajmy
              </Button>
            )}
          </div>
        </div>
        <div className="img=-box">
          <img
            src={graduation}
            alt="Brain with mathematic"
            className="img-brain"
          />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Home;
