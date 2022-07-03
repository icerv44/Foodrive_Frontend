function ButtonOnFocus({ title, onClick, isFocused = false }) {
  return (
    <button
      //   style={{ boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)" }}
      className={`basis-[50%] border rounded-2xl py-3 ${
        isFocused ? "text-[#37C989]" : "text-black"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonOnFocus;
