import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState } from "react";
const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "grey",
  },
});
const MyProfilePage = () => {
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<null | string>(null);
  function handleProfilePhotoChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newFile = event?.target.files?.[0];
    if (newFile) {
      setProfilePhotoUrl(URL.createObjectURL(newFile));
    }
  }
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        marginLeft={"200px"}
      >
        <IconButton component="label">
          <input
            accept="image/*"
            type="file"
            hidden
            onChange={handleProfilePhotoChange}
          />
          <Avatar
            src={profilePhotoUrl || undefined}
            sx={{
              width: "160px",
              height: "160px",
              backgroundColor: "white",
            }}
          >
            {!profilePhotoUrl && (
              <AccountCircleIcon
                sx={{
                  fontSize: "200px",
                  color: "#085ac4",
                }}
                color="action"
              />
            )}
          </Avatar>
        </IconButton>
        <Typography
          variant="h4"
          color="#085ac4"
          fontWeight={"bold"}
          fontFamily={"Gill Sans"}
          marginTop={"30px"}
          marginBottom={"20px"}
        >
          My Profile
        </Typography>
      </Box>
      <Card sx={{ minWidth: "450px", padding: "20px", marginLeft: "200px" }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <InputLabel>First name</InputLabel>
              <TextField
                margin="dense"
                // label={text.myProfile.firstName}
                size="small"
                name="fistName"
                // value={newUserData.fistName}
                // onChange={handleChange}
              />
            </Box>
            <Box>
              <InputLabel>Last name</InputLabel>
              <TextField
                margin="dense"
                // label={text.myProfile.lastName}
                size="small"
                // value={newUserData.lastName}
                name="lastName"
                // onChange={handleChange}
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <InputLabel>Email</InputLabel>
            <TextField
              margin="dense"
              //   label={text.myProfile.email}
              size="small"
              name="email"
              type="email"
              //   value={newUserData.email}
              fullWidth
              //   onChange={handleChange}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <InputLabel>Date of birth</InputLabel>
            <CustomTextField
              variant="standard"
              type="date"
              size="small"
              margin="dense"
              // value={newUserData.birthday}
              name="birthday"
              // onChange={handleChange}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default MyProfilePage;
