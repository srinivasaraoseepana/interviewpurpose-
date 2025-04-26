import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./productList";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}

const DebouncePlayGround = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // ✅ Page, Query మీద ఆధారపడి డేటా తీసుకొస్తుంది
  const fetchProducts = useCallback(async () => {
    const limit = 5;
    const skip = page * limit;
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${
          query || "laptop"
        }&limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      if (page === 0) {
        setProducts(data.products); // query మారినప్పుడు replace
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }

      if (data.products.length < limit) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (err) {
      console.error("API error:", err);
    }
  }, [page, query]);

  // ✅ query మారినప్పుడు page ని 0 set చేసి immediate fetch
  useEffect(() => {
    setPage(0);
  }, [query]);

  // ✅ Page update అయిన తర్వాత fetchProducts call అవుతుంది
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar onSearch={setQuery} />
      <ProductList products={products} loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default DebouncePlayGround;
