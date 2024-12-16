import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./utils/types";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import Layout from "./layout/LayoutPage";
import { UserPage } from "./pages/userPages/UserPage";
import MyProfilePage from "./pages/userPages/myProfile/MyProfilePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={Paths.HomePage} element={<HomePage />} />
        <Route path={Paths.SignInPage} element={<SignInPage />} />
        <Route path={Paths.SignUpPage} element={<SignUpPage />} />
        <Route path={Paths.UserPage} element={<UserPage />} />
        <Route path={Paths.MyProfilePage} element={<MyProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
