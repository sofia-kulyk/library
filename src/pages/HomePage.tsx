import { Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../utils/types";

const StyledButton = styled(Button)({
  backgroundColor: "#085ac4",
  padding: "7px 30px",
  fontWeight: "bold",
  color: "white",
});

export const HomePage = () => {
  const navigate = useNavigate();
  function handleSignInClick() {
    setTimeout(() => {
      navigate(Paths.SignInPage);
    }, 200);
  }
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          component="img"
          maxWidth={"1000px"}
          width={"150%"}
          marginBottom={"200px"}
          src="https://img.freepik.com/premium-vector/education-book-library-vector-illustration-study-literature-concept-woman-man-person-character_109722-4152.jpg"
          alt="Library Illustration"
        />
        <Box display={"flex"} flexDirection={"column"} marginTop={"200px"}>
          <Typography
            variant="h1"
            color="#085ac4"
            fontWeight={"bold"}
            fontFamily={"Gill Sans"}
            marginBottom={"30px"}
          >
            BOOK LIBRARY
          </Typography>
          <Typography variant="body1" color="#085ac4">
            Keep track of the books you love! Create a personalized library of
            your favorite reads and revisit them anytime. Share your thoughts
            with the community! Rate books and write reviews to help others
            discover amazing reads.
          </Typography>
        </Box>
      </Box>
      <StyledButton size="large" onClick={handleSignInClick}>
        Get Started
      </StyledButton>
    </>
  );
};
