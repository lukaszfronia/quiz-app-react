import "./leaderboard.styles.css";

import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import LeaderBoardUser from "../leaderboard-user/leaderboard-user.component";

const Leaderboard = () => {
  const { generalStatistics } = useContext(AuthContext);

  return (
    <div className="leaderboard-box">
      <h1 className="leaderboard-title">Ranking</h1>
      {generalStatistics.map((statistic, i) => {
        return (
          <LeaderBoardUser
            key={Math.floor(Math.random() * 10000)}
            statistic={statistic}
            i={i}
          />
        );
      })}
    </div>
  );
};

export default Leaderboard;
