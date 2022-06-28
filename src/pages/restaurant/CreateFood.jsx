import { Box, Typography } from "@mui/material";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CreateFoodInput from "../../role/restaurant/createfood/CreateFoodInput";

function CreateFood() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        px: "24px",
        pt: "30px",
      }}
    >
      <Box>
        <ButtonBackNew />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>
        Menulist
      </Typography>
      {/* Form */}
      <CreateFoodInput />
    </Box>
  );
}

export default CreateFood;
