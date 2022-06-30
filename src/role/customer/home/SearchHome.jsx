import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useCustomer } from "../../../contexts/CustomerContext";

function SearchHome() {
  const { search, setSearch, getMenus } = useCustomer();
  const userInfo = useSelector((state) => state.user.info);
  const { latitude, longitude } = userInfo;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    await getMenus(latitude, longitude, search);
  };

  return (
    <div className="mx-5 mt-7 bg-light-brown text-brown flex p-3 align-middle rounded-xl gap-5">
      <div
        className="hover:bg-cream rounded-full w-8 h-8 "
        onClick={handleSearch}
      >
        <RiSearch2Line className="text-2xl " />
      </div>
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
