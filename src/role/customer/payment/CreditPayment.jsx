import { Box } from "@mui/material";
import { RiVisaLine } from "react-icons/ri";

function CreditPayment({ onClick }) {
  return (
    <Box
      id="credit-card-omise"
      onClick={onClick}
      className="w-[300px] h-[76px] bg-[#F6F6F6] px-5 flex justify-between items-center rounded-lg shadow-sm shadow-blue-100"
    >
      <RiVisaLine className="text-6xl text-blue-600" />
      <Box>5454 5454 5454 ****</Box>
    </Box>
  );
}

export default CreditPayment;
