import Button from "@mui/material/Button";

function ButtonHome({ title, marginTop, marginBottom, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        background:
          "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        color: "white",
        height: "57px",
        width: "200px",
        borderRadius: "15px",
        marginTop: { marginTop },
        marginBottom: { marginBottom },
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonHome;
