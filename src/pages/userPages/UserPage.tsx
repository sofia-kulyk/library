import { Box, Typography } from "@mui/material";

export const UserPage = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box
        component="img"
        maxWidth={"1000px"}
        width={"150%"}
        marginBottom={"200px"}
        marginLeft={"200px"}
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
          your favorite reads and revisit them anytime. Share your thoughts with
          the community! Rate books and write reviews to help others discover
          amazing reads.
        </Typography>
      </Box>
    </Box>
  );
};
