import { Box } from "@mui/material";
import Modal from "react-modal";
import ModalForCreateFoodOption from "../modal/ModalForCreateFoodOption";

function CreateOptionInput() {
  Modal.setAppElement("#root");

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
            type="text"
            className="rounded-xl w-full py-2 px-3 border border-teal-200"
          />
        </Box>
      </Box>
      {/* Option Detail */}
      <Box className="mb-4">
        <Box className="text-[#37C989] opacity-[0.7] text-xl font-semibold">
          Option detail
        </Box>
        <Box
          sx={{
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            border: "1px solid #F4F4F4",
            borderRadius: "15px",
            p: "12px",
          }}
        >
          <Box sx={{ fontSize: "13px" }}>
            Does the customer have to choose this option?
          </Box>
          <Box>1</Box>
          <Box>1</Box>
        </Box>
      </Box>
      {/* More Option */}
      <Box>
        <Box className="opacity-[0.7] text-xl font-semibold">Mini Option</Box>
        <Box>
          <ModalForCreateFoodOption />
        </Box>
      </Box>
    </form>
  );
}

export default CreateOptionInput;
