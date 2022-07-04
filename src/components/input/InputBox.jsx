import { Box } from "@mui/material";

function InputBox({ title, value, onChange, placeholder }) {
  return (
    <>
      <Box
        sx={{
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        }}
      >
        <label className="text-gray">{title}</label>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
          className="rounded-xl w-full py-2 px-3 border border-teal-200"
        />
      </Box>
    </>
  );
}

export default InputBox;
