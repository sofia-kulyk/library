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
  book: { title: string; photo: string };
};

const LibraryItem: React.FC<Props> = ({ book }) => {
  return (
    <Card sx={{ width: "200px", marginTop: "30px", marginLeft: "20px" }}>
      <CardContent>
        <Box>
          <Typography textAlign={"center"} gutterBottom>
            {book.title}
          </Typography>
          <img
            src={book.photo}
            width={"150px"}
            style={{
              marginLeft: "10px",
              maxWidth: "150px",
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button sx={{ padding: "0 20px", marginLeft: "17px" }}>
          View details...
        </Button>
      </CardActions>
    </Card>
  );
};
export default LibraryItem;
