import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[100],
    },
    secondary: {
      main: blue[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
