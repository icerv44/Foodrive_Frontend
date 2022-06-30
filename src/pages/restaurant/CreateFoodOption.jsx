import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CreateFoodInput from "../../role/restaurant/createfood/CreateFoodInput";
import CreateOptionInput from "../../role/restaurant/createfoodoption/CreateOptionInput";

function CreateFoodOption() {
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
        <ButtonBackNew onClick={() => navigate("/restaurant/food")} />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>
        Create Option
      </Typography>
      {/* Form */}
      <CreateOptionInput />
    </Box>
  );
}

export default CreateFoodOption;
