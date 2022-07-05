import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import { useRestaurant } from "../../contexts/RestaurantContext";
import CreateOptionInput from "../../role/restaurant/createfoodoption/CreateOptionInput";

function CreateFoodOption() {
  const navigate = useNavigate();
  const {
    optionTitle,
    setOptionTitle,
    optionCart,
    setOptionCart,
    optionName,
    setOptionName,
    optionPrice,
    setOptionPrice,
    optionGroups,
    setOptionGroups,
  } = useRestaurant();

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
      <CreateOptionInput
        optionTitle={optionTitle}
        setOptionTitle={setOptionTitle}
        optionCart={optionCart}
        setOptionCart={setOptionCart}
        optionName={optionName}
        setOptionName={setOptionName}
        optionPrice={optionPrice}
        setOptionPrice={setOptionPrice}
        optionGroups={optionGroups}
        setOptionGroups={setOptionGroups}
      />
    </Box>
  );
}

export default CreateFoodOption;
