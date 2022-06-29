import { MdHomeFilled, MdAccountCircle } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { Box, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const customerFooterBar = [
  {
    to: "",
  },
];

export default function Footer() {
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
        <Link to={"/customer"}>
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
            <MdHomeFilled />
            <Typography>home</Typography>
          </Box>
        </Link>

        <Link to="/customer/profile">
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
            <MdAccountCircle />
            <Typography>account</Typography>
          </Box>
        </Link>

        <Link to="/customer/cart">
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
            <BsFillCartDashFill />
            <Typography>cart</Typography>
          </Box>
        </Link>

        <Link to="/customer/chat">
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
            <AiFillMessage />
            <Typography>message</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
