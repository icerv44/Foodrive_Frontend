import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

function AddOrEditMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        borderRadius: "18px",
        p: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton
          sx={{
            bgcolor: "#f9a94d22",
            color: "green",
          }}
        >
          <AiOutlinePlus className="font-semibold text-xl" />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          Add more Category
        </Typography>
        <Typography sx={{ color: "grey" }}>add or edit category</Typography>
      </Box>
    </Box>
  );
}

export default AddOrEditMenu;
