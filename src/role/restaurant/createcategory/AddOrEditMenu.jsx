import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

function AddOrEditMenu({ title, subTitle, onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        borderRadius: "18px",
        p: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton
          onClick={onClick}
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
          {title}
        </Typography>
        <Typography sx={{ color: "grey" }}>{subTitle}</Typography>
      </Box>
    </Box>
  );
}

export default AddOrEditMenu;
