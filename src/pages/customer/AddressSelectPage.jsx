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
import { useError } from "../../contexts/ErrorContext";
import ModalLocation from "../../components/ui/ModalLocation";
import GoogleMapInputLoader from "../../components/common/googleMapInput/GoogleMapInputLoader";
import Modal from "react-modal";
import SelectGoogleAddress from "../../role/customer/selectaddress/selectGoogleAddress";

function AddressSelectPage() {
  const { latitude, longitude } = useSelector((state) => state.user.info);
  const {
    setAddress,
    setLatitude,
    setLongitude,
    mode,
    setMode,
    pickedLatitude,
    pickedLongitude,
    setPickedLatitude,
    setPickedLongitude,
    selectedAddress,
    setSelectedAddress,
  } = useCustomerAddress();
  const position = {
    lat: pickedLatitude,
    lng: pickedLongitude,
  };

  const setPosition = ({ lat, lng }) => {
    setPickedLatitude(lat);
    setPickedLongitude(lng);
  };

  const { setError } = useError();
  const [open, setIsOpen] = useState(false);
  // const [tempAddress, setTempAddress] = useState("");
  // const [position, setPosition] = useState({ latitude, longitude });
  const [addressLabel, setAddressLabel] = useState("");
  const navigate = useNavigate();

  Modal.setAppElement("#root");

  const selectCurrentAddress = async () => {
    try {
      const newAddress = await getAddressFromLatLng(latitude, longitude);
      setAddress(newAddress);
      setLatitude(latitude);
      setLongitude(longitude);
      setMode("current");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (latitude !== null && longitude !== null) {
        const newAddressLabel = await getAddressFromLatLng(latitude, longitude);
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

        {position && (
          <>
            <Box className="flex flex-col justify-center items-center gap-5">
              {/* <OtherAddress /> */}
              <SelectGoogleAddress
                onClick={() => setIsOpen((prev) => !prev)}
                address={selectedAddress}
                mode={mode}
              />
              {/* <AddAddress /> */}
            </Box>

            <ModalLocation
              setAddress={setSelectedAddress}
              setIsOpen={setIsOpen}
              isOpen={open}
              title={"Select location"}
              tempAddress={selectedAddress}
              position={position}
            >
              <GoogleMapInputLoader
                address={selectedAddress}
                setAddress={setSelectedAddress}
                position={position}
                setPosition={setPosition}
              />
            </ModalLocation>
          </>
        )}
      </Box>
    </Container>
  );
}

export default AddressSelectPage;
