import AspectRatio from "@mui/joy/AspectRatio";
import { Box, Chip, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import React from "react";
import { Link } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";

function CardCartRes({ image, name, id }) {
  return (
    <Card
      variant="outlined"
      row="true"
      sx={{
        maxWidth: "300px",
        gap: 2,
        boxShadow: "0 3px 10px rgba(90, 108, 234, 0.1)",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={image} alt={name} />
      </AspectRatio>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            {name}
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
