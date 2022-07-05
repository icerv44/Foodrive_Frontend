import { Box, Typography } from "@mui/joy";
import React from "react";
import ButtonLogout from "../components/button/ButtonLogout";
import { HiLogout } from "react-icons/hi";
import { removeToken } from "../services/localstorage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonBackNew from "../components/button/ButtonBackNew";
import ButtonBack from "../components/button/ButtonBack";
import CardProfile from "../components/card/CardProfile";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo } from "../slices/userSlice";
import { useSocket } from "../contexts/SocketContext";
import OnlineOfflineButton from "../components/restaurant/OnlineOfflineButton";

function AccountPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { socket, setSocket } = useSocket();
  const user = useSelector((state) => state.user.info);
  const role = pathname.split("/")[1];

  const profileList = [
    {
      role: "customer",
      menu: [
        { title: "Edit my profile", to: "/customer/editProfile" },
        { title: "My address", to: "/customer/myLocation" },
      ],
    },
    {
      role: "driver",
      menu: [{ title: "Edit my profile", to: "/driver/editProfile" }],
    },
    {
      role: "restaurant",
      menu: [
        { title: "Edit restaurant profile", to: "/restaurant/editProfile" },
      ],
    },
  ];

  const findRole = () => profileList.find((el) => el.role === role);
  console.log(findRole());

  const handleLogout = () => {
    removeToken();
    dispatch(clearUserInfo());
    socket?.emit("forceDisconnect");
    setSocket(null);
    navigate("/customer/login");
  };

  return (
    <Box className="flex justify-center gap-5 h-[100vh] ">
      <ButtonBack />
      <Box sx={{ mt: "100px" }}>
        {user.role === "restaurant" && <OnlineOfflineButton />}
        {findRole().menu.map((el, idx) => (
          <Box key={idx}>
            <Link to={el.to}>
              <CardProfile title={el.title} />
            </Link>
          </Box>
        ))}
      </Box>

      <Box className="fixed bottom-0">
        <Box
          onClick={handleLogout}
          sx={{
            boxShadow: "10px 10px 10px 10px rgba(90, 108, 234, 0.07)",
          }}
          className="flex justify-between items-center font-bold h-12 w-[375px] px-10  hover:text-gray text-black "
        >
          <span>Logout</span>
          <HiLogout />
        </Box>
      </Box>
    </Box>
  );
}

export default AccountPage;
