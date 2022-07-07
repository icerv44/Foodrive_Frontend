import { Box, Typography } from "@mui/joy";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function RestaurantBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
      }}
    >
      <Box
        sx={{
          width: 355,
          height: 74,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0px 45px",
          borderRadius: "22px",
          mx: "auto",
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
          zIndex: 20,
        }}
      >
        {/* Delivery */}
        <Link to="/restaurant/checkorder">
          <Box
            role="button"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "green",
              fontSize: "26px",
            }}
          >
            <AiOutlineFileText />
            <Typography sx={{ color: "green" }}>delivery</Typography>
          </Box>
        </Link>
        {/* Menu */}
        <Link to="/restaurant/category">
          <Box
            role="button"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "green",
              fontSize: "26px",
            }}
          >
            <MdOutlineRestaurantMenu />
            <Typography sx={{ color: "green" }}>menu</Typography>
          </Box>
        </Link>
        {/* Message */}
        {/* <Link to="">
          <Box
            role="button"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#3B3B3B",
              fontSize: "26px",
            }}
          >
            <BsFillChatDotsFill />
            <Typography>message</Typography>
          </Box>
        </Link> */}
        {/* Profile */}
        <Link to="/restaurant/profile">
          <Box
            role="button"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "green",
              fontSize: "26px",
            }}
          >
            <BsFillPeopleFill />
            <Typography sx={{ color: "green" }}>profile</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default RestaurantBar;
