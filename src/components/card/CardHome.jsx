import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

function CardHome({ Name, Time, Distance }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          // fontFamily: "IBM Plex Sans Thai, sans-serif",
          fontFamily: "Chakra Petch, sans-serif",
        }}
      >
        {Name}
      </Typography>
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
            // height="97"
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
              {Name}
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
              {Time} นาที {Distance} กม.
            </Typography>
          </CardContent>
        </Card> */}
    </>
  );
}

export default CardHome;
