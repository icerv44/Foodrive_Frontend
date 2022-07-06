import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonFavorite from "../button/ButtonFavorite";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import RestaurantPromo from "./RestaurantPromo";
import { useCustomer } from "../../contexts/CustomerContext";
import ButtonGreenGradiant from "../button/ButtonGreenGradiant";
import { Link } from "react-router-dom";

function RestaurantDetail() {
  const { restaurant } = useCustomer();

  console.log(restaurant);

  const restaurantId = restaurant?.id;

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: "50px",
        position: "absolute",
        zIndex: 2,
        top: 200,
        padding: 5,
        width: "100%",
      }}
      className="flex flex-col gap-8"
    >
      <Box>
        <div className="flex justify-between mb-4">
          <div
            className={
              "flex items-center text-green text-20 font-bold align-middle" +
                restaurant?.restaurant?.status ===
              "open"
                ? " text-green "
                : " text-brown "
            }
          >
            <div
              className={
                "rounded-2xl h-7 p-4 items-center flex" +
                  restaurant?.restaurant?.status ===
                "open"
                  ? " bg-light-green "
                  : " bg-light-brown "
              }
            >
              <span className="text-sm font-light ">
                {restaurant?.restaurant?.status}
              </span>
            </div>
          </div>
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
            {restaurant?.restaurant?.name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }} color="gray">
          <Box sx={{ display: "flex", marginRight: 3, alignItems: "center" }}>
            <MdOutlineLocationOn className="text-green mr-1" />
            <Typography>
              {restaurant?.distance
                ?.toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}
              km
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BsStarHalf className="text-green mr-1" />
            <Typography>4.8 rating</Typography>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ marginY: 2 }}>
            {/* ใหม่! เคเอฟซี ซิงเกอร์ แม็กซ์เบอร์เกอร์พร้อมให้ทุกคนจัดเต็มได้อีก!!
            กับความอร่อยฟินล้นทุกชั้น เริ่มต้นเพียง 99.- รีบจัดเลยที่ KFC
            ทุกสาขาใกล้บ้านคุณ โทร 1150 หรือสั่งผ่านทาง application KFC
            Thailand, */}
          </Typography>
        </Box>
      </Box>

      <Link to={"/customer/shop/" + restaurantId}>
        <Box className="flex justify-center">
          <ButtonGreenGradiant title={"Menus"} />
        </Box>
      </Link>
    </Box>
  );
}

export default RestaurantDetail;
