import { Box } from "@mui/joy";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ButtonLogout from "../../../components/button/ButtonLogout";
import { removeToken } from "../../../services/localstorage";
import DriverContainer from "./DriverContainer";

function HomeContainerDriver() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const handleLogOut = async () => {
    removeToken();
    navigate("/" + role + "/login");
  };

  return (
    <>
      <Box className="fixed right-5 top-5">
        <ButtonLogout onClick={handleLogOut}>Log Out</ButtonLogout>
      </Box>
      <Box className="">
        <Outlet />
        <Box className="">
          <DriverContainer />
        </Box>
      </Box>
    </>
  );
}

export default HomeContainerDriver;
