import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Home from "./pages/home/home";
import Statistic from "./pages/statistic/statistic";
import Footer from "./components/footer/footer.component";
import SignIn from "./pages/sign-in/sign-in";
import Quiz from "./pages/quiz/quiz";
import { Fragment } from "react";
import SignUp from "./pages/sign-up/sign-up";

function App() {
  //nagłowek z logo i navigacją
  // 1# w nawigacji bedzie login włąsny quiz?? statystyki
  // 2# miejsce na quiz

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="statystyki/*" element={<Statistic />} />
          <Route path="zaloguj-sie/" element={<SignIn />} />
          <Route path="zarejestruj-sie/" element={<SignUp />} />
          <Route path="quiz/" element={<Quiz />} />
        </Route>
      </Routes>
      {/*<Footer />*/}
    </Fragment>
  );
}

export default App;
