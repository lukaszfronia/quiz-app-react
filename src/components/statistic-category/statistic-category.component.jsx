import "./statistic-category.styles.css";
import { useState, useEffect } from "react";
const StatisticCategory = ({ category, summaryQuiz }) => {
  const [currentSummary, setCurrentSummary] = useState("");

  useEffect(() => {
    setCurrentSummary(summaryQuiz[category]);
  }, [summaryQuiz]);
  const { generalTime, numberOfApproaches, grade, passedQuizzes, bestTime } =
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
          <p>Ocena końcowa: {grade}</p>
        </li>
        <li className="statistic-list-item">
          <p>Liczba podejść: {numberOfApproaches}</p>
        </li>
      </ul>
    </div>
  );
};

export default StatisticCategory;
