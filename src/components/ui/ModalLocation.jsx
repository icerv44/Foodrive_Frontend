import Modal from "react-modal";
import { Box, Typography } from "@mui/joy";
import ButtonGreenGradiant from "../button/ButtonGreenGradiant";
import { useCustomerAddress } from "../../contexts/CustomerAddressContext.jsx";
export default function ModalLocation({
  children,
  title,
  isOpen,
  setIsOpen,
  tempAddress,
  position,
  setPosition,
}) {
  const {
    setMode,
    address,
    setAddress,
    setLatitude,
    setLongitude,
    setSelectedAddress,
    selectedAddress,
    setPickedLatitude,
    setPickedLongitude,
  } = useCustomerAddress();

  console.log(selectedAddress, address);

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          borderRadius: "18px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          height: "75vh",
          top: "10%",
          width: "80%",
        },
      }}
      id={"root"}
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
        //There might be a bug here
        setAddress("");
      }}
    >
      <Box className="px-2">
        <Box className="text-2xl font-bold mb-4 ">{title}</Box>
        <Box className="flex justify-content text-gray">{children}</Box>
      </Box>
      <Typography sx={{ maxHeight: 50, margin: "10px auto", overflow: "auto" }}>
        {tempAddress}
        {JSON.stringify(position, null, 2)}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ButtonGreenGradiant
          title="Select"
          onClick={() => {
            setIsOpen(false);
            setMode("handPicked");
            setSelectedAddress(selectedAddress);
            setAddress(selectedAddress);
            setPickedLatitude(position.lat);
            setLatitude(position.lat);
            setPickedLongitude(position.lng);
            setLongitude(position.lng);
          }}
        ></ButtonGreenGradiant>
      </Box>
    </Modal>
  );
}
