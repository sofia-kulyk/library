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
});
