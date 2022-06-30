import { AspectRatio } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import React from "react";
import { Link } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";

function CardCartRes() {
  const { carts } = useCustomer();

  return (
    <Card
      variant="outlined"
      row
      sx={{
        maxWidth: "300px",
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?crop=entropy&auto=format&fit=crop&w=3387"
          alt=""
        />
      </AspectRatio>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            Yosemite Park
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            detail
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            Cool weather all day long
          </Chip>
        </Box>
      </Box>
    </Card>
  );
}

export default CardCartRes;
