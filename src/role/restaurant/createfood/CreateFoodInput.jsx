import { Box } from "@mui/material";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import ButtonWhite from "../../../components/button/ButtonWhite";
import { useRef } from "react";
import { useRestaurant } from "../../../contexts/RestaurantContext";
import { useNavigate } from "react-router-dom";
import AddImageMenu from "./AddImageMenu";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoImageSharp } from "react-icons/io5";
import axios from "axios";
import { useSelector } from "react-redux";

function CreateFoodInput() {
  const navigate = useNavigate();

  const { id } = useSelector((state) => state.user.info);

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
    categoryData,
    optionGroups,
    setOptionGroups,
  } = useRestaurant();

  const inputFileRef = useRef(null);

  const handleCreateFood = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("menuImage", foodImage);
      formData.append("name", foodName);
      formData.append("price", foodPrice);
      formData.append("description", foodDetail);
      formData.append("menuOptionGroups", JSON.stringify(optionGroups));
      formData.append("categoryId", foodCategory);
      const res = await axios.post("/restaurant/" + id + "/addMenu", formData);
      setOptionGroups([]);
      setFoodImage("");
      setFoodName("");
      setFoodDetail("");
      setFoodPrice("");
    } catch (err) {
      console.log(err);
    }
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
            className="my-select-menu rounded-xl w-full py-2 px-3 border border-teal-200"
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
        <ButtonGreenGradiant type="submit" title="Create Food" px="112px" />
      </Box>
    </form>
  );
}

export default CreateFoodInput;
