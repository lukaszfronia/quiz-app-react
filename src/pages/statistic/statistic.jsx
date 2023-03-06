import "./statistic.styles.css";
import { ToastContainer } from "react-toastify";

import Leaderboard from "../../components/leaderboard/leaderboard.component";
import Profile from "../../components/profile/profile.component";

const Statistic = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <div className="statistic-container">
        <Profile />
        <Leaderboard />
      </div>
    </>
  );
};

export default Statistic;
