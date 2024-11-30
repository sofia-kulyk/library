import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./utils/types";

function App() {
  return (
    <Routes>
      <Route path={Paths.HomePage} element={<HomePage />} />
    </Routes>
  );
}

export default App;
