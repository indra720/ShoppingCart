import React from "react";
import "./Style.css";
import Button from "@mui/material/Button";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="searchbox w-[100%] bg-[#e5e5e5] rounded-[5px] h-[50px] relative p-2">
      <input
        type="text"
        placeholder="Search for products..."
        className=" bg-inherit focus:outline-none text-[15px] placeholder:text-[#373737] w-full h-[35px] p-2"
      />
      <Button className="!absolute top-[10px] right-[5px] z-50 !w-[35px] !min-w-[35px] !rounded-full text-center">
        <CgSearch className="text-gray-600 text-center" size={24} />
      </Button>
    </div>
  );
};

export default Search;
