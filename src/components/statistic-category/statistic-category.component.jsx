import "./statistic-category.styles.css";
import { useState, useEffect } from "react";
const StatisticCategory = ({
  category,
  summaryQuiz,
  gradeKlasa13,
  gradeKlasa48,
  gradeTL,
}) => {
  const [currentSummary, setCurrentSummary] = useState("");
  const [newGradeKlasa13, setNewGradeKlasa13] = useState(0);
  const [newGradeKlasa48, setnewGradeKlasa48] = useState(0);
  const [newGradeTL, setnewGradeTL] = useState(0);

  useEffect(() => {
    const sumGrades = gradeKlasa13?.reduce((acc, grade) => acc + grade, 0);
    setNewGradeKlasa13(sumGrades);
  }, [gradeKlasa13]);
  useEffect(() => {
    const sumGrades = gradeKlasa48?.reduce((acc, grade) => acc + grade, 0);
    setnewGradeKlasa48(sumGrades);
  }, [gradeKlasa48]);

  useEffect(() => {
    const sumGrades = gradeTL?.reduce((acc, grade) => acc + grade, 0);
    setnewGradeTL(sumGrades);
  }, [gradeTL]);

  useEffect(() => {
    setCurrentSummary(summaryQuiz[category]);
  }, [summaryQuiz]);
  const { madeQuizzes, numberOfApproaches, grade, passedQuizzes, bestTime } =
    currentSummary;
  const min = `${Math.trunc(bestTime / 60)}`.padStart(2, "0");
  const sec = String(bestTime % 60).padStart(2, "0");

  return (
    <div className="statistic-category-box">
      <h1 className="statistic-category-name">{category}</h1>

      <ul className="statistic-list-items">
        <li className="statistic-list-item">
          <p>Zdane Quizy: {passedQuizzes}</p>
        </li>
        <li className="statistic-list-item">
          <p>
            Najlepszy czas: {min}:{sec}
          </p>
        </li>
        <li className="statistic-list-item">
          <p>Wykonane Quizy: {madeQuizzes}</p>
        </li>
        <li className="statistic-list-item">
          <p>
            Ocena końcowa:{" "}
            {Math.floor(
              ((category === "Klasa 1 - 3" && newGradeKlasa13 > 0
                ? newGradeKlasa13 / madeQuizzes
                : 0) ||
                (category === "Klasa 4 - 8" && newGradeKlasa48 > 0
                  ? newGradeKlasa48 / madeQuizzes
                  : 0) ||
                (category === "Tech - Liceum" && newGradeTL > 0
                  ? newGradeTL / madeQuizzes
                  : 0)) * 2
            ) / 2}
          </p>
        </li>
        <li className="statistic-list-item">
          <p>Liczba podejść: {numberOfApproaches}</p>
        </li>
      </ul>
    </div>
  );
};

export default StatisticCategory;
