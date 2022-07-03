import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import Modal from "react-modal";
import ModalForCreate from "../modal/ModalForCreate";

function AddCategory({ title, subTitle }) {
  Modal.setAppElement("#root");

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        borderRadius: "18px",
        p: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton
          sx={{
            bgcolor: "#f9a94d22",
            color: "green",
          }}
        >
          <ModalForCreate />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          {title}
        </Typography>
        <Typography sx={{ color: "grey" }}>{subTitle}</Typography>
      </Box>
    </Box>
  );
}

export default AddCategory;
