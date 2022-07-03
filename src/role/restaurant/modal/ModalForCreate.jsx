import { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import ButtonGreenGradient from "../../../components/button/ButtonGreenGradiant";
import axios from "../../../config/axios";
import { useError } from "../../../contexts/ErrorContext";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function ModalForCreate({ ref }) {
  const { setError } = useError();
  const [isOpen, setIsOpen] = useState(false);
  const [addCategory, setAddCategory] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/restaurant/addCategory", {
        name: addCategory,
      });
      setAddCategory("");
      setIsOpen(false);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
      <button className="" ref={ref} onClick={() => setIsOpen(true)}>
        <AiOutlinePlus className="font-semibold text-xl" />
      </button>
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "34vh",
            top: "29%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <div className="flex justify-end text-xl">
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="text-center text-2xl font-bold mb-4">
            Add Category
          </div>
          {/* Input */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <div className="text-[#3B3B3B] opacity-[0.3] m-2">
                Category Name
              </div>
              <div
                sx={{
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  mb: "16px",
                }}
              >
                <input
                  value={addCategory}
                  onChange={(e) => setAddCategory(e.target.value)}
                  type="text"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonGreenGradient
                type="submit"
                title="Create Category"
                px="58px"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalForCreate;
