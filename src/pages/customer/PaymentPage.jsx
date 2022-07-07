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
import { TiArrowSortedDown } from "react-icons/ti";
import { Typography } from "@mui/joy";
import { getAddressFromLatLng } from "../../services/getAddress";
import { useError } from "../../contexts/ErrorContext";
import getDistanceFromLatLonInKm from "../../services/getDistance";

const OmiseCard = window.OmiseCard;

function PaymentPage() {
  const { setError } = useError();
  const { socket } = useSocket();
  const navigate = useNavigate();
  const { cart } = useCustomer();

  // const sum = cart?.cartItems?.totalPrice;

  const {
    address,
    latitude: customerLatitude,
    longitude: customerLongitude,
  } = useCustomerAddress();

  const restaurantLatitude = cart?.Restaurant?.latitude;
  const restaurantLongitude = cart?.Restaurant?.longitude;
  const distance = getDistanceFromLatLonInKm(
    restaurantLatitude,
    restaurantLongitude,
    customerLatitude,
    customerLongitude
  );
  const deliveryFee = distance * 5;
  console.log(deliveryFee);

  const totalPrice = cart.cartItems.totalPrice + deliveryFee;

  const { latitude, longitude } = useSelector((state) => state.user.info);
  const { setAddress, setLatitude, setLongitude } = useCustomerAddress();

  const notifyRestaurant = async () => {
    const restaurantId = cart.restaurantId;
    socket.emit("notifyRestaurant", {
      restaurantId,
    });
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

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     if (latitude !== null && longitude !== null) {
  //       const newAddressLabel = await getAddressFromLatLng(latitude, longitude);
  //       console.log(newAddressLabel);
  //       setAddressLabel(newAddressLabel);
  //     }
  //   };
  //   fetchLocation();
  // }, [latitude, longitude]);

  useEffect(() => {
    OmiseCard.configure({
      publicKey: OMISE_PUBLIC_KEY,
      amount: totalPrice * 100,
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
      amount: totalPrice * 100,

      onCreateTokenSuccess: async (token) => {
        try {
          await axios.post("/customer/confirmCart/" + cart.id, {
            omiseToken: token,
            totalInBaht: totalPrice,
            deliveryFee,
            latitude: customerLatitude,
            longitude: customerLongitude,
            distance,
            address,
          });
          notifyRestaurant();
        } catch (err) {
          console.log(err);
          setError(err.response.data.message);
        }
      },
    });
  };

  const handleClick = async (e) => {
    if (!address)
      return alert("please select your address before checking out");
    omiseHandler();
  };

  return (
    <Container>
      <ButtonBack />
      <Box className="mt-24 ml-5 ">
        <Box className="flex flex-col justify-center">
          <Box className=" py-5 font-bold text-3xl ">Payment</Box>

          {/* <button
            onClick={() => selectCurrentAddress()}
            className="font-semibold text-green pt-4 pb-2 flex items-center gap-2"
          >
            <TiArrowSortedDown />
            Select Address
          </button> */}

          <Box className="w-[300px] p-5  rounded-lg shadow-md shadow-blue-100 mb-5">
            <Box className="text-l">
              <p className="font-semibold pt-4 pb-2 flex items-center gap-2">
                Current Location:
              </p>
              <p className="text-gray">{address || "No address chosen"}</p>
            </Box>
          </Box>

          <form>
            <CreditPayment onClick={handleClick} />
          </form>
        </Box>

        <Box className="absolute bottom-28 flex justify-between bg-green text-white px-5 py-2 rounded-lg w-[300px] text-lg">
          <p>Total Amount:</p>
          <p>{totalPrice.toFixed(2) + " ฿"}</p>
        </Box>
      </Box>
    </Container>
  );
}

export default PaymentPage;
