import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./utils/types";
import { LayoutPage } from "./layout/LayoutPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path={Paths.HomePage} element={<HomePage />} />
        <Route path={Paths.SignInPage} element={<SignInPage />} />
        <Route path={Paths.SignUpPage} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
