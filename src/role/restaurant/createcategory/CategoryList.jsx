import { Box, Typography } from "@mui/material";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CategoryList({ categoryName, categoryId }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/restaurant/category/" + categoryId)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{categoryName}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <MdOutlineNavigateNext />
      </Box>
    </Box>
  );
}

export default CategoryList;
