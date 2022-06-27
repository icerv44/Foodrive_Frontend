import { Box, Typography } from "@mui/material";
import FoodOption from "./FoodOption";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import IconButton from "@mui/joy/IconButton";

function FoodDetail() {
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
    <Box>
      <Box className="mx-6 mt-5 overflow-auto h-[26vh]">
        <Box className="flex justify-between items-center my-5">
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            Jujai
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            459฿
          </Typography>
        </Box>
        <FoodOption />
        <FoodOption />
        <FoodOption />
      </Box>

      <Box>
        <Box className="my-4">
          <Box className="flex justify-center items-center gap-3">
            <IconButton
              sx={{ bgcolor: "#f9a94d22", color: "green" }}
              onClick={handleClickDecreaseAmount}
            >
              <AiOutlineMinus />
            </IconButton>
            <Box className="font-semibold">{count}</Box>
            <IconButton
              sx={{
                background:
                  "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
                color: "white",
              }}
              onClick={handleClickIncreaseAmount}
            >
              <AiOutlinePlus className="font-semibold text-lg" />
            </IconButton>
          </Box>
        </Box>
        <Box className="text-center my-4">
          <ButtonGreenGradiant title="Add to Cart" px="115px" />
        </Box>
      </Box>
    </Box>
  );
}

export default FoodDetail;
