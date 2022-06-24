import { Box, Container } from "@mui/material";
import ButtonBack from "../../components/button/ButtonBack";
import OtherAddress from "../../role/customer/selectaddress/OtherAddress";
import SelectedAddress from "../../role/customer/selectaddress/SelectedAddress";
import AddAddress from "../../role/customer/selectaddress/AddAddress";

function AddressSelectPage() {
  return (
    <Container>
      <ButtonBack />
      <Box className="mt-24">
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
