import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../components/button/ButtonBack";
import { OMISE_PUBLIC_KEY } from "../../config/env";
import { useCustomerAddress } from "../../contexts/CustomerAddressContext.jsx";
import { useSocket } from "../../contexts/SocketContext";
import AddPayment from "../../role/customer/payment/AddPayment";
import CashPayment from "../../role/customer/payment/CashPayment";
import CreditPayment from "../../role/customer/payment/CreditPayment";
import axios from "../../config/axios";

const OmiseCard = window.OmiseCard;

function PaymentPage() {
  const sum = 2000;
  const { socket } = useSocket();
  const navigate = useNavigate();
  const { address, latitude, longitude } = useCustomerAddress();
  const cart = {
    id: 2,
    price: 22,
    deliveryFee: 10,
    distance: 10,
    customerId: 1,
    restaurantId: 1,
    cartItems: {
      cart: [
        {
          name: "pad thai",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1200px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
          price: 10,
          menuId: 1,
          id: 1,
          OrderMenuOptionGroups: [
            {
              name: "size",
              id: 1,
              menuOptionGroupId: 1,
              options: [
                {
                  name: "S",
                  price: 0,
                  menuOptionId: 1,
                  id: 1,
                },
              ],
            },
          ],
        },
        {
          name: "thai green curry",
          image:
            "https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Green-Curry_5.jpg",
          price: 12,
          menuId: 3,
          id: 2,
          OrderMenuOptionGroups: [],
        },
      ],
      totalPrice: 22,
    },
  };

  useEffect(() => {
    OmiseCard.configure({
      publicKey: OMISE_PUBLIC_KEY,
      amount: cart.price * 100,
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
      amount: cart.price * 100,

      onCreateTokenSuccess: async (token) => {
        try {
          console.log(token);
          await axios.post("/customer/confirmCart/" + cart.id, {
            omiseToken: token,
            totalInBaht: cart.price,
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
    omiseHandler();
  };

  const notifyRestaurant = async () => {
    const restaurantId = 1;
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
      <Box className="text-l">
        Current Address: {address || "No address chosen"}
      </Box>
      <button onClick={() => navigate("/customer/myLocation")}>
        Select Address
      </button>
      <Box>Total Amount: {cart.price + " ฿"};</Box>
    </Container>
  );
}

export default PaymentPage;
