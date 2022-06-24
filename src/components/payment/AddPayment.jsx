import { Box } from "@mui/material";
import ButtonPlus from "../button/ButtonPlus";

function AddPayment() {
  return (
    <Box className="w-[336px] h-[76px] px-5 flex items-center rounded-lg shadow-md shadow-blue-100">
      <ButtonPlus />
      <Box className="pl-4 font-semibold">Add more card</Box>
    </Box>
  );
}

export default AddPayment;
