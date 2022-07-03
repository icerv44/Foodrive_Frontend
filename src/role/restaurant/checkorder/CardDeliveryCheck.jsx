import { Box } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";

function CardDeliveryCheck({ orderId, orderDetail, orderTimes, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
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
        <Box>{orderId}</Box>
        <Box>{orderDetail}</Box>
      </Box>
      <Box>
        <Box>{orderTimes}</Box>
        <Box className="text-[#DA6317] text-xl">
          <BsChevronRight />
        </Box>
      </Box>
    </Box>
  );
}

export default CardDeliveryCheck;
