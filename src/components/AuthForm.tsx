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
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Props = {
  isLogin: boolean;
};
export const AuthForm: React.FC<Props> = ({ isLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();
  function handleCLick() {
    navigate(Paths.HomePage);
  }
  return (
    <Card
      sx={{
        minWidth: "500px",
        minHeight: "300px",
        padding: "30px",
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
          <TextField label={isLogin ? "Login" : "Sign up"} margin={"normal"} />
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
            <Typography>
              Don't have an account? <Link to={Paths.SignUpPage}>Sign up</Link>
            </Typography>
          ) : (
            <Typography>
              Already have an account?{" "}
              <Link to={Paths.SignInPage}>Sign in</Link>
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};
