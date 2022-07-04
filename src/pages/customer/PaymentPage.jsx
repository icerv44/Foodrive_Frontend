import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../components/button/ButtonBack";
import { GOOGLE_MAP_KEY, OMISE_PUBLIC_KEY } from "../../config/env";
import { useCustomerAddress } from "../../contexts/CustomerAddressContext.jsx";
import { useSocket } from "../../contexts/SocketContext";
import AddPayment from "../../role/customer/payment/AddPayment";
import CashPayment from "../../role/customer/payment/CashPayment";
import CreditPayment from "../../role/customer/payment/CreditPayment";
import axios from "../../config/axios";
import { useCustomer } from "../../contexts/CustomerContext";
import { useSelector } from "react-redux";

const OmiseCard = window.OmiseCard;

function PaymentPage() {
  const { socket } = useSocket();
  const navigate = useNavigate();
  const { cart } = useCustomer();

  // const sum = cart?.cartItems?.totalPrice;
  console.log(cart);

  const {
    address,
    latitude: customerLatitude,
    longitude: customerLongitude,
  } = useCustomerAddress();

  const { latitude, longitude } = useSelector((state) => state.user.info);
  const { setAddress, setLatitude, setLongitude } = useCustomerAddress();
  const [addressLabel, setAddressLabel] = useState("");

  const getAddressFromLatLng = async (lat, lng) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_KEY}`
    );
    return res.data.results[0].formatted_address;
  };

  const selectCurrentAddress = async () => {
    try {
      const newAddress = await getAddressFromLatLng(latitude, longitude);
      setAddress(newAddress);
      setLatitude(latitude);
      setLongitude(longitude);
      navigate("/customer/payment");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (latitude !== null && longitude !== null) {
        const newAddressLabel = await getAddressFromLatLng(latitude, longitude);
        console.log(newAddressLabel);
        setAddressLabel(newAddressLabel);
      }
    };
    fetchLocation();
  }, [latitude, longitude]);

  useEffect(() => {
    OmiseCard.configure({
      publicKey: OMISE_PUBLIC_KEY,
      amount: cart.cartItems.totalPrice * 100,
      currency: "thb",
      frameLabel: "Foodrive",
      submitLabel: "Pay With Credit Card",
      buttonLabel: "Pay with Omise",
      submitAuto: "no",
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });

    OmiseCard.configureButton("#credit-card-omise");
    OmiseCard.attach();
  }, []);

  const omiseHandler = () => {
    OmiseCard.open({
      amount: cart.cartItems.totalPrice * 100,

      onCreateTokenSuccess: async (token) => {
        try {
          console.log(token);
          await axios.post("/customer/confirmCart/" + cart.id, {
            omiseToken: token,
            totalInBaht: cart.cartItems.totalPrice,
            latitude,
            longitude,
            address,
          });
        } catch (err) {
          console.log(err);
        }
      },
    });
  };

  const handleClick = async (e) => {
    if (!address) return alert("please select you address before checking out");
    omiseHandler();
  };

  const notifyRestaurant = async () => {
    const restaurantId = cart.restaurantId;
    socket.emit("notifyRestaurant", {
      restaurantId,
    });
  };

  return (
    <Container>
      <ButtonBack />
      <Box className="mt-24">
        <Box className="ml-5 py-5 font-bold text-3xl">Payment Method</Box>
        <Box className="flex flex-col justify-center items-center gap-5">
          <CashPayment />
          <form>
            <CreditPayment onClick={handleClick} />
          </form>
          <AddPayment />
        </Box>
      </Box>
      {/* <button id="credit-card-omise" onClick={handleClick}>
          Pay With Omise
        </button> */}
      {/* <button onClick={() => notifyRestaurant()}>
        Send notification to restaurant
      </button> */}
      <button onClick={() => selectCurrentAddress()}>Select Address</button>
      <Box className="text-l">
        Current Address: {address || "No address chosen"}
      </Box>
      <Box>Total Amount: {cart.cartItems.totalPrice + " ฿"};</Box>
    </Container>
  );
}

export default PaymentPage;
