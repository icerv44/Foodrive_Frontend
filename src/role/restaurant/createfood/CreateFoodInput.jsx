import { Box } from "@mui/material";
import AddOrEditMenu from "../createcategory/AddOrEditMenu";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import ButtonWhite from "../../../components/button/ButtonWhite";
import { useRef } from "react";
import { useRestaurant } from "../../../contexts/RestaurantContext";

function CreateFoodInput() {
  const {
    foodImage,
    setFoodImage,
    foodName,
    setFoodName,
    foodDetail,
    setFoodDetail,
    foodPrice,
    setFoodPrice,
    foodCategory,
    setFoodCategory,
  } = useRestaurant();

  const inputFileRef = useRef(null);

  const handleCreateFood = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleCreateFood}>
      <input
        ref={inputFileRef}
        onChange={(e) => setFoodImage(e.target.files[0])}
        className="hidden"
        type="file"
        placeholder="Name"
      />
      <AddOrEditMenu
        onClick={() => inputFileRef.current.click()}
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
            value={foodName}
            onChange={(e) => {
              setFoodName(e.target.value);
            }}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
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
            value={foodDetail}
            onChange={(e) => setFoodDetail(e.target.value)}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
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
            value={foodPrice}
            onChange={(e) => setFoodPrice(e.target.value)}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
        {/* Tag */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Category*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            value={foodCategory}
            onChange={(e) => setFoodCategory(e.target.value)}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
      </Box>
      <Box className="flex flex-col gap-4">
        <ButtonWhite title="Create Option" px="103px" />
        <ButtonGreenGradiant type="submit" title="Create Food" px="112px" />
      </Box>
    </form>
  );
}

export default CreateFoodInput;
