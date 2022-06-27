import React from "react";
import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Box } from "@mui/material";
import ButtonFavorite from "../../../components/button/ButtonFavorite";

function HomeHeader() {
  return (
    <Box
      className="flex justify-between items-center h-16  px-5 rounded-2lg "
      sx={{ boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <Link to="/myLocation">
        <div className="flex items-center text-green text-20 font-bold">
          <div className="rounded-full bg-light-green w-7 h-7 flex items-center justify-center mr-4">
            <MdLocationOn className="" />
          </div>
          <span className="">My Location</span>
        </div>
      </Link>

      <ButtonFavorite />
    </Box>
  );
}

export default HomeHeader;
