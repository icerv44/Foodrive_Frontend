import { Box, Typography } from "@mui/material";
import InputLogin from "../input/InputLogin";

function LoginMid() {
  return (
    <>
      <div className="text-center pb-[60px] text-[25px] font-bold">
        Sign In Your Account
      </div>
      <Box className="flex flex-col gap-3">
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Password" />
      </Box>
      <Typography className="text-center py-5">Or Continue With</Typography>
    </>
  );
}

export default LoginMid;
