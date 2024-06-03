import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function OrderSearching() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        placeholder="Enter order e.g. 2HKXWS"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-5 rounded-full bg-purple-200 px-4 py-2 pl-8 text-xs outline-none transition-all duration-300 placeholder:italic placeholder:text-transparent focus:w-56 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-opacity-50 focus:placeholder:text-purple-600 sm:w-64 sm:text-sm sm:placeholder:text-purple-600 sm:focus:w-80"
      />
      <HiOutlineSearch className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-900" />
    </form>
  );
}

export default OrderSearching;
