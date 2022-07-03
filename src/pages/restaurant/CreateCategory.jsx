import { Box, Typography } from "@mui/material";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import AddOrEditMenu from "../../role/restaurant/createcategory/AddOrEditMenu";
import { useNavigate } from "react-router-dom";
import AddCategory from "../../role/restaurant/createcategory/AddCategory";
import { useState } from "react";
import CategoryList from "../../role/restaurant/createcategory/CategoryList";
import { useRestaurant } from "../../contexts/RestaurantContext";

function CreateCategory() {
  const { categoryData } = useRestaurant();

  const [category, setCategory] = useState("");
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
        <ButtonBackNew />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>
        Menulist
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "center",
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            py: "12px",
            color: "green",
          }}
        >
          Main Menu
        </Box>
      </Box>
      <Box>
        <AddOrEditMenu
          onClick={() => navigate("/restaurant/food")}
          title="Add Food"
          subTitle="add or edit food"
        />
        <AddCategory
          category={category}
          setCategory={setCategory}
          title="Add more Category"
          subTitle="add or edit category"
        />
      </Box>
      <Box
        sx={{
          borderColor: "1px solid #F4F4F4",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          borderRadius: "16px",
          p: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "scroll",
          maxHeight: "40vh",
        }}
      >
        {categoryData.map((el) => (
          <CategoryList key={el.id} categoryName={el.name} categoryId={el.id} />
        ))}
      </Box>
    </Box>
  );
}

export default CreateCategory;
