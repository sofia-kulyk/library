import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../utils/types";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { app } from "../../firebaseConfig.ts";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

type Props = {
  isLogin: boolean;
};
export const AuthForm: React.FC<Props> = ({ isLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function handleCLick() {
    signInWithEmailAndPassword(auth, userData.email, userData.password).then(
      (userCredential) => {
        const user = userCredential.user;
        navigate(Paths.UserPage);
        console.log(user);
      }
    );
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event?.target.value,
    }));
  }
  return (
    <Card
      sx={{
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "200px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          color="#085ac4"
          fontWeight={"bold"}
          gutterBottom
        >
          {isLogin ? "Login" : "Sign up"}
        </Typography>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            label={isLogin ? "Login" : "Sign up"}
            margin={"normal"}
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          <Button
            variant="contained"
            sx={{ marginBottom: "10px" }}
            onClick={handleCLick}
            fullWidth
          >
            {isLogin ? "Sign in" : "Sign up"}
          </Button>
          {isLogin ? (
            <Typography textAlign={"center"}>
              Don't have an account?{" "}
              <Link to={Paths.SignUpPage} style={{ color: "blue" }}>
                Sign up
              </Link>
            </Typography>
          ) : (
            <Typography textAlign={"center"}>
              Already have an account?{" "}
              <Link to={Paths.SignInPage} style={{ color: "blue" }}>
                Sign in
              </Link>
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};
