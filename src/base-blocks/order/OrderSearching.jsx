import { useState } from "react";

function OrderSearching() {
  const [query, setQuery] = useState("");

  return (
    <input
      placeholder="Search by order #"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default OrderSearching;
