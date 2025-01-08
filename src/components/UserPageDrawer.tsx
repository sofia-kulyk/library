import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { LibraryBooks, AccountBox, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../utils/types";

const drawerWidth = 250;
const drawerList = [
  { name: "My profile", icon: AccountBox },
  { name: "Library", icon: LibraryBooks },
  { name: "Favorites", icon: Favorite },
];

const UserPageDrawer = () => {
  const navigate = useNavigate();

  function handleClick(name: string) {
    if (name === "My profile") navigate(Paths.MyProfilePage);
    if (name === "Library") navigate(Paths.LibraryPage);
  }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "87px",
        },
      }}
    >
      <Box role="presentation" marginLeft={"10px"}>
        <List>
          {drawerList.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleClick(item.name)}>
                <ListItemIcon sx={{ color: "#085ac4" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default UserPageDrawer;
