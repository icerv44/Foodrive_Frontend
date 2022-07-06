import { Box, Button, Typography } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import React from "react";
import { MdFastfood } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function DriverProfile() {
  const user = useSelector((state) => state.user.info);
  const navigate = useNavigate();

  return (
    <Box
      sx={{ background: "white", marginTop: "1rem" }}
      className="shadow-md shadow-blue-100 p-2 flex justify-between items-center"
    >
      <Link to={"/driver/profile"}>
        <Box className="flex gap-5 items-center">
          <AspectRatio ratio="1" sx={{ width: 50 }}>
            <img
              src={
                user.driverImage ||
                "https://images.unsplash.com/photo-1507833423370-a126b89d394b?crop=entropy&auto=format&fit=crop&w=3387"
              }
              alt=""
            />
          </AspectRatio>

          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            {user.firstName}
          </Typography>
        </Box>
      </Link>

      <Box>
        <Button
          onClick={() => navigate("/driver/orderRequest")}
          variant="plain"
          sx={{
            display: "flex",
            color: "#15BE77",
            paddingX: 1,
            gap: 1,
            "&:hover": { bgcolor: "#dcf5eb" },
          }}
        >
          <MdFastfood />
          <span
            fontSize="sm"
            color="#15BE77"
            aria-describedby="card-description"
          >
            ORDER
          </span>
        </Button>

        {/* TODO : route => chat */}
        <Button
          onClick={() => navigate("/driver/chat")}
          variant="plain"
          sx={{
            display: "flex",
            color: "#15BE77",
            paddingX: 1,
            gap: 1,
            "&:hover": { bgcolor: "#dcf5eb" },
          }}
        >
          <AiFillMessage />
          <span
            fontSize="sm"
            color="#15BE77"
            aria-describedby="card-description"
          >
            CHAT
          </span>
        </Button>
      </Box>
    </Box>
  );
}

export default DriverProfile;
