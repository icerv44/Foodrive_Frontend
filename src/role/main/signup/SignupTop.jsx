import { Box } from "@mui/material";
import defaultLogo from "../../../assets/images/logoFD-04.png";

function SignupTop() {
  return (
    <>
      <Box>
        <img
          className="w-60 h-60 text-center mx-auto mt-6"
          src={defaultLogo}
          alt=""
        />
      </Box>
      <Box className="flex flex-col justify-center items-center mb-4">
        <Box className="absolute top-[27%] text-[#37C989]">
          Delivery Favorite Food
        </Box>
      </Box>
    </>
  );
}

export default SignupTop;
