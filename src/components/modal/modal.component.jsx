import "./modal.styles.css";

const Modal = ({ children, overlay }) => {
  return <div className={`${overlay && "overlay"}`}>{children};</div>;
};

export default Modal;
