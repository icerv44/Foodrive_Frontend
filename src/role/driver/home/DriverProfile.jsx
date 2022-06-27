import { Box, Button, Chip, Link, Typography } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import React from "react";
import { FiBarChart2 } from "react-icons/fi";

function DriverProfile() {
  return (
    <Box
      sx={{ background: "white", marginTop: "1rem" }}
      className="shadow-md shadow-blue-100 p-2 flex justify-between"
    >
      <AspectRatio ratio="1" sx={{ width: 50 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?crop=entropy&auto=format&fit=crop&w=3387"
          alt=""
        />
      </AspectRatio>

      <div className="flex flex-col">
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Mr. Kemplas
        </Typography>
        <Typography
          fontSize="sm"
          aria-describedby="card-description"
          mb={1}
          sx={{ color: "text.tertiary" }}
        >
          รับส่งอาหาร
        </Typography>
      </div>

      <Link
        overlay
        underline="none"
        href="#interactive-card"
        sx={{ color: "text.tertiary" }}
      >
        <Button
          variant="plain"
          sx={{
            color: "#15BE77",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            paddingX: "1px",
          }}
        >
          <FiBarChart2 />
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            Revenue
          </Typography>
        </Button>
      </Link>
    </Box>
  );
}

export default DriverProfile;
