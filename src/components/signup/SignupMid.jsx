import { Box, Typography } from "@mui/material";
import InputLogin from "../input/InputLogin";
function SignupMid() {
  return (
    <>
      <Typography className="text-center pb-[60px]">
        <div className="text-[25px] font-bold">Sign Up For Free</div>
      </Typography>
      <Box className="flex flex-col gap-3">
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Password" />
        <InputLogin placeholder="Confirm Password" />
      </Box>
    </>
  );
}

export default SignupMid;
