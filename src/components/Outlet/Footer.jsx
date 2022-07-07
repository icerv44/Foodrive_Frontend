import { MdHomeFilled, MdAccountCircle } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { Box, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import CardContent from "@mui/joy/CardContent";
import Card from "@mui/joy/Card";

const customerFooterBar = [
  { title: "HOME", icon: <MdHomeFilled />, to: "/customer" },
  { title: "CART", icon: <BsFillCartDashFill />, to: "/customer/cart" },
  {
    title: "CHAT",
    icon: <AiFillMessage />,
    to: "/customer/chat",
  },
];

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
        bgcolor: "#ffffff",
        borderRadius: "10px",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: 355,
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 45px",
          borderRadius: "22px",
          mx: "auto",
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
          zIndex: 20,
        }}
      >
        {customerFooterBar?.map((el, idx) => (
          <Box key={idx}>
            <CardContent sx={{ zIndex: 100 }}>
              <Link to={el.to}>
                <Box
                  role="button"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3B3B3B",
                    fontSize: "26px",
                    "&:hover": {
                      color: "#15BE77",
                    },
                  }}
                >
                  {el.icon}
                  <Box
                    sx={{
                      my: "4px",
                      fontSize: "16px",
                      "&:hover": {
                        color: "#15BE77",
                      },
                    }}
                  >
                    {el.title}
                  </Box>
                </Box>
              </Link>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
