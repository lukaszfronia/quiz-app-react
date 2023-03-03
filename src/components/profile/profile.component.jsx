import { useContext, useState, useEffect } from "react";

import "./profile.styles.css";
import avatar from "./dog-gffec67af5_1280.png";

import Button from "../../components/button/button.component";
import { AuthContext } from "../../context/auth.context";
import { displayNameFromDatabase } from "../../utils/firebase/firebase.utils";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

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
        <div className="statistic-category-box">
          <h1 className="statistic-category-name">Klasa 1 - 3</h1>

          <ul className="statistic-list-items">
            <li className="statistic-list-item">
              <p>Zdane Quizy: 20</p>
            </li>
            <li className="statistic-list-item">
              <p>Najlepszy czas: 1:20</p>
            </li>
            <li className="statistic-list-item">
              <p>Ocena końcowa: 4</p>
            </li>
            <li className="statistic-list-item">
              <p>Liczba podejść: 1234</p>
            </li>
            <li className="statistic-list-item">
              <p>Ogólny czas: 123:30:23</p>
            </li>
          </ul>
        </div>
        <div className="statistic-category-box">
          <h1 className="statistic-category-name">Klasa 4 - 8</h1>

          <ul className="statistic-list-items">
            <li className="statistic-list-item">
              <p>Zdane Quizy: 20</p>
            </li>
            <li className="statistic-list-item">
              <p>Najlepszy czas: 1:20</p>
            </li>
            <li className="statistic-list-item">
              <p>Ocena końcowa: 4</p>
            </li>
            <li className="statistic-list-item">
              <p>Liczba podejść: 1234</p>
            </li>
            <li className="statistic-list-item">
              <p>Ogólny czas: 123:30:23</p>
            </li>
          </ul>
        </div>
        <div className="statistic-category-box">
          <h1 className="statistic-category-name">Tech - Liceum</h1>

          <ul className="statistic-list-items">
            <li className="statistic-list-item">
              <p>Zdane Quizy: 20</p>
            </li>
            <li className="statistic-list-item">
              <p>Najlepszy czas: 1:20</p>
            </li>
            <li className="statistic-list-item">
              <p>Ocena końcowa: 4</p>
            </li>
            <li className="statistic-list-item">
              <p>Liczba podejść: 1234</p>
            </li>
            <li className="statistic-list-item">
              <p>Ogólny czas: 123:30:23</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
