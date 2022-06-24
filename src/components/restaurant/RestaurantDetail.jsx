import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonFavorite from "../button/ButtonFavorite";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import RestautantPromo from "./RestautantPromo";

function RestaurantDetail() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: "50px",
        position: "absolute",
        zIndex: 2,
        top: 200,
        padding: 5,
      }}
    >
      <div className="flex justify-between mb-4">
        <div className="flex items-center text-green text-20 font-bold align-middle">
          <div className="rounded-2xl bg-light-green h-7 p-4 items-center flex">
            <span className="text-sm font-light ">อาหารยุโรป</span>
          </div>
        </div>
        <ButtonFavorite />
      </div>

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.45rem",
            lineHeight: "2.25rem",
            marginY: 2,
          }}
        >
          KFC มีนบุรี - ประเทศไทย
        </Typography>
      </Box>

      <Box sx={{ display: "flex" }} color="gray">
        <Box sx={{ display: "flex", marginRight: 3, alignItems: "center" }}>
          <MdOutlineLocationOn className="text-green mr-1" />
          <Typography>19 km.</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BsStarHalf className="text-green mr-1" />
          <Typography>4.8 rating</Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ marginY: 2 }}>
          ใหม่! เคเอฟซี ซิงเกอร์ แม็กซ์เบอร์เกอร์พร้อมให้ทุกคนจัดเต็มได้อีก!!
          กับความอร่อยฟินล้นทุกชั้น เริ่มต้นเพียง 99.- รีบจัดเลยที่ KFC
          ทุกสาขาใกล้บ้านคุณ โทร 1150 หรือสั่งผ่านทาง application KFC Thailand,
        </Typography>
      </Box>

      <RestautantPromo />
    </Box>
  );
}

export default RestaurantDetail;
