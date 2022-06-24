import { Box } from "@mui/material";

function BoxPayment({ children, ...props }) {
  return (
    <Box {...props} className="w-[336px] h-[76px]">
      {children}
    </Box>
  );
}

export default BoxPayment;
