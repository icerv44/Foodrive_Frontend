import { Button } from "@mui/joy";

function ButtonWhite({ title, px, width, onClick, disabled = false }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        height: "57px",
        borderRadius: "15px",
        color: "#15BE77",
        background: "white",
        fontSize: "18px",
        fontWeight: "700",
        px: `${px}`,
        width: `${width}`,
        ":hover": {
          background: "#E0E0E0",
        },
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonWhite;
