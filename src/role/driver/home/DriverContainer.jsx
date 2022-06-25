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
    <Box className="flex justify-center items-end">
      {/* <Box className="fixed bottom-0  width-[375px] m-[auto] insert-x-0 "> */}
      <Box className="fixed bottom-5">
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
    </Box>
  );
}

export default DriverContainer;
