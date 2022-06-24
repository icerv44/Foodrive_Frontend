import { Box } from "@mui/material";
import InputLogin from "../../../components/input/InputLogin";

function SignupMid() {
  return (
    <>
      <div className="text-center pb-[60px] text-[25px] font-bold">
        Sign Up For Free
      </div>
      <Box className="flex flex-col gap-3">
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Password" />
        <InputLogin placeholder="Confirm Password" />
      </Box>
    </>
  );
}

export default SignupMid;
