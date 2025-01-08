import { AccountCircle } from "@mui/icons-material";
import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { Paths } from "../utils/types";
import { useLocation, useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#085ac4",
  padding: "7px 30px",
  fontWeight: "bold",
  color: "white",
  // display: show ? "block" : "none",
}));
export const NavBar = () => {
  const navigate = useNavigate();
  function handleSignInClick() {
    setTimeout(() => {
      navigate(Paths.SignInPage);
    }, 200);
  }
  const location = useLocation();
  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: "80px",
          margin: "0 60px",
        }}
      >
        <Button sx={{ color: "white" }}>
          <AccountCircle sx={{ width: "2em", height: "2em" }} />
        </Button>
        <Typography
          marginRight={
            location.pathname === Paths.HomePage ? "1100px" : "1244px"
          }
          fontFamily={"Gill Sans"}
          fontWeight={"bold"}
          color="white"
        >
          Your Library
        </Typography>
        {location.pathname === Paths.HomePage && (
          <StyledButton onClick={handleSignInClick}>Sign in</StyledButton>
        )}
      </Toolbar>
    </AppBar>
  );
};
