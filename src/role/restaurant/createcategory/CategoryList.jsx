import { Box, Typography } from "@mui/material";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { useRestaurant } from "../../../contexts/RestaurantContext";
import { useNavigate } from "react-router-dom";

function CategoryList({ categoryName, categoryId }) {
  const { handleDeleteCategory } = useRestaurant();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{categoryName}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {categoryName === "other" ? (
          ""
        ) : (
          <IoTrashBin onClick={() => handleDeleteCategory(categoryId)} />
        )}
        <MdOutlineNavigateNext
          onClick={() => navigate("/restaurant/category/" + categoryId)}
        />
      </Box>
    </Box>
  );
}

export default CategoryList;
