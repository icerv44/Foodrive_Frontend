import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

function AddOrEditMenu({ title, subTitle, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

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
          onClick={onClick}
          sx={{
            bgcolor: "#f9a94d22",
            color: "green",
          }}
        >
          <AiOutlinePlus className="font-semibold text-xl" />
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

export default AddOrEditMenu;
