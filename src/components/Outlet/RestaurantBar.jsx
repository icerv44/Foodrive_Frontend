import { Box, Typography } from "@mui/joy";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRestaurant } from "../../contexts/RestaurantContext";

function RestaurantBar() {
  const { pendingOrderData } = useRestaurant();

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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 45px",
          borderRadius: "22px",
          mx: "auto",
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
          zIndex: 20,
        }}
      >
        {/* Delivery */}
        <Link to="/restaurant/checkorder" style={{ position: "relative" }}>
          <span className="badge">{pendingOrderData.length}</span>
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
            <AiOutlineFileText />
            <Typography>delivery</Typography>
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
              color: "#3B3B3B",
              fontSize: "26px",
            }}
          >
            <MdOutlineRestaurantMenu />
            <Typography>menu</Typography>
          </Box>
        </Link>
        {/* Message */}
        <Link to="">
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
        </Link>
        {/* Profile */}
        <Link to="/restaurant/profile">
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
            <BsFillPeopleFill />
            <Typography>profile</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default RestaurantBar;
