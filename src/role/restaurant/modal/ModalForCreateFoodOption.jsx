import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import ButtonGreenGradient from "../../../components/button/ButtonGreenGradiant";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function ModalForCreateFoodOption({
  optionCart,
  setOptionCart,
  optionName,
  setOptionName,
  optionPrice,
  setOptionPrice,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [errName, setErrName] = useState("");
  const [errPrice, setErrPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionName?.trim() === "") {
      setErrName("Option name is required");
    } else if (optionPrice?.trim() === "") {
      setErrPrice("Option price is required");
    } else {
      optionCart.push({
        optionName,
        optionPrice,
      });
      setOptionCart(optionCart);
      setOptionName("");
      setOptionPrice("");
      setErrName("");
      setErrPrice("");
      setIsOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setErrName("");
    setErrPrice("");
    setOptionName("");
    setOptionPrice("");
  };

  return (
    <>
      {/* BUTTON */}
      <div
        style={{
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          border: "1px solid #F4F4F4",
          borderRadius: "15px",
          padding: "12px",
          color: "#37C989",
          fontWeight: 700,
          fontSize: "18px",
        }}
        onClick={() => setIsOpen(true)}
      >
        Add more optional
      </div>
      {/* CONTENT */}
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "43vh",
            top: "27%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <div className="absolute right-2 top-2">
            <button onClick={handleCloseModal}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="text-center text-2xl font-bold mb-4">Add Option</div>
          {/* Input */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {/* INPUT 1 */}
            <div>
              <div className="text-[#3B3B3B] opacity-[0.3] m-2">
                Option Name
              </div>
              <div>
                <input
                  placeholder={errName ? errName : ""}
                  value={optionName}
                  onChange={(e) => setOptionName(e.target.value)}
                  type="text"
                  className="shadow-lg shadow-blue-200 rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </div>
            </div>
            {/* INPUT 2 */}
            <div>
              <div className="text-[#3B3B3B] opacity-[0.3] m-2">Price</div>
              <div>
                <input
                  placeholder={errPrice ? errPrice : ""}
                  value={optionPrice}
                  onChange={(e) => setOptionPrice(e.target.value)}
                  type="number"
                  className="shadow-lg shadow-blue-200 rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="flex justify-center mt-5">
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

export default ModalForCreateFoodOption;
