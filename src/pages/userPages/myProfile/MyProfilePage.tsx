import { Avatar, Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState } from "react";
import EditedMode from "./EditMode";
import SavedMode from "./SavedMode";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
};

const MyProfilePage = () => {
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<null | string>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userinfo, setUserInfo] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo((prev) => ({
      ...prev,
      [event?.target.name]: event?.target.value,
    }));
  }
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
      {isEditMode ? (
        <EditedMode
          userInfo={userinfo}
          handleChange={handleChange}
          setIsEditMode={setIsEditMode}
        />
      ) : (
        <SavedMode setIsEditMode={setIsEditMode} userInfo={userinfo} />
      )}
    </>
  );
};
export default MyProfilePage;
