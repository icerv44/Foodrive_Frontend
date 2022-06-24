import { Box } from "@mui/material";
import { RiVisaLine } from "react-icons/ri";

function CreditPayment() {
  return (
    <Box className="w-[336px] h-[76px] bg-[#F6F6F6] px-5 flex justify-between items-center rounded-lg shadow-sm shadow-blue-100">
      <RiVisaLine className="text-6xl text-blue-600" />
      <Box>2121 3434 6565 ****</Box>
    </Box>
  );
}

export default CreditPayment;
