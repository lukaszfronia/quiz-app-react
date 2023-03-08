import "./leaderboard-user.styles.css";
import timer from "./timer.png";
import succes from "./success.png";

const LeaderBoardUser = ({ statistic, i }) => {
  const { passedAllQuizzes, bestTime, displayName } = statistic;
  const min = `${Math.trunc(bestTime / 60)}`.padStart(2, "0");
  const sec = String(bestTime % 60).padStart(2, "0");

  return (
    <div className="leaderboard-user-box">
      <div className="number-box">{i + 1}</div>
      <h1 className="leaderboard-user-name">
        {displayName?.includes(" ")
          ? displayName?.substring(0, displayName?.indexOf(" "))
          : displayName}
      </h1>
      <div className="leaderboard-user-stats-box">
        <div className="box-icon">
          <img src={succes} alt="zdane" className="icon" />
        </div>
        <p>{passedAllQuizzes}</p>
        <p className="user-stats-description">Zdane Quizy</p>
      </div>
      <div className="leaderboard-user-stats-box">
        <div className="box-icon">
          <img src={timer} alt="zegar" className="icon" />
        </div>
        <p>
          {min}:{sec}
        </p>
        <p className="user-stats-description">Najlepszy czas</p>
      </div>
    </div>
  );
};
export default LeaderBoardUser;
