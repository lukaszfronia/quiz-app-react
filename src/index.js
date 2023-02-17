import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { AuthContextProvider } from "./context/auth.context";
import { QuizProvider } from "./context/quiz.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
