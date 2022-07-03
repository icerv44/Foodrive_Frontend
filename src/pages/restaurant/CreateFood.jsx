import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CreateFoodInput from "../../role/restaurant/createfood/CreateFoodInput";

function CreateFood() {
  const navigate = useNavigate();

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
        <ButtonBackNew onClick={() => navigate("/restaurant/category")} />
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
