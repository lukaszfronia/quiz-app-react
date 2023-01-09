import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Home from "./pages/home/home";

function App() {
  //nagłowek z logo i navigacją
  // 1# w nawigacji bedzie login włąsny quiz?? statystyki
  // 2# miejsce na quiz

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
