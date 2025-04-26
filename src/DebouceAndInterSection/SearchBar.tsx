import React, { useEffect, useState } from "react";
import useDebounce from "./DebounceCustomHook";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");
  const deboucnedSearch = useDebounce({ query, delay: 500 });

  useEffect(() => {
    if (deboucnedSearch) {
      onSearch(deboucnedSearch);
    }
  }, [deboucnedSearch]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"search..."}
        style={{
          padding: 8,
          border: "2px solid #ccc",
          width: 400,
          borderRadius: 8,
          outline: "none",
          fontSize: 18,
          marginBottom: 16,
        }}
      />
    </div>
  );
};

export default SearchBar;
