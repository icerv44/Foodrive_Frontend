import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import ButtonBack from "../../components/button/ButtonBack";
import { OMISE_PUBLIC_KEY } from "../../config/env";
import AddPayment from "../../role/customer/payment/AddPayment";
import CashPayment from "../../role/customer/payment/CashPayment";
import CreditPayment from "../../role/customer/payment/CreditPayment";

const OmiseCard = window.OmiseCard;

function PaymentPage() {
  const sum = 2000;

  useEffect(() => {
    OmiseCard.configure({
      publicKey: OMISE_PUBLIC_KEY,
      amount: sum,
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
      amount: sum,

      onCreateTokenSuccess: async (token) => {
        try {
          console.log(token);
        } catch (err) {
          console.log(err);
        }
      },
    });
  };

  const handleClick = async (e) => {
    omiseHandler();
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
    </Container>
  );
}

export default PaymentPage;
