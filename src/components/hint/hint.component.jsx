import { useEffect } from "react";

import "./hint.styles.css";

import Button from "../button/button.component";

const Hint = ({ setShowHint, setCloseHint, closeHintHandler }) => {
  return (
    <div>
      <h1>Tutaj jest podpowiedź</h1>
      <Button onClick={closeHintHandler}>Powrót</Button>
    </div>
  );
};

export default Hint;
