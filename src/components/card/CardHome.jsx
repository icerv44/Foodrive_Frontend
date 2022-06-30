import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import CardOverflow from "@mui/joy/CardOverflow";
import { useCustomer } from "../../contexts/CustomerContext";
import { Link, useNavigate } from "react-router-dom";

function CardHome({ el }) {
  // const { menus } = useCustomer();

  const cutLetter = (name = "", length) => {
    if (name.length > length) {
      const cutName = name.substring(0, length) + "...";
      return cutName;
    }
    return name;
  };

  return (
    <Link to={"/customer/menuDetail/" + el?.id}>
      <Box key={el?.name}>
        <Card
          row
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
              src={`${el?.menuImage}`}
              srcSet={`${el?.menuImage}`}
              alt={el?.name}
            />
          </AspectRatio>
          <CardOverflow>
            <Box>
              <Box sx={{ whiteSpace: "nowrap" }}>
                <Typography
                  fontWeight="md"
                  level="h2"
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
                  {cutLetter(el?.name, 10)}
                </Typography>

                <Typography
                  level="body2"
                  sx={{
                    fontSize: "10px",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  {cutLetter(el?.description, 18)}
                </Typography>
              </Box>
            </Box>
          </CardOverflow>
        </Card>
      </Box>
    </Link>
  );
}

export default CardHome;
