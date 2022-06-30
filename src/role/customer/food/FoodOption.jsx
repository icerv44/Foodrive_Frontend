import { Checkbox } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import { AiOutlineCheck } from "react-icons/ai";

function FoodOption({ name, MenuOptions }) {
  return (
    <Box>
      <Box className="flex justify-between items-center my-3">
        <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
          {name}
        </Typography>
        <AiOutlineCheck className="rounded-full bg-green p-1 text-white font-bold text-xl" />
      </Box>
      <Box className="flex flex-col gap-2">
        {MenuOptions?.map((el) => (
          <Box
            className="flex justify-between items-center"
            sx={{ fontWeight: 400 }}
            key={el?.id}
          >
            <Checkbox label={el?.name} />
            <Typography>+{el?.price} ฿</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FoodOption;
