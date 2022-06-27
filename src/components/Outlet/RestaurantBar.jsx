import { Box, Typography } from "@mui/joy";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillChatDotsFill, BsCartDashFill } from "react-icons/bs";

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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 45px",
          borderRadius: "22px",
          mx: "auto",
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
          zIndex: 20,
        }}
      >
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
          <BsCartDashFill />
          <Typography>order</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RestaurantBar;
