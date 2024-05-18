import { useState } from "react";

function OrderSearching() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search by order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default OrderSearching;
