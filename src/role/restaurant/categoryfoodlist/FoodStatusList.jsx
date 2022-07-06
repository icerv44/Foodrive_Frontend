import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import ModalForCardFood from "../modal/ModalForCardFood";
import Modal from "react-modal";
import { Box } from "@mui/joy";

export default function FoodStatusList({ src, title, price, id, fetch }) {
  let netPrice = price;

  Modal.setAppElement("#root");

  return (
    <Card
      row
      variant="outlined"
      sx={{
        minWidth: "260px",
        gap: 2,
        bgcolor: "background.body",
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img src={src} alt="" />
        </AspectRatio>
      </CardOverflow>
      <Box>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {title}
        </Typography>
        <Typography level="body2">{netPrice.toFixed(2)} ฿</Typography>
      </Box>
      <Box className="ml-auto">
        <ModalForCardFood fetch={fetch} title={title} id={id} />
      </Box>
    </Card>
  );
}
