import backArrow from "./arrow-left.png";
import "./button.styles.css";

const BackButton = ({ ...otherProps }) => {
  return (
    <img
      className="back-arrow"
      src={backArrow}
      alt="strzałka w lewo"
      {...otherProps}
    />
  );
};

export default BackButton;
