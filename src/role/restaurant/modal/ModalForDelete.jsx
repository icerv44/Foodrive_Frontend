import { useState } from "react";
import Modal from "react-modal";
import { MdDeleteForever } from "react-icons/md";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function ModalForDelete({ ref, itemName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BUTTON FOR OPEN */}
      <button
        className="bg-[#f9a94d22] p-2 rounded-xl border border-red-700"
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        <MdDeleteForever className="font-semibold text-red-700 text-2xl" />
      </button>
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "26vh",
            top: "33%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {/* MODAL CONTENT */}
        <div>
          <div className="px-2 text-2xl font-bold mb-4">Delete {itemName}</div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
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
              <button className="bg-[#DA6317] text-white rounded-xl p-3 w-full">
                Delete
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalForDelete;
