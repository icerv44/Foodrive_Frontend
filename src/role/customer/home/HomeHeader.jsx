import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { Box } from "@mui/material";
import UserAvatar from "../../../components/imglogo/UserAvatar";
import { useSelector } from "react-redux";

function HomeHeader() {
  const user = useSelector((state) => state.user.info);
  // console.log(user);

  // useEffect(() => {
  //   const searchMenus = async () => {};
  // }, []);

  return (
    <Box
      className="flex justify-between items-center h-16  px-5 rounded-2lg "
      sx={{ boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <Link to="/customer/myLocation">
        <div className="flex items-center  text-20 font-bold text-light-from-green hover:text-dark-green">
          <div className="rounded-full bg-light-green w-7 h-7 flex items-center justify-center mr-4 ">
            <MdLocationOn className="" />
          </div>
          <span className="">My Location</span>
        </div>
      </Link>

      <Link to={"/customer/profile"}>
        <UserAvatar
          alt={user.firstName + " " + user.lastName}
          src={user.profileImage}
        />
      </Link>
    </Box>
  );
}

export default HomeHeader;
