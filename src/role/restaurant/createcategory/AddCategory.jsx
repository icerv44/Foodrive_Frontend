import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import Modal from "react-modal";
import ModalForCreate from "../modal/ModalForCreate";

function AddCategory({ title, subTitle, category, setCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const handleClickOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
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
      <Box onClick={handleClickOpenMenu} className="text-[#DA6317] text-xl">
        {isOpen === true ? <BsChevronDown /> : <BsChevronRight />}
      </Box>
    </Box>
  );
}

export default AddCategory;
