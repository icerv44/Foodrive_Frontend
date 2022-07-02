import { Box } from "@mui/material";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";

function CheckDeliveryOrder() {
  return (
    <>
      <ButtonBackNewPlus />
      <Box className="px-5 mt-5">
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "50%",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              borderRadius: "20px",
              fontWeight: 600,
            }}
          >
            Delivery
          </Box>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexBasis: "50%",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              borderRadius: "20px",
              fontWeight: 600,
            }}
          >
            Order History
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CheckDeliveryOrder;
