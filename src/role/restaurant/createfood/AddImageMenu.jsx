import IconButton from "@mui/joy/IconButton";
import { Box, Typography } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";

function AddImageMenu({ icon, title, subTitle, onClick, onDelete }) {
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
          onClick={onClick}
          sx={{
            bgcolor: "#f9a94d22",
            color: "green",
            maxWidth: "40px",
            maxHeight: "40px",
            fontSize: "24px",
          }}
        >
          {icon}
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          {title}
        </Typography>
        <Typography sx={{ color: "grey" }}>{subTitle}</Typography>
      </Box>
      <Box onClick={onDelete} className="text-2xl text-[#c85c5c]">
        <MdDeleteForever />
      </Box>
    </Box>
  );
}

export default AddImageMenu;
