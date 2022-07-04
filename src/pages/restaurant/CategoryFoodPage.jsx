import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ModalForDelete from "../../role/restaurant/modal/ModalForDelete";
import FoodStatusList from "../../role/restaurant/categoryfoodlist/FoodStatusList";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import { Button } from "@mui/joy";
import axios from "../../config/axios";
import Modal from "react-modal";

function CategoryFoodPage() {
  const [categoryFoodData, setCategoryFoodData] = useState([]);
  const navigate = useNavigate();
  const categoryId = useParams();

  Modal.setAppElement("#root");

  console.log(categoryFoodData);

  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        const res = await axios.get("restaurant/getCategory/" + categoryId.id);
        setCategoryFoodData(res.data.category);
      } catch (err) {
        console.log(error);
      }
    };
    fetchCategoryById();
  }, []);

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
            {categoryFoodData.name === "other"
              ? "Other"
              : categoryFoodData.name}
          </Typography>
          {categoryFoodData.name === "other" ? "" : <ModalForDelete />}
        </Box>
      </Box>
      {/* Picture
      <Box className="w-full overflow-hidden mx-auto my-6">
        <img
          //   onClick={onPictureClick}
          src="https://thestandard.co/wp-content/uploads/2022/01/KFC.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </Box> */}
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
        {categoryFoodData.Menus?.map((el) => (
          <FoodStatusList title={el?.name} price={el?.price} />
        ))}
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
