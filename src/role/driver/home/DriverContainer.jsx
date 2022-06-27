import { Box } from "@mui/material";
import React from "react";
import OfflineOnline from "../../../components/ui/OfflineOnline";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import DriverProfile from "./DriverProfile";

function DriverContainer() {
  return (
    <Box>
      <Card
        sx={{
          width: "320px",
          background: "#fafdff",
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <Box>
          <OfflineOnline />

          <DriverProfile />
        </Box>
      </Card>
    </Box>
  );
}

export default DriverContainer;
