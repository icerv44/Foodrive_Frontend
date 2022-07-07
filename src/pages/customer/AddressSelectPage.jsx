import { Box, Container } from "@mui/material";
import ButtonBack from "../../components/button/ButtonBack";
import OtherAddress from "../../role/customer/selectaddress/OtherAddress";
import SelectedAddress from "../../role/customer/selectaddress/SelectedAddress";
import AddAddress from "../../role/customer/selectaddress/AddAddress";
import { useSelector } from "react-redux";
import { useCustomerAddress } from "../../contexts/CustomerAddressContext.jsx";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { GOOGLE_MAP_KEY } from "../../config/env";
import { useNavigate } from "react-router-dom";
import { getAddressFromLatLng } from "../../services/getAddress";

function AddressSelectPage() {
  const { latitude, longitude } = useSelector((state) => state.user.info);
  const { setAddress, setLatitude, setLongitude } = useCustomerAddress();
  const { setError } = useError();
  const [addressLabel, setAddressLabel] = useState("");
  const navigate = useNavigate();

  const selectCurrentAddress = async () => {
    try {
      // const newAddress = await getAddressFromLatLng(latitude, longitude);
      // setAddress(newAddress);
      // setLatitude(latitude);
      // setLongitude(longitude);
      // navigate("/customer/payment");
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
    fetchLocation().catch((err) => setError(err.response.data.message));
  }, [latitude, longitude]);

  return (
    <Container>
      <ButtonBack />
      <Box className="mt-28">
        <Box className="ml-5  font-bold text-3xl">My Location</Box>
        <Box className="flex flex-col justify-center items-center gap-5">
          {/* <OtherAddress /> */}
          <SelectedAddress
            onClick={selectCurrentAddress}
            address={addressLabel}
          />
          {/* <AddAddress /> */}
        </Box>
      </Box>
    </Container>
  );
}

export default AddressSelectPage;
