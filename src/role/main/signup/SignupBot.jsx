import { Typography } from "@mui/material";
import ButtonHome from "../../../components/button/ButtonHome";

function SignupBot() {
  return (
    <>
      <div className="flex justify-center items-center">
        <ButtonHome
          marginTop="85px"
          marginBottom="20px"
          title="Create Account"
        />
      </div>
      <Typography className="text-center underline text-green-500">
        already have an account?
      </Typography>
    </>
  );
}

export default SignupBot;
