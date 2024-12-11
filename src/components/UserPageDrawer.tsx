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

const drawerWidth = 250;
const drawerList = [
  { name: "My profile", icon: AccountBox },
  { name: "Library", icon: LibraryBooks },
  { name: "Favorites", icon: Favorite },
];

const UserPageDrawer = () => {
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
              <ListItemButton>
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
