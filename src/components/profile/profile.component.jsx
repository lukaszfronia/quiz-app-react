import { useContext, useState, useEffect } from "react";

import "./profile.styles.css";
import avatar from "./dog-gffec67af5_1280.png";

import Button from "../../components/button/button.component";
import StatisticCategory from "../../components/statistic-category/statistic-category.component";
import { AuthContext } from "../../context/auth.context";
import { displayNameFromDatabase } from "../../utils/firebase/firebase.utils";

const Profile = () => {
  const { currentUser, summaryQuiz } = useContext(AuthContext);

  const [name, setName] = useState([]);

  useEffect(() => {
    const displayNameUser = async () => {
      const nameUser = await displayNameFromDatabase(currentUser);

      setName(nameUser);
    };
    displayNameUser();
  }, [currentUser]);

  return (
    <div className="statistic-box">
      <div className="statistic-profil-container">
        <div className="avatar-box">
          <img src={avatar} alt="pies" className="avatar" />
        </div>
        <div className="statistic-user-box">
          <p className="statistic-user-name">
            {" "}
            {currentUser.displayName
              ? currentUser.displayName?.substring(
                  0,
                  currentUser.displayName?.indexOf(" ")
                )
              : name}
          </p>
          <Button buttonType="secondary">Zmień hasło</Button>
        </div>
      </div>

      <div className="statistic-categroy-container">
        <h1 className="statistic-category-description">Podsumowanie</h1>

        {Object.keys(summaryQuiz).map((category, i) => {
          return (
            <StatisticCategory category={category} summaryQuiz={summaryQuiz} />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
