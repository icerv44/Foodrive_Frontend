import { Box, Typography } from "@mui/material";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { useRestaurant } from "../../../contexts/RestaurantContext";

function CategoryList({ categoryName, categoryId }) {
  const { handleDeleteCategory } = useRestaurant();

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
        <IoTrashBin onClick={() => handleDeleteCategory(categoryId)} />
        <MdOutlineNavigateNext />
      </Box>
    </Box>
  );
}

export default CategoryList;
