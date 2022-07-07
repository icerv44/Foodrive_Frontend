import axios from "../../../config/axios";
import { useSocket } from "../../../contexts/SocketContext";
import { useSelector } from "react-redux";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { GrFormClose } from "react-icons/gr";

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

  const localDate = dateTime.split("GMT")[0];
  const localTime = localDate.slice(4);

  return (
    <Card variant="outlined" sx={{ minWidth: "320px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography level="h2" fontSize="xl" sx={{ alignSelf: "flex-start" }}>
          {customerName}
        </Typography>
        <Typography level="body2">{localTime}</Typography>
      </Box>
      <IconButton
        onClick={handleCanceledOrder}
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <GrFormClose />
      </IconButton>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {orderPrice?.toFixed(2)} ฿
          </Typography>
        </div>
        <div>
          <Typography level="body3">Order :</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {amountOrder} list
          </Typography>
        </div>
      </Box>
      <Button
        onClick={handleAcceptedOrder}
        variant="solid"
        size="md"
        aria-label="Explore Bahamas Islands"
        sx={{ w: "100%", fontWeight: 600, bgcolor: "#37C989", mt: "12px" }}
      >
        Confirm
      </Button>
    </Card>
  );
}

export default CardPendingOrder;
