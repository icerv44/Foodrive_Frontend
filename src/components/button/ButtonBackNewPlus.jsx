import { BiChevronLeft } from "react-icons/bi";
import IconButton from "@mui/joy/IconButton";
import { Box } from "@mui/material";

function ButtonBackNewPlus({ onClick }) {
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
        <IconButton onClick={onClick} sx={{ bgcolor: "#f9a94d22" }}>
          <BiChevronLeft className="text-[#DA6317] text-3xl " />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ButtonBackNewPlus;
