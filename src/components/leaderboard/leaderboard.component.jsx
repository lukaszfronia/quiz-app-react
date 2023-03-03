import "./leaderboard.styles.css";
import timer from "./timer.png";
import succes from "./success.png";

const Leaderboard = () => {
  return (
    <div className="leaderboard-box">
      <h1 className="leaderboard-title">Ranking</h1>
      <div className="leaderboard-user-box">
        <div className="number-box">1</div>
        <h1 className="leaderboard-user-name">Emilka</h1>
        <div className="leaderboard-user-stats-box">
          <div className="box-icon">
            <img src={succes} alt="zdane" className="icon" />
          </div>
          <p>20</p>
          <p className="user-stats-description">Zdane Quizy</p>
        </div>
        <div className="leaderboard-user-stats-box">
          <div className="box-icon">
            <img src={timer} alt="zegar" className="icon" />
          </div>
          <p>1:20</p>
          <p className="user-stats-description">Najlepszy czas</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
