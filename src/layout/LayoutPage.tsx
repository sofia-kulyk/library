import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import UserPageDrawer from "../components/UserPageDrawer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      {location.pathname === "/user-page" && <UserPageDrawer />}
      <Outlet />
    </>
  );
};

export default Layout;
