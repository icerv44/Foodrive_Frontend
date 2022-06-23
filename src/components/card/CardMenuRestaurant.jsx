import { Box, Typography, Grid } from "@mui/material";

function CardMenuRestaurant() {
  return (
    <>
      <Box
        sx={{
          width: 323,
          height: 87,
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
          borderRadius: "16px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3} className="flex items-center">
            <img
              className="w-[100%] h-[60px] object-cover"
              src="https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png"
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">แกร๊ป สแน็ค 100</Typography>
            <Typography>ไก่วิงซ์แซ่บ 7 ชิ้น, ชิคเก้นป๊อป 7 ชิ้น</Typography>
          </Grid>
          <Grid item xs={3} className="flex items-center">
            <Typography variant="h6">199฿</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CardMenuRestaurant;
