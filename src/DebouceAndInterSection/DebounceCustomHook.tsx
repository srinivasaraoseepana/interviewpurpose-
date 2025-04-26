import { useEffect, useState } from "react";

const useDebounce = ({ query, delay }: { query: string; delay: number }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  useEffect(() => {
    const clearId = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);
    return () => {
      clearTimeout(clearId);
    };
  }, [query, delay]);
  return debouncedQuery;
};

export default useDebounce;
