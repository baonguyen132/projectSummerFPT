import React from "react";
import Button from "../common/Button";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Vui lòng nhập một từ khóa tìm kiếm" />
      <Button size="large" type="white-search">
        <i className="bx bx-search"></i>
      </Button>

    </div>
  );
};

export default SearchBar;
