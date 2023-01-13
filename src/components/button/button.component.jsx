import "./button.styles.css";

const BUTTON_TYPES = {
  google: "google-sign-in",
  secondary: "btn-secondary",
  //  dopisać w przyszłości wiecej klas przycisków do quizu
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`btn ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
