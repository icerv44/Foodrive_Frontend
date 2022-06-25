import { Box } from "@mui/material";
import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ButtonFavorite() {
  return (
    <Box>
      <Link to="/myFavorite">
        <div className="rounded-full bg-light-red w-7 h-7 flex items-center justify-center">
          <BsSuitHeartFill className=" text-heart " />
        </div>
      </Link>
    </Box>
  );
}

export default ButtonFavorite;
