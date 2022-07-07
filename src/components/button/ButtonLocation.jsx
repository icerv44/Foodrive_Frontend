import IconButton from "@mui/joy/IconButton";
import { TiLocation } from "react-icons/ti";

function ButtonLocation({ onClick }) {
  return (
    <IconButton
      onClick={() => {
        onClick();
      }}
      sx={{ bgcolor: "#f9a94d22", p: "6px" }}
    >
      <TiLocation className="text-green text-3xl" />
    </IconButton>
  );
}

export default ButtonLocation;
