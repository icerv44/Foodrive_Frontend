import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";

function CardCustomerOrder({
  img,
  menuTitle,
  menuQuantity,
  menuPrice,
  commentMenu,
}) {
  return (
    <>
      <Box
        sx={{
          width: 323,
          // height: 100,
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.09)",
          alignItems: "center",
          padding: "0px 10px",
          margin: "10px 0px",
          borderRadius: "18px",
          // overflow: "scroll",
        }}
      >
        <Box className="flex items-center gap-2 p-2">
          {/* LeftBox */}
          <img className="w-[70px]" src={img} alt="" />

          {/* MidBox */}
          <Box className="grow w-[200px]">
            <Box className="flex justify-between">
              <Typography sx={{ fontWeight: 700 }}>{menuTitle}</Typography>

              <Box className="flex items-center justify-center">
                <Typography variant="h6">{menuPrice} ฿</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontWeight: 700 }}> {menuQuantity}</Typography>

            <Box sx={{}}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#3B3B3B",
                  opacity: 0.3,
                  variant: "inherit",
                  overflowWrap: "break-word",
                  // maxWidth: "300px",
                }}
              >
                {commentMenu}
              </Typography>
            </Box>
          </Box>
          {/* RightBox */}
        </Box>
      </Box>
    </>
  );
}

export default CardCustomerOrder;
