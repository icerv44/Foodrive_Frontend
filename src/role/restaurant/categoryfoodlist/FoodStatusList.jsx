import { useEffect, useRef, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import ModalForCardFood from "../modal/ModalForCardFood";
import Modal from "react-modal";
import { Box } from "@mui/joy";
import axios from "axios";
import Spinner from "../../../components/ui/Spinner";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import ImageBox from "./ImageBox";
import { AiOutlineClose } from "react-icons/ai";
import { useRestaurant } from "../../../contexts/RestaurantContext";
import { useError } from "../../../contexts/ErrorContext";
import { useSuccess } from "../../../contexts/SuccessContext";

export default function FoodStatusList({
  src,
  title,
  price,
  id,
  fetch,
  isLoading,
  setIsLoading,
}) {
  const { foodName, setFoodName, foodPrice, setFoodPrice } = useRestaurant();
  const { setError } = useError();
  const { setSuccess } = useSuccess();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPic, setIsOpenPic] = useState(false);
  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  const handleUpdateFood = async () => {
    try {
      const res = await axios.patch("/restaurant/update/menu", {
        menuId: id,
        name: foodName,
        price: foodPrice,
      });
      setSuccess(res.data.message);
      fetch();
      setIsOpen(false);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleUpdateFoodPicture = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      formData.append("menuId", id);
      const res = await axios.patch("/restaurant/update/picture", formData);
      fetch();
      setImage("");
      setSuccess(res.data.message);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsOpenPic(false);
      fetch();
      setIsLoading(false);
    }
  };

  let netPrice = price;

  useEffect(() => {
    setFoodName(title);
    setFoodPrice(netPrice);
  }, []);

  const disbleEdit = foodName === "" || foodPrice === "";

  Modal.setAppElement("#root");

  return (
    <>
      {isLoading && <Spinner />}
      <Card
        row
        variant="outlined"
        sx={{
          minWidth: "260px",
          gap: 2,
          bgcolor: "background.body",
        }}
      >
        <CardOverflow onClick={() => setIsOpenPic(true)}>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={src} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Box onClick={() => setIsOpen(true)}>
          <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
            {title}
          </Typography>
          <Typography level="body2">{netPrice.toFixed(2)} ฿</Typography>
        </Box>
        <Box className="ml-auto">
          <ModalForCardFood fetch={fetch} title={title} id={id} />
        </Box>
      </Card>
      {/* Edit Picture */}
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "46vh",
            top: "26%",
          },
        }}
        id="root"
        isOpen={isOpenPic}
        onRequestClose={() => setIsOpenPic(false)}
      >
        <input
          ref={imageRef}
          className="hidden"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <AiOutlineClose
          onClick={() => setImage("")}
          className="absolute right-2 top-2 text-xl"
        />
        <div
          onClick={() => imageRef.current.click()}
          className="border flex justify-center h-60 w-60 mx-auto rounded-2xl mt-2"
        >
          {image ? (
            <img
              className="w-full h-full object-cover"
              src={URL.createObjectURL(image)}
              alt=""
            />
          ) : (
            <ImageBox />
          )}
        </div>
        <div className="flex flex-col justify-center px-2 mt-6">
          <ButtonGreenGradiant
            onClick={handleUpdateFoodPicture}
            disabled={image ? false : true}
            title="Submit"
          />
        </div>
      </Modal>
      {/* Edit Name - Price */}
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "40vh",
            top: "26%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <AiOutlineClose
          onClick={() => {
            setFoodName("");
            setFoodPrice("");
          }}
          className="absolute right-2 top-2 text-xl"
        />
        <div className="text-center text-2xl font-bold">Edit Food</div>
        {/* FoodName */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Foodname*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
        {/* Price */}
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Detail</Box>
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
        <Box className="w-full flex justify-center items-center pt-1">
          <ButtonGreenGradiant
            onClick={handleUpdateFood}
            disabled={disbleEdit ? true : false}
            title="Submit"
            px="95px"
          />
        </Box>
      </Modal>
    </>
  );
}
