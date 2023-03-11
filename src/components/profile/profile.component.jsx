import { useContext, useState, useEffect } from "react";

import "./profile.styles.css";
import avatar from "./dog-gffec67af5_1280.png";

import Button from "../../components/button/button.component";
import Modal from "../modal/modal.component";
import ResetForm from "../reset-form/reset-form.component";
import StatisticCategory from "../../components/statistic-category/statistic-category.component";
import { AuthContext } from "../../context/auth.context";
import {
  displayNameFromDatabase,
  setNewPassword,
} from "../../utils/firebase/firebase.utils";

const Profile = () => {
  const {
    currentUser,
    summaryQuiz,
    setCurrentUser,
    dataKlasa13,
    dataKlasa48,
    dataTL,
  } = useContext(AuthContext);

  const [name, setName] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [modal, setModal] = useState(false);
  const [gradeKlasa13, setGradeKlasa13] = useState([]);
  const [gradeKlasa48, setGradeKlasa48] = useState([]);
  const [gradeTL, setGradeTL] = useState([]);

  useEffect(() => {
    const grade = dataKlasa13.map((statistic) => statistic.grade);
    setGradeKlasa13(grade);
  }, [dataKlasa13]);
  useEffect(() => {
    const grade = dataKlasa48.map((statistic) => statistic.grade);
    setGradeKlasa48(grade);
  }, [dataKlasa48]);
  useEffect(() => {
    const grade = dataTL.map((statistic) => statistic.grade);
    setGradeTL(grade);
  }, [dataTL]);

  useEffect(() => {
    const displayNameUser = async () => {
      const nameUser = await displayNameFromDatabase(currentUser);

      setName(nameUser);
    };
    displayNameUser();
  }, [currentUser]);

  const changeCurrentUserPasswordHandler = () => {
    setModal(true);
    setOverlay(true);
  };

  return (
    <div className="statistic-box ">
      {modal && (
        <Modal
          children={
            <ResetForm
              currentUser={currentUser}
              setOverlay={setOverlay}
              setModal={setModal}
              setCurrentUser={setCurrentUser}
            />
          }
          overlay={overlay}
        />
      )}
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
          <Button
            buttonType="secondary"
            onClick={changeCurrentUserPasswordHandler}
          >
            Zmień hasło
          </Button>
        </div>
      </div>

      <div className="statistic-categroy-container">
        <h1 className="statistic-category-description">Statystyki ogólne</h1>

        {Object.keys(summaryQuiz).map((category, i) => {
          return (
            <StatisticCategory
              key={Math.floor(Math.random() * 10000)}
              category={category}
              summaryQuiz={summaryQuiz}
              gradeKlasa13={gradeKlasa13}
              gradeKlasa48={gradeKlasa48}
              gradeTL={gradeTL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
