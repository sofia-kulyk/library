import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

type Book = {
  title: string;
  genre: string;
  author: string;
  comment: string;
  photo: string | null;
};
type Props = {
  handleClose: () => void;
  open: boolean;
  books: Book[];
};
const LibraryModal: React.FC<Props> = ({ handleClose, open, books }) => {
  const [genre, setGenre] = useState<string>("");
  const [bookPhotoUrl, setBookPhotoUrl] = useState<null | string>(null);
  const [newBook, setNewBook] = useState<Book>({
    title: "",
    genre: "",
    author: "",
    comment: "",
    photo: null,
  });

  const handleChangeGenre = (event: SelectChangeEvent) => {
    const genreValue = event.target.value as string;

    setGenre(genreValue);
    setNewBook((prev) => ({
      ...(prev || {
        title: "",
        genre: "",
        author: "",
        comment: "",
        photo: null,
      }),
      genre: genreValue,
    }));
  };
  const handleChangeBookPhoto = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPhoto = event?.target.files?.[0];
    if (newPhoto) {
      const photoUrl = URL.createObjectURL(newPhoto);

      setBookPhotoUrl(photoUrl);
      setNewBook((prev) => ({
        ...(prev || {
          title: "",
          genre: "",
          author: "",
          comment: "",
          photo: null,
        }),
        photo: photoUrl,
      }));
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewBook((prev) => ({
      ...(prev || {
        title: "",
        genre: "",
        author: "",
        comment: "",
        photo: null,
      }),
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      Object.values(newBook).every((value) => value !== "" && value !== null)
    ) {
      books.push(newBook);
      handleClose();
    }
    setNewBook({ title: "", genre: "", author: "", comment: "", photo: null });
    setGenre("");
    setBookPhotoUrl(null);
  };
  console.log(newBook);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          width={"400px"}
          bgcolor={"white"}
          boxShadow={"24"}
          p={4}
          borderRadius={"5px"}
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            color="#085ac4"
            fontWeight={"bold"}
            fontFamily={"Gill Sans"}
            marginBottom={"20px"}
          >
            Add a new book
          </Typography>
          <Box display={"flex"} flexDirection={"column"}>
            <TextField
              label="Title"
              name="title"
              value={newBook?.title}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <FormControl>
              <InputLabel>Genre</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                label="Genre"
                name="genre"
                onChange={handleChangeGenre}
                sx={{ marginBottom: "10px" }}
              >
                <MenuItem value={10}>Comedy</MenuItem>
                <MenuItem value={20}>Drama</MenuItem>
                <MenuItem value={30}>Romantic</MenuItem>
                <MenuItem value={40}>Detective</MenuItem>
                <MenuItem value={50}>Horror</MenuItem>
                <MenuItem value={60}>Historical</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Author"
              name="author"
              value={newBook?.author}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Comment"
              name="comment"
              value={newBook?.comment}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
            />
            <Box>
              <Typography marginLeft={"10px"}>Add photo</Typography>
              <IconButton
                component="label"
                sx={{ width: "100px", borderRadius: "0px" }}
              >
                <input
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={handleChangeBookPhoto}
                />
                <Avatar
                  src={bookPhotoUrl || undefined}
                  sx={{
                    width: "70px",
                    height: "100px",
                    backgroundColor: "white",
                  }}
                  variant="square"
                >
                  {!bookPhotoUrl && (
                    <AddPhotoAlternateIcon
                      sx={{
                        fontSize: "70px",
                        color: "#085ac4",
                      }}
                    />
                  )}
                </Avatar>
              </IconButton>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"end"}>
            <Button variant="contained" size="large" onClick={handleAdd}>
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default LibraryModal;
