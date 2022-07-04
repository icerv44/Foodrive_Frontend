import { Box } from "@mui/joy";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

function CardProfile({ title }) {
  return (
    <Box
      sx={{
        minWidth: "350px",
        maxWidth: "375px",
        height: "70px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "20px",
        px: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Box>{title}</Box>
      </Box>
      <Box>
        <Box className="text-[#DA6317] text-xl">
          <BsChevronRight />
        </Box>
      </Box>
    </Box>
  );
}

export default CardProfile;
