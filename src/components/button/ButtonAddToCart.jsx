import Button from "@mui/material/Button";

function ButtonAddToCart() {
  return (
    <Button
      variant="contained"
      sx={{
        background:
          "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        color: "white",
        height: "57px",
        width: "326px",
        borderRadius: "15px",
      }}
    >
      Add to Cart
    </Button>
  );
}

export default ButtonAddToCart;
