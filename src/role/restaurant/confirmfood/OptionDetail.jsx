import { Box } from "@mui/material";

function OptionDetail({ price, detail, category }) {
  return (
    <Box
      sx={{
        gap: "16px",
        borderRadius: "18px",
        p: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        alignItems: "center",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold mb-1">Price</div>
        <div className="text-lg">{price}.00 ฿</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold mb-1">Category</div>
        <div>{category}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold mb-1">Detail :</div>
        <div className="text-gray">{detail}</div>
      </div>
    </Box>
  );
}

export default OptionDetail;
