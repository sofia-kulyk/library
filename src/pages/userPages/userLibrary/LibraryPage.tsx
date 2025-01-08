import { Box, Button, Divider, Typography } from "@mui/material";
import LibraryItem from "./LibraryItem";
import AddIcon from "@mui/icons-material/Add";
import LibraryModal from "./LibraryModal";
import { useState } from "react";

const BOOKS = [
  {
    title: " Flowers for Algernon",
    genre: "Drama",
    author: "Daniel Keyes",
    photo:
      "https://sffbookreview.files.wordpress.com/2012/06/flowers-for-algernon-red.jpg",
    comment: "fhfhfhihfiihihfu",
  },
  {
    title: " Harry Potter and the philosopher's stone",
    genre: "Fantasy",
    author: "J.K. Rowling",
    photo:
      "https://balka-book.com/files/2024/04_11/09_05/u_files_store_5_14.jpg",
    comment: "fhfhfhihfiihihfu",
  },
];
const LibraryPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box marginLeft={"300px"} width={"77%"} marginTop={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginBottom={"10px"}
      >
        <Typography
          variant="h4"
          color="#085ac4"
          fontWeight={"bold"}
          fontFamily={"Gill Sans"}
          textAlign={"start"}
        >
          My library
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ color: "white", backgroundColor: "#085ac4" }}
          onClick={handleOpen}
        >
          Add book
          <AddIcon sx={{ marginLeft: "5px" }} />
        </Button>
      </Box>

      <Divider />
      <Box display={"flex"}>
        {BOOKS.map((book) => (
          <LibraryItem book={book} />
        ))}
      </Box>

      <LibraryModal handleClose={handleClose} open={open} books={BOOKS} />
    </Box>
  );
};

export default LibraryPage;
