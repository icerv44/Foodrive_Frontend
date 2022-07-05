import CardOverflow from "@mui/joy/CardOverflow";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function ModalForCardFood({ title, id, fetch }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteMenu = async () => {
    const res = await axios.delete("/restaurant/menu/" + id);
    setIsOpen(false);
    fetch();
  };

  return (
    <>
      <CardOverflow
        onClick={() => setIsOpen(true)}
        variant="solid"
        color="danger"
        sx={{
          px: 0.2,
          py: "21px",
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "xs2",
          fontWeight: "xl2",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        REMOVE
      </CardOverflow>
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "26vh",
            top: "32%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <div className="px-2 text-2xl font-bold mb-4">{title}</div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[#3B3B3B] opacity-[0.3] m-2">
                This item will be delete
              </div>
            </div>
            {/* Confirm Button */}
            <div className="flex items-center justify-around gap-4 font-bold">
              <button
                onClick={() => setIsOpen(false)}
                className="border rounded-xl p-3 w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteMenu}
                className="bg-[#DA6317] text-white rounded-xl p-3 w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalForCardFood;
