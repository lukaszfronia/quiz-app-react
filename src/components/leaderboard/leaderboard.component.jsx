import "./leaderboard.styles.css";

import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import LeaderBoardUser from "../leaderboard-user/leaderboard-user.component";

const Leaderboard = () => {
  const { generalStatistics } = useContext(AuthContext);
  // const [statistics, setStatistics] = useState(null);

  // useEffect(() => {
  //   setStatistics(generalStatistics);
  // }, [generalStatistics]);
  // console.log(statistics);
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
