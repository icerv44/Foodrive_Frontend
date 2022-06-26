import { Typography } from "@mui/material";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";

function SignupBot() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <ButtonGreenGradiant title="Create Account" />
      </div>
      <Typography
        sx={{ marginTop: "20px" }}
        className="text-center underline text-green"
      >
        already have an account?
      </Typography>
    </>
  );
}

export default SignupBot;
