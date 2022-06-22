import * as React from "react";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ButtonCreateAccount() {
  return (
    <>
      <Button
        //   className={calsses.root}
        variant="contained"
        sx={{
          background:
            "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
          color: "white",
          height: "57px",
          width: "175px",
          borderRadius: "15px",
        }}
      >
        Create Account
      </Button>
    </>
  );
}

export default ButtonCreateAccount;
