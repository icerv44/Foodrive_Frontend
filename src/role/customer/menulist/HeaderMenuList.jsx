import { Input } from "@mui/joy";
import { Autocomplete, Box, TextField } from "@mui/material";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import ButtonLocation from "../../../components/button/ButtonLocation";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useCustomer } from "../../../contexts/CustomerContext";

function HeaderMenuList({ searchMenu, setSearchMenu }) {
  const { restaurant } = useCustomer();

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box className="w-full h-[76px] px-5 flex justify-between items-center">
        <ButtonBackNew />
        <Box className="text-[#53E88B] text-lg font-semibold">
          {restaurant?.restaurant?.name}
        </Box>
        <ButtonLocation />
      </Box>
      <Box
        sx={{
          display: "flex",
          gapX: "6px",
          p: "2px 18px 12px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Input
            onChange={(e) => setSearchMenu(e.target.value)}
            placeholder={"Search"}
            sx={{ borderRadius: "14px", bgcolor: "#f9a94d22" }}
            startDecorator={<BsSearch />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderMenuList;
