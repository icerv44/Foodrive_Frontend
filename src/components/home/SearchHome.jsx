import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function SearchHome() {
  return (
    <div className="mx-5 my-7 bg-light-brown text-brown flex p-3 align-middle rounded-xl ">
      <RiSearch2Line className="text-2xl mr-5" />
      <input
        placeholder="กินอะไรดี?"
        className="flex grow appearance-none bg-light-brown placeholder-brown placeholder-opacity-25 outline-0"
      />
      {/* <span className="text-sm font-light">กินอะไรดี?</span> */}
    </div>
  );
}

export default SearchHome;
