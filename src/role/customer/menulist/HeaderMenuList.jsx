import { useState } from "react";
import { Input } from "@mui/joy";
import { Autocomplete, Box } from "@mui/material";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import ButtonLocation from "../../../components/button/ButtonLocation";
import { BsSearch } from "react-icons/bs";
import { useCustomer } from "../../../contexts/CustomerContext";
import { getAddressFromLatLng } from "../../../services/getAddress";
import { useError } from "../../../contexts/ErrorContext";
import Modal from "react-modal";
import { ModalUi } from "../../../components/ui/ModalUi";

function HeaderMenuList({ searchMenu, setSearchMenu }) {
  const { restaurant } = useCustomer();
  const { setError } = useError();
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const latitude = restaurant?.restaurant?.latitude;
  const longitude = restaurant?.restaurant?.longitude;

  const getAddressRestaurant = async () => {
    setIsOpen(true);
    if (latitude !== null && longitude !== null) {
      const res = await getAddressFromLatLng(latitude, longitude);
      console.log(res);
    } else {
      setError("This restaurant not set address");
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box className="w-full h-[76px] px-5 flex justify-between items-center">
        <ButtonBackNew />
        <Box className="text-[#53E88B] text-lg font-semibold">
          {restaurant?.restaurant?.name}
        </Box>

        <ButtonLocation onClick={getAddressRestaurant} />
        <ModalUi isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gapX: "6px",
          p: "2px 18px 12px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Input
            onChange={(e) => setSearchMenu(e.target.value)}
            placeholder={"Search"}
            sx={{ borderRadius: "14px", bgcolor: "#f9a94d22" }}
            startDecorator={<BsSearch />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderMenuList;
