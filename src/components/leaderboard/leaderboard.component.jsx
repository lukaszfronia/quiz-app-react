import "./leaderboard.styles.css";

import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import LeaderBoardUser from "../leaderboard-user/leaderboard-user.component";

const Leaderboard = () => {
  const { generalStatistics } = useContext(AuthContext);
  // const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    generalStatistics.sort(
      (a, b) => b[0].passedAllQuizzes - a[0].passedAllQuizzes
    );
  }, [generalStatistics]);

  // useEffect(() => {
  //   setStatistics(generalStatistics);
  // }, [generalStatistics]);
  // console.log(statistics);
  console.log(generalStatistics[0]);
  return (
    <div className="leaderboard-box">
      <h1 className="leaderboard-title">Ranking</h1>
      {generalStatistics.map((statistics) => {
        return statistics.map((statistic) => {
          return <LeaderBoardUser statistic={statistic} />;
        });
      })}
    </div>
  );
};

export default Leaderboard;
