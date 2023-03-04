import "./leaderboard.styles.css";

import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import LeaderBoardUser from "../leaderboard-user/leaderboard-user.component";

const Leaderboard = () => {
  const { generalStatistics } = useContext(AuthContext);

  console.log(generalStatistics[0]);
  return (
    <div className="leaderboard-box">
      <h1 className="leaderboard-title">Ranking</h1>
      {generalStatistics.map((statistics, i) => {
        return statistics.map((statistic) => {
          return <LeaderBoardUser statistic={statistic} i={i} />;
        });
      })}
    </div>
  );
};

export default Leaderboard;
