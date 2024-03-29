import { Box } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ButtonLogout from "../../../components/button/ButtonLogout";
import { useSocket } from "../../../contexts/SocketContext";
import { removeToken } from "../../../services/localstorage";
import { clearUserInfo, setDriverStatus } from "../../../slices/userSlice";
import DriverContainer from "./DriverContainer";

function HomeContainerDriver() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const userInfo = useSelector((state) => state.user.info);

  const handleLogOut = async () => {
    removeToken();
    dispatch(clearUserInfo());
    socket?.emit("updateDriverPosition", {
      ...userInfo,
      status: "UNAVAILABLE",
    });
    navigate("/" + role + "/login");
  };

  return (
    <>
      <Box className="fixed right-5 top-5 z-50">
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
