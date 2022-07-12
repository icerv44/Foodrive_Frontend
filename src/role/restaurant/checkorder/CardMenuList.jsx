// function CardMenuList({ src, name, price }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <div className="flex justify-between px-2 font-semibold text-xl">
//         <div>{name}</div>
//         <div>{price.toFixed(2)} ฿</div>
//       </div>
//       <div className="h-60 w-60 mx-auto">
//         <img src={src} className="h-full w-full object-cover" alt="" />
//       </div>
//     </div>
//   );
// }

// export default CardMenuList;

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function CardMenuList({ src, name, price }) {
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
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {name}
        </Typography>
        <Typography level="body2">{price?.toFixed(2)} ฿</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "xs2",
          fontWeight: "xl2",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
  );
}
