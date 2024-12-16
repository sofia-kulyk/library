import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  styled,
  TextField,
} from "@mui/material";
import React from "react";

type Props = {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsEditMode: (arg: boolean) => void;
};

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "grey",
  },
});
const StyledInputLabel = styled(InputLabel)({
  textAlign: "left",
  marginLeft: "10px",
});

const EditedMode: React.FC<Props> = ({
  userInfo,
  handleChange,
  setIsEditMode,
}) => {
  console.log(userInfo);
  return (
    <Card sx={{ minWidth: "450px", padding: "20px", marginLeft: "200px" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <StyledInputLabel>First name</StyledInputLabel>
            <TextField
              margin="dense"
              label="First name"
              size="small"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <StyledInputLabel>Last name</StyledInputLabel>
            <TextField
              margin="dense"
              label="Last name"
              size="small"
              value={userInfo.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box marginTop={"15px"}>
          <StyledInputLabel>Email</StyledInputLabel>
          <TextField
            margin="dense"
            label="Email"
            size="small"
            name="email"
            type="email"
            value={userInfo.email}
            fullWidth
            onChange={handleChange}
          />
        </Box>
        <Box marginTop={"20px"}>
          <InputLabel>Date of birth</InputLabel>
          <CustomTextField
            variant="standard"
            type="date"
            size="small"
            margin="dense"
            value={userInfo.birthday}
            name="birthday"
            onChange={handleChange}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ padding: "5px 20px", marginLeft: "350px" }}
          onClick={() => setIsEditMode(false)}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
export default EditedMode;
