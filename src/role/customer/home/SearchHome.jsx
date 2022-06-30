import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useCustomer } from "../../../contexts/CustomerContext";

function SearchHome() {
  const { search, setSearch } = useCustomer();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mx-5 mt-7 bg-light-brown text-brown flex p-3 align-middle rounded-xl ">
      <RiSearch2Line className="text-2xl mr-5" />
      <input
        type="text"
        placeholder="กินอะไรดี?"
        className="flex grow appearance-none bg-light-brown placeholder-brown placeholder-opacity-25 outline-0"
        value={search}
        onChange={handleSearchChange}
      />
      {/* <span className="text-sm font-light">กินอะไรดี?</span> */}
    </div>
  );
}

export default SearchHome;
