import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function CardMenuRestaurant({ menu }) {
  return (
    <>
      <Link to={"/customer/menuDetail/" + menu?.id}>
        <Box
          sx={{
            width: 323,
            height: 87,
            boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.07)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 10px",
            borderRadius: "18px",
          }}
        >
          <Box className="flex justify-around items-center gap-2">
            {/* LeftBox */}
            <img
              className="w-[70px] h-[70px] object-cover"
              src={menu?.menuImage}
              alt={menu?.name}
            />
            {/* MidBox */}
            <Box className="grow w-[250px]">
              <Box className="flex items-center justify-between">
                <Typography sx={{ fontWeight: 700 }}>{menu?.name}</Typography>
                <Typography variant="h6" color={"#FEAD1D"}>
                  {menu?.price} ฿
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#3B3B3B",
                  opacity: 0.3,
                }}
              >
                {menu?.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}

export default CardMenuRestaurant;
