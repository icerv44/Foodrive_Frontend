import axios from "../../../config/axios";
import { Button } from "@mui/joy";
import { Box } from "@mui/material";

function CardPendingOrder({ orderId, customerName, address, totalPrice }) {
  const handleAcceptedOrder = async () => {
    try {
      await axios.patch("restaurant/pendingOrders/" + orderId, {
        status: "DRIVER_PENDING",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCanceledOrder = async () => {
    try {
      await axios.patch("restaurant/pendingOrders/" + orderId, {
        status: "CANCELLED",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "20px",
        px: "20px",
        py: "12px",
      }}
    >
      <Box>
        <Box>{customerName}</Box>
        <Box>{address}</Box>
        <Box>{totalPrice}</Box>
        {/* <Box>{orderAmount}</Box>
        <Box>{updatedAt}</Box> */}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", gap: "8px" }}>
        <Button
          onClick={handleCanceledOrder}
          color="danger"
          sx={{ bgcolor: "#e60000", fontSize: "16px", flexGrow: "1" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAcceptedOrder}
          color="success"
          sx={{ bgcolor: "#37C989", fontSize: "16px" }}
        >
          Accepted Order
        </Button>
      </Box>
    </Box>
  );
}

export default CardPendingOrder;
