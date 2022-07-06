import { Button } from "@mui/joy";

function ButtonGreenGradiant({ title, px, onClick, type }) {
  return (
    <Button
      type={type}
      onClick={onClick}
      sx={{
        height: "57px",
        borderRadius: "15px",
        background:
          "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        color: "white",
        fontSize: "18px",
        fontWeight: "700",
        boxShadow: "11px 28px 50px rgba(20, 78, 90, 0.2)",
        px: `${px}`,
        "&:hover": {
          background: "#15BE77",
        },
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonGreenGradiant;
