import * as React from "react";
import { Button } from "@mui/joy";
import Typography from "@mui/material/Typography";
function ButtonLogin({ height, width, borderRadius, background, color, text }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "57px",
          width: "141px",
          borderRadius: "15px",
          background:
            "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
          color: "white",
        }}
        sx={{
          height,
          width,
          borderRadius,
          background,
          color,
        }}
      >
        <Typography
          variant="button"
          display="block"
          gutterBottom
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  );
}

export default ButtonLogin;
