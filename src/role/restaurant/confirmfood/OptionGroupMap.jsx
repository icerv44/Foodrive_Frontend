import { Box } from "@mui/material";
import OptionList from "./OptionList";

function OptionGroupMap({ optionGroups, optionTitle }) {
  console.log(optionGroups);

  return (
    <Box
      sx={{
        gap: "16px",
        borderRadius: "18px",
        p: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        alignItems: "center",
      }}
    >
      <Box className="text-xl font-bold mb-1">{optionTitle}</Box>
      {optionGroups.menuOptions?.map((el, idx) => (
        <OptionList key={idx} optionName={el?.name} optionPrice={el?.price} />
      ))}
      {/* <OptionList /> */}
    </Box>
  );
}

export default OptionGroupMap;
