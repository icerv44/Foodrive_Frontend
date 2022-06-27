import { Button } from "@mui/joy";

function ButtonWhite({ title, px, width, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        height: "57px",
        borderRadius: "15px",
        color: "#15BE77",
        background: "white",
        fontSize: "18px",
        fontWeight: "700",
        px: `${px}`,
        width: `${width}`,
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonWhite;
