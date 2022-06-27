import { Box, Typography, Grid } from "@mui/material";

function CardMenuRestaurant() {
  return (
    <>
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
            className="w-[70px] object-cover"
            src="https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png"
            alt=""
          />
          {/* MidBox */}
          <Box className="grow ">
            <Typography sx={{ fontWeight: 700 }}>แกร๊ป สแน็ค 100</Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#3B3B3B",
                opacity: 0.3,
              }}
            >
              ไก่วิงซ์แซ่บ 7 ชิ้น, ชิคเก้นป๊อป 7 ชิ้น, ชิคเก้นป๊อป 7 ชิ้น
            </Typography>
          </Box>
          {/* RightBox */}
          <Box className="flex items-center justify-center">
            <Typography variant="h6">199฿</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CardMenuRestaurant;
