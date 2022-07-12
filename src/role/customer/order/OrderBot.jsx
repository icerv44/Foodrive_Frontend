import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonWhite from "../../../components/button/ButtonWhite";
import { useCustomerAddress } from "../../../contexts/CustomerAddressContext.jsx";
import { useCustomer } from "../../../contexts/CustomerContext";
import { useError } from "../../../contexts/ErrorContext";
import getDistanceFromLatLonInKm from "../../../services/getDistance";

function OrderBot() {
  const { cart, getTotalFromCart } = useCustomer();
  const { address, latitude, longitude } = useCustomerAddress();
  const navigate = useNavigate();
  const { setError } = useError();

  const handleNavPayment = () => {
    if (!address || latitude === null || longitude === null) {
      return setError("You must pick your destination first.");
    }
    navigate("/customer/payment");
  };

  console.log(
    latitude,
    longitude,
    cart?.Restaurant?.latitude,
    cart?.Restaurant?.longitude
  );

  const getDeliveryFee = (distance = 0) => {
    return distance * 5;
  };

  const deliveryDistance = getDistanceFromLatLonInKm(
    latitude,
    longitude,
    cart?.Restaurant?.latitude,
    cart?.Restaurant?.longitude
  );

  const deliveryFee = getDeliveryFee(deliveryDistance);

  return (
    <Box
      sx={{
        width: "348px",
        height: "120px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        mx: "auto",
        mt: "10px",
        mb: "165px",
        borderRadius: "20px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        color: "white",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gapY: "20px",
          width: "100%",
          px: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gapY: "20px",
          width: "100%",
          px: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <Typography
            color="white"
            sx={{ fontWeight: "500", fontSize: "20px" }}
          >
            Delivery Fee :
          </Typography>
          <Typography
            color="white"
            sx={{ fontWeight: "500", fontSize: "20px" }}
          >
            {latitude
              ? (cart?.Restaurant ? deliveryFee.toFixed(2) : 0) + " ฿"
              : "0฿"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            color="white"
            sx={{ fontWeight: "500", fontSize: "20px" }}
          >
            Price :
          </Typography>
          <Typography
            color="white"
            sx={{ fontWeight: "500", fontSize: "20px" }}
          >
            {cart?.cartItems &&
              getTotalFromCart(cart?.cartItems?.cart).toFixed(2) + " ฿"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            color="white"
            sx={{ fontWeight: "700", fontSize: "20px" }}
          >
            Total price:
          </Typography>
          <Typography
            color="white"
            sx={{ fontWeight: "700", fontSize: "20px" }}
          >
            {cart?.cartItems && latitude
              ? (getTotalFromCart(cart?.cartItems?.cart) + deliveryFee).toFixed(
                  2
                ) + " ฿"
              : ""}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "12px" }}>
        <ButtonWhite
          title="Order Now"
          width="325px"
          onClick={handleNavPayment}
        />
      </Box>
    </Box>
  );
}

export default OrderBot;
