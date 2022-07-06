import axios from "../../../config/axios";
import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useSocket } from "../../../contexts/SocketContext";
import { useSelector } from "react-redux";

function CardPendingOrder({
  orderId,
  firstName,
  lastName,
  address,
  amountOrder,
  totalPrice,
  updatedAt,
  customerId,
  driverId,
}) {
  const { restaurantLatitude, restaurantLongitude } = useSelector(
    (state) => state.user.info
  );
  let customerName = firstName + " " + lastName;
  let orderPrice = totalPrice;
  let dateTime = new Date(updatedAt).toString();
  const { socket } = useSocket();

  const handleAcceptedOrder = async () => {
    try {
      await axios.patch("restaurant/pendingOrders/" + orderId, {
        status: "DRIVER_PENDING",
      });
      socket.emit("restaurantAccept", {
        restaurantLatitude,
        restaurantLongitude,
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
      <Box className="flex flex-col gap-1">
        <Box className="flex justify-between">
          <Box className="font-semibold text-xl">{customerName}</Box>
        </Box>
        <Box>{dateTime}</Box>
        <Box>{address}</Box>
        <Box className="flex justify-between font-semibold text-lg">
          <Box>Order :</Box>
          <Box>{amountOrder} list</Box>
        </Box>
        <Box className="flex justify-between font-semibold text-lg">
          <Box>Total Price :</Box>
          <Box>{orderPrice.toFixed(2)} ฿</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "8px",
          mt: "4px",
        }}
      >
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
