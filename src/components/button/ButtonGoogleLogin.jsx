import * as React from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";

function ButtonGoogleLogin() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<FcGoogle />}
        sx={{
          color: "black",
          border: "1px solid #F4F4F4",
          boxShadow: "12px 26px 50px 0px #5A6CEA12",
          borderRadius: "15px",
          background: "white",
          height: "57px",
          width: "152px",
        }}
      >
        Delete
      </Button>
    </>
  );
}

export default ButtonGoogleLogin;
