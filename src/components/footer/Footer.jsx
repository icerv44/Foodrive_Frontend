import { Box, Typography } from "@mui/material";
import { MdHomeFilled, MdAccountCircle } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: 355,
          height: 74,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 45px",
          borderRadius: "16px",
          backgroundColor: "pink",
        }}
      >
        <Box
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
        <Box
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
        <Box
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
        <Box
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
      </Box>
    </>
  );
}
