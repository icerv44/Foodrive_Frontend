import { Box, Typography } from "@mui/material";

function CategoryList({ categoryName }) {
  return (
    <Box
      sx={{
        width: "335px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "18px",
        px: "20px",
      }}
    >
      <Typography>{categoryName}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box></Box>
      </Box>
    </Box>
  );
}

export default CategoryList;
