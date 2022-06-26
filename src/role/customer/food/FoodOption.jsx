import { Box, Typography } from "@mui/material";
import { AiOutlineCheck } from "react-icons/ai";

function FoodOption() {
  return (
    <Box>
      <Box className="flex justify-between items-center my-3">
        <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
          Pick option
        </Typography>
        <AiOutlineCheck className="rounded-full bg-green p-1 text-white font-bold text-xl" />
      </Box>
      <Box className="flex flex-col gap-2">
        <Box className="flex justify-between items-center">
          <Typography sx={{ fontWeight: 700 }}>Jujai mini</Typography>
          <Typography sx={{ fontWeight: 700 }}>459฿</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography sx={{ fontWeight: 700 }}>Jujai medium</Typography>
          <Typography sx={{ fontWeight: 700 }}>479฿</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography sx={{ fontWeight: 700 }}>Jujai large</Typography>
          <Typography sx={{ fontWeight: 700 }}>499฿</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FoodOption;
