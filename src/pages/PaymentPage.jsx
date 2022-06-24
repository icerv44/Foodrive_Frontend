import { Box, Container } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";
import AddPayment from "../components/payment/AddPayment";
import CashPayment from "../components/payment/CashPayment";
import CreditPayment from "../components/payment/CreditPayment";

function PaymentPage() {
  return (
    <Container>
      <ButtonBack />
      <Box className="mt-28">
        <Box className="ml-5 py-5 font-bold text-3xl">Payment Method</Box>
        <Box className="flex flex-col justify-center items-center gap-5">
          <CashPayment />
          <CreditPayment />
          <AddPayment />
        </Box>
      </Box>
    </Container>
  );
}

export default PaymentPage;
