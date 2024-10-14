import React, { useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Thực hiện hành động tìm kiếm ở đây
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo or App Name */}
      <div className="text-xl font-bold">TruyenDex Clone</div>

      {/* Search Bar */}
      <form
        className="w-1/2 flex items-center bg-gray-700 rounded-lg overflow-hidden"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          className="w-full p-2 bg-gray-700 text-white outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-blue-600 p-2 text-white hover:bg-blue-500 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Optional: Buttons or Profile Links */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
          Login
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
          Sign Up
        </button>
      </div>
    </header>
  );
}
export default Header;
