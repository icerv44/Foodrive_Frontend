import { Box, Typography } from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function CardOrder({ src, price, foodName, foodDetail }) {
  const [count, setCount] = useState(1);

  const handleClickIncreaseAmount = () => {
    if (count <= 8) {
      setCount(count + 1);
    }
  };
  const handleClickDecreaseAmount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "28px",
        width: "348px",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
      }}
    >
      <img src={src} className="w-[66px]" alt="" />
      <Box sx={{ flexGrow: "1" }} className="flex flex-col px-4">
        <Typography sx={{ fontWeight: 700 }}>{foodName}</Typography>
        <Typography sx={{ color: "#3B3B3B" }}>{foodDetail}</Typography>
        <Typography
          sx={{ fontWeight: 800, color: "#15BE77", fontSize: "20px" }}
        >
          {price * count} ฿
        </Typography>
      </Box>
      <Box className="flex justify-center items-center gap-3">
        <IconButton onClick={handleClickDecreaseAmount}>
          <AiOutlineMinus />
        </IconButton>
        <Box className="font-semibold">{count}</Box>
        <IconButton onClick={handleClickIncreaseAmount}>
          <AiOutlinePlus />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CardOrder;
