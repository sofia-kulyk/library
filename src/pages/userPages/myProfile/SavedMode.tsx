import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
  };
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsEditMode: (arg: boolean) => void;
};

const SavedMode: React.FC<Props> = ({ setIsEditMode, userInfo }) => {
  return (
    <Card sx={{ width: "500px", padding: "20px", margin: "0 auto" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-around" textAlign={"center"}>
          <Box>
            <Typography variant="h6">First name</Typography>
            <Typography color="grey">
              {userInfo.firstName || "First name"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Last name</Typography>
            <Typography color="grey">
              {" "}
              {userInfo.lastName || "Last name"}
            </Typography>
          </Box>
        </Box>
        <Box marginTop={"15px"} textAlign={"center"}>
          <Typography variant="h6">Email</Typography>
          <Typography color="grey"> {userInfo.email || "Email"}</Typography>
        </Box>
        <Box marginTop={"20px"} textAlign={"center"}>
          <Typography variant="h6">Date of birth</Typography>
          <Typography color="grey">
            {userInfo.birthday || "Date of birth"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={() => setIsEditMode(true)}
          variant="contained"
          sx={{ padding: "5px 20px", marginRight: "12px" }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
export default SavedMode;
