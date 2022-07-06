import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import Modal from "react-modal";
import ModalForCreateFoodOption from "../modal/ModalForCreateFoodOption";
import OptionalFood from "./OptionalFood";

function CreateOptionInput({
  optionTitle,
  setOptionTitle,
  optionCart,
  setOptionCart,
  optionName,
  setOptionName,
  optionPrice,
  setOptionPrice,
  optionGroups,
  setOptionGroups,
}) {
  Modal.setAppElement("#root");

  const handleDeleteOption = (idx) => {
    let cloneOptionCart = [...optionCart];
    cloneOptionCart.splice(idx, 1);
    setOptionCart(cloneOptionCart);
  };

  const formatOptinCart = (optionCart) => {
    let cloneOptionCart = [...optionCart];
    let optionCartFormatted = [];
    cloneOptionCart.forEach((option) => {
      optionCartFormatted.push({
        name: option.optionName,
        price: option.optionPrice,
      });
    });
    return optionCartFormatted;
  };

  const handleSubmitCreateOption = (e) => {
    e.preventDefault();
    let optionCartFormatted = formatOptinCart(optionCart);
    const newOptionGroup = {
      name: optionTitle,
      menuOptions: optionCartFormatted,
    };
    setOptionGroups((prevState) => [...prevState, newOptionGroup]);
    setOptionTitle("");
    setOptionCart([]);
    setOptionName("");
    setOptionPrice("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* OptionName */}
      <Box>
        <Box className="text-[#3B3B3B] opacity-[0.3] m-2">Option name*</Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            mb: "16px",
          }}
        >
          <input
            value={optionTitle}
            onChange={(e) => setOptionTitle(e.target.value)}
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
      </Box>
      {/* More Option */}
      <Box>
        <Box className="opacity-[0.7] text-xl font-semibold m-2">Optional</Box>
        <Box>
          <ModalForCreateFoodOption
            optionCart={optionCart}
            setOptionCart={setOptionCart}
            optionName={optionName}
            setOptionName={setOptionName}
            optionPrice={optionPrice}
            setOptionPrice={setOptionPrice}
          />
        </Box>
        <Box sx={{ height: "50vh" }}>
          <Box
            sx={{
              borderColor: "1px solid #F4F4F4",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              borderRadius: "16px",
              p: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              my: "16px",
            }}
          >
            {optionCart.map((el, idx) => (
              <OptionalFood
                key={idx}
                optionName={el.optionName}
                optionPrice={el.optionPrice}
                index={idx}
                onDelete={handleDeleteOption}
              />
            ))}
          </Box>
        </Box>
        <Button
          color="success"
          sx={{ width: "100%" }}
          onClick={handleSubmitCreateOption}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default CreateOptionInput;
