import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search by order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-36 rounded-full bg-purple-200 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default OrderSearching;
