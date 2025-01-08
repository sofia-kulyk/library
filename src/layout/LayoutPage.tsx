import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import UserPageDrawer from "../components/UserPageDrawer";
import { Box } from "@mui/material";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      {location.pathname.includes("/user-page") && <UserPageDrawer />}
      <Box paddingTop="80px">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
