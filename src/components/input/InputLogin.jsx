import { Box } from "@mui/joy";

function InputLogin({ placeholder, onChange, value, type, icon }) {
  return (
    <>
      <Box
        className="mx-5 mt-7  text-green flex p-3 border border-light-gray rounded-xl gap-5 "
        sx={{ boxShadow: "3px 10px 10px 5px rgba(218, 227, 226 , 0.4)" }}
      >
        <div className=" rounded-full w-8 h-8 flex items-center">{icon}</div>
        <input
          type={type || "text"}
          placeholder={placeholder}
          className="flex grsow appearance-none placeholder-black placeholder-opacity-25 outline-0 text-gray"
          value={value}
          onChange={onChange}
          list="search"
        />
      </Box>
    </>
  );
}

export default InputLogin;
