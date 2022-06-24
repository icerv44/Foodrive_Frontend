import { Box } from "@mui/material";
import { BsCashCoin } from "react-icons/bs";

function CashPayment() {
  return (
    <Box className="w-[336px] h-[76px] px-5 flex justify-between items-center rounded-lg shadow-md shadow-blue-100">
      <BsCashCoin className="text-4xl" />
      <Box className="text-[#3B3B3B]">Cash on delivery</Box>
    </Box>
  );
}

export default CashPayment;
