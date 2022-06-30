import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import ButtonGreenGradient from "../../../components/button/ButtonGreenGradiant";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function ModalForCreateFoodOption({ ref }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          border: "1px solid #F4F4F4",
          borderRadius: "15px",
          padding: "12px",
          color: "#37C989",
        }}
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        Add mini option
      </div>
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
                  type="text"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonGreenGradient title="Create Category" px="58px" />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalForCreateFoodOption;
