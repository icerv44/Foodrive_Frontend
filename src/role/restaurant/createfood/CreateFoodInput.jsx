import { Box } from "@mui/material";
import AddOrEditMenu from "../createcategory/AddOrEditMenu";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import ButtonWhite from "../../../components/button/ButtonWhite";
import { Button } from "@mui/joy";

function CreateFoodInput() {
  return (
    <form>
      <AddOrEditMenu
        title="Add Food Picture"
        subTitle="max-size: 2mb file: JPG,PNG"
      />
      <Box className="flex flex-col justify-center my-6">
        {/* Foodname */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Foodname*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            type="text"
            className="rounded-xl w-full py-2 border border-teal-200"
          />
        </Box>
        {/* Detail */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Detail</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            type="text"
            className="rounded-xl w-full py-2 border border-teal-200"
          />
        </Box>
        {/* Price */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Price*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            type="text"
            className="rounded-xl w-full py-2 border border-teal-200"
          />
        </Box>
        {/* Tag */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Tag*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            type="text"
            className="rounded-xl w-full py-2 border border-teal-200"
          />
        </Box>
      </Box>
      <Box>
        <ButtonGreenGradiant title="Create Food" px="112px" />
      </Box>
    </form>
  );
}

export default CreateFoodInput;
