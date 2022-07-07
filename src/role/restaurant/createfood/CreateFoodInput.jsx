import { Box } from "@mui/material";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import ButtonWhite from "../../../components/button/ButtonWhite";
import { useRef } from "react";
import { useRestaurant } from "../../../contexts/RestaurantContext";
import { useNavigate } from "react-router-dom";
import AddImageMenu from "./AddImageMenu";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoImageSharp } from "react-icons/io5";

function CreateFoodInput() {
  const navigate = useNavigate();

  const {
    foodImage,
    setFoodImage,
    foodName,
    setFoodName,
    foodDetail,
    setFoodDetail,
    foodPrice,
    setFoodPrice,
    setFoodCategory,
    categoryData,
  } = useRestaurant();

  const disabledButton =
    foodName === "" ||
    foodDetail === "" ||
    foodPrice === "" ||
    foodImage === "";

  const inputFileRef = useRef(null);

  return (
    <form onSubmit={() => navigate("/restaurant/checkfoodoption")}>
      <input
        ref={inputFileRef}
        onChange={(e) => setFoodImage(e.target.files[0])}
        className="hidden"
        type="file"
        placeholder="Name"
      />
      <AddImageMenu
        onClick={() => inputFileRef.current.click()}
        title={foodImage ? "Image Ready!" : "Add some Food!"}
        subTitle="max-size: 2mb file: JPG,PNG"
        onDelete={() => setFoodImage("")}
        icon={foodImage ? <AiFillCheckCircle /> : <IoImageSharp />}
      />
      <Box className="flex flex-col justify-center my-6">
        {/*  CATEGORY MAP */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Category*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <select
            onChange={(e) => setFoodCategory(e.target.value)}
            className="flex flex-row-reverse rounded-xl w-full py-2 px-3 border border-teal-200"
          >
            {categoryData.map((el, idx) => (
              <option key={idx} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </Box>
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
            type="number"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
      </Box>
      {/* SUBMIT */}
      <Box className="flex flex-col gap-4">
        <ButtonWhite
          onClick={() => navigate("/restaurant/food/option")}
          title="Create Option"
          px="103px"
        />
        <ButtonGreenGradiant
          disabled={disabledButton ? true : false}
          type="submit"
          title="Check Food"
          px="112px"
        />
      </Box>
    </form>
  );
}

export default CreateFoodInput;
