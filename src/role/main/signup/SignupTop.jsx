import { Box, Typography } from "@mui/material";

function SignupTop() {
  return (
    <>
      <Box className="pt-[27px]">
        <img
          className="h-[140px] w-full text-center"
          src="https://assets.grab.com/wp-content/uploads/sites/10/2021/04/15154415/Grab_Logo_2021.jpg"
          alt=""
        />
      </Box>
      <Box className="flex flex-col justify-center items-center">
        <Typography className="text-green-400" sx={{ fontSize: "40px" }}>
          MyFood
        </Typography>
        <Typography className="pb-[60px]">Delivery Favorite Food</Typography>
      </Box>
    </>
  );
}

export default SignupTop;
