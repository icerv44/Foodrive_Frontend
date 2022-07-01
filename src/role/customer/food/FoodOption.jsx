import { Checkbox, RadioGroup } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useCustomer } from "../../../contexts/CustomerContext";

function FoodOption({ name, MenuOptions, onChange, parentid }) {
  return (
    <Box>
      <Box className="flex justify-between items-center my-3">
        <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
          {name}
        </Typography>
        <AiOutlineCheck className="rounded-full bg-green p-1 text-white font-bold text-xl" />
      </Box>
      <Box className="flex flex-col gap-2">
        {MenuOptions?.map((el, i) => (
          <Box
            className="flex justify-between items-center"
            sx={{ fontWeight: 400 }}
            key={el?.id}
          >
            <Box className="flex gap-3">
              <input
                defaultChecked={i === 0}
                type="radio"
                id={el?.name}
                name={name}
                parentid={parentid}
                value={el?.id}
                onChange={(e) => onChange(e, parentid)}
              />
              <label htmlFor={el?.name}>{el?.name}</label>
            </Box>
            <Typography>+{el?.price} ฿</Typography>
          </Box>
        ))}
        {/* {MenuOptions?.map((el, i) => (
          <Box
            className="flex justify-between items-center"
            sx={{ fontWeight: 400 }}
            key={el?.id}
          >
            <Checkbox
              label={el?.name}
              value={el?.name}
              checked={foodOption[i]}
              onChange={onChange}
            />
            <Typography>+{el?.price} ฿</Typography>
          </Box>
        ))} */}
      </Box>
    </Box>
  );
}

export default FoodOption;
