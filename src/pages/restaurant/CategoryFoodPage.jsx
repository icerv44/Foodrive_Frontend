import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ModalForDelete from "../../role/restaurant/modal/ModalForDelete";
import FoodStatusList from "../../role/restaurant/categoryfoodlist/FoodStatusList";
import { Button } from "@mui/joy";

function CategoryFoodPage() {
  const navigate = useNavigate();

  return (
    <>
      <ButtonBackNewPlus onClick={() => navigate("/restaurant/category")} />{" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          pt: "24px",
          px: "30px",
        }}
      >
        {/* categoryName */}
        <Box className="flex justify-between items-center">
          <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>
            KFC Chicken
          </Typography>
          <ModalForDelete />
        </Box>
      </Box>
      {/* Picture */}
      {/* https://thestandard.co/wp-content/uploads/2022/01/KFC.jpg */}
      <Box className="w-full overflow-hidden mx-auto my-6">
        <img
          //   onClick={onPictureClick}
          src="https://thestandard.co/wp-content/uploads/2022/01/KFC.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </Box>
      {/* foodList */}
      <Box
        sx={{
          mx: "20px",
          borderColor: "1px solid #F4F4F4",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          borderRadius: "16px",
          p: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <FoodStatusList title="Chicken" price="50.00" />
        <FoodStatusList title="Chicken" price="50.00" />
        <FoodStatusList title="Chicken" price="50.00" />
        <FoodStatusList title="Chicken" price="50.00" />
        <FoodStatusList title="Chicken" price="50.00" />
      </Box>
      <Box className="mt-5 flex justify-center items-center px-4">
        <Button sx={{ bgcolor: "#37C989", width: "100%", py: "16px" }}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default CategoryFoodPage;
