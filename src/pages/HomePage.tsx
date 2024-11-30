import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const StyledButton = styled(Button)({
  "&:focus": {
    outline: "none",
  },
  backgroundColor: "#085ac4",
  padding: "7px 30px",
  fontWeight: "bold",
  color: "white",
});

export const HomePage = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: "80px",
            margin: "0 60px",
          }}
        >
          <Button sx={{ color: "white" }}>
            <AccountCircle sx={{ width: "2em", height: "2em" }} />
          </Button>
          <Typography
            sx={{
              marginRight: "1100px",
              fontFamily: "Gill Sans",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Your Library
          </Typography>
          <StyledButton>Sign in</StyledButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "150%",
            maxWidth: "1000px",
            marginBottom: "200px",
          }}
          src="https://img.freepik.com/premium-vector/education-book-library-vector-illustration-study-literature-concept-woman-man-person-character_109722-4152.jpg"
          alt="Library Illustration"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0px",
            marginTop: "200px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#085ac4",
              fontWeight: "bold",
              fontFamily: "Gill Sans",
              marginBottom: "30px",
            }}
          >
            BOOK LIBRARY
          </Typography>
          <Typography variant="body1" sx={{ color: "#085ac4" }}>
            Keep track of the books you love! Create a personalized library of
            your favorite reads and revisit them anytime. Share your thoughts
            with the community! Rate books and write reviews to help others
            discover amazing reads.
          </Typography>
        </Box>
      </Box>
      <StyledButton size="large">Get Started</StyledButton>
    </>
  );
};
