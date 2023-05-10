import React, { useState } from "react";
import { Input } from "antd";

function SearchBar({ foodList, setFoodList }) {
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredFoodList = foodList.filter((food) => {
      return food.name.match(search);
    });

    setFoodList(filteredFoodList);
  };
  return (
    <form onSubmit={handleSearch}>
      <Input
        value={search}
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </form>
  );
}

export default SearchBar;
