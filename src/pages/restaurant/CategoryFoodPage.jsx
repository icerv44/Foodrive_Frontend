import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FoodStatusList from "../../role/restaurant/categoryfoodlist/FoodStatusList";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import { Button } from "@mui/joy";
import axios from "../../config/axios";
import Modal from "react-modal";
import NoFoodForNow from "../../role/restaurant/categoryfoodlist/NoFoodForNow";
import { useRestaurant } from "../../contexts/RestaurantContext";
import { RiDeleteBin6Line } from "react-icons/ri";

function CategoryFoodPage() {
  const [categoryFoodData, setCategoryFoodData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleDeleteCategory } = useRestaurant();

  Modal.setAppElement("#root");

  const fetchCategoryById = async () => {
    try {
      const res = await axios.get("restaurant/getCategory/" + id);
      setCategoryFoodData(res.data.category);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategoryById();
  }, []);

  return (
    <>
      <ButtonBackNewPlus onClick={() => navigate("/restaurant/category")} />{" "}
      <Box className="absolute top-9 right-11 bg-[#e60000] text-white p-2 text-xl rounded-lg text-center">
        <RiDeleteBin6Line />
      </Box>
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
            {categoryFoodData?.name}
          </Typography>
        </Box>
      </Box>
      {/* MAP CARD */}
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
          height: "76vh",
          overflowY: "scroll",
        }}
      >
        {categoryFoodData.Menus?.length === 0 ? (
          <NoFoodForNow />
        ) : (
          categoryFoodData?.Menus?.map((el) => (
            <FoodStatusList
              key={el?.id}
              title={el?.name}
              price={el?.price}
              src={el?.menuImage}
              id={el?.id}
              fetch={fetchCategoryById}
            />
          ))
        )}
      </Box>
      <Box className="mx-auto px-4">
        <Button
          onClick={() => navigate("/restaurant/food")}
          sx={{
            bgcolor: "#37C989",
            width: "100%",
            py: "16px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Add more Food
        </Button>
      </Box>
    </>
  );
}

export default CategoryFoodPage;
