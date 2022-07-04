import Modal from "react-modal";

// Modal.setAppElement("#ใส่ไอดีของโมดัลอันนี้ในหน้าที่เอาไปใช้");
// Import Modal ไปในไฟล์ที่จะใช้ด้วย

function Modal({ title, children, ...props }) {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>{title}</button>
      <Modal
        {...props}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {children}
      </Modal>
    </>
  );
}

export default Modal;
