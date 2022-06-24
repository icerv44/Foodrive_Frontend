import { Box, Container } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";
import AddAddress from "../components/selectaddress/AddAddress";
import OtherAddress from "../components/selectaddress/OtherAddress";
import SelectedAddress from "../components/selectaddress/SelectedAddress";

function AddressSelectPage() {
  return (
    <Container>
      <ButtonBack />
      <Box className="mt-28">
        <Box className="ml-5 py-5 font-bold text-3xl">Select your address</Box>
        <Box className="flex flex-col justify-center items-center gap-5">
          <OtherAddress />
          <SelectedAddress />
          <AddAddress />
        </Box>
      </Box>
    </Container>
  );
}

export default AddressSelectPage;
