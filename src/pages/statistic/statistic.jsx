import "./statistic.styles.css";

import Leaderboard from "../../components/leaderboard/leaderboard.component";
import Profile from "../../components/profile/profile.component";

const Statistic = () => {
  return (
    <div className="statistic-container">
      <Profile />
      <Leaderboard />
    </div>
  );
};

export default Statistic;
