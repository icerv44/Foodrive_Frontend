import { Box, Typography } from "@mui/joy";
import React from "react";
import ButtonLogout from "../../components/button/ButtonLogout";
import { HiLogout } from "react-icons/hi";
import { removeToken } from "../../services/localstorage";
import { Link, useNavigate } from "react-router-dom";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import ButtonBack from "../../components/button/ButtonBack";

function CustomerProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/customer/login");
  };

  return (
    <Box className="flex justify-center gap-5 h-[100vh] bg-light-gray">
      <Box className="bg-white h-1/2">
        <ButtonBack />
        <Box></Box>
      </Box>

      <Box className="fixed bottom-0">
        <Box
          onClick={handleLogout}
          className="flex justify-between items-center font-bold h-12 w-[375px] px-10 bg-white drop-shadow-md hover:text-gray text-black"
        >
          <span>Logout</span>
          <HiLogout />
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerProfilePage;
