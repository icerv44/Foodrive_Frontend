import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import CardOverflow from "@mui/joy/CardOverflow";

function CardHome({ name, time, distance, item }) {
  return (
    <Box>
      <Card
        row
        key={item.title}
        variant="outlined"
        sx={{
          width: "147px",
          background: " #FFFFFF",
          boxShadow: "0 3px 10px rgba(90, 108, 234, 0.1)",
          borderRadius: "22px",
          height: "184px",
          gap: 2,
          "--Card-padding": (theme) => theme.spacing(2),
        }}
      >
        <AspectRatio
          ratio="1.5"
          sx={{
            borderRadius: "22px 22px 0px 0px",
          }}
        >
          <img
            src={`${item.src}?h=120&fit=crop&auto=format`}
            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
        </AspectRatio>
        <CardOverflow>
          <Box>
            <Box sx={{ whiteSpace: "nowrap" }}>
              <Typography
                fontWeight="md"
                level="h2"
                // gutterBottom
                // component="div"
                sx={{
                  width: "122px",
                  height: "13px",
                  mt: 2,
                  fontWeight: "700",
                  lineHeight: "13px",
                  textAlign: "left",
                  color: "#000000",
                  fontSize: "14x",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                level="body2"
                sx={{
                  fontSize: "10px",
                  mt: 1,
                  mb: 2,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        </CardOverflow>
      </Card>

      {/* <Card
        sx={{
          width: "147px",
          background: " #FFFFFF",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          borderRadius: "22px",
          height: "184px",
        }}
      >
        <CardMedia
          component="img"
          height="97"
          image="https://picsum.photos/200/300"
          alt="green iguana"
          sx={{
            borderRadius: "22px 22px 0px 0px",
            width: "147px",
            height: "97px",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{
              width: "122px",
              height: "13px",
              fontSize: "10px",
              fontWeight: "700",
              lineHeight: "13px",
              textAlign: "left",
              color: "#000000",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              width: "25px",
              height: "10px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "8px",
            }}
          >
            {time} นาที {distance} กม.
          </Typography>
        </CardContent>
      </Card> */}
    </Box>
  );
}

export default CardHome;
