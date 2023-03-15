import { useEffect } from "react";

import "./hint.styles.css";

import Button from "../button/button.component";

const Hint = ({ setShowHint, setCloseHint, question }) => {
  const closeHintHandler = () => {
    setShowHint(false);
    setCloseHint(true);
  };
  return (
    <div className="hint-box">
      <h1 className="hint-title">Podpowiedź</h1>
      <p className="hint-description">{question.hint}</p>
      <Button onClick={closeHintHandler}>Powrót</Button>
    </div>
  );
};

export default Hint;
