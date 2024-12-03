import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const LayoutPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
