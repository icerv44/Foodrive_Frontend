function InputLogin({ placeholder, onChange, value, type }) {
  return (
    <>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[325px] h-[57px] px-[25px] border border-[#F4F4F4
        ] rounded text-[#3B3B3B]"
      />
    </>
  );
}

export default InputLogin;
