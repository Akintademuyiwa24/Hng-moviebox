import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
