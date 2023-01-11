import "./button.styles.css";

const BUTTON_TYPES = {
  google: "google-sign-in",
  //  dopisać w przyszłości wiecej klas przycisków do quizu
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`btn ${BUTTON_TYPES[buttonType]}`}>{children}</button>
  );
};

export default Button;
