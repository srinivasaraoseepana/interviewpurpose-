import React, { useEffect, useRef } from "react";

const ProductList = ({
  loadMore,
  hasMore,
  products,
}: {
  loadMore: () => void;
  hasMore: boolean;
  products: {
    id: number;
    title: string;
    description: string;
    category: string;
  }[];
}) => {
  const observeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || !observeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = observeRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loadMore]);

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 8,
            border: "2px solid green",
            margin: 12,
            padding: 8,
          }}
        >
          <h2>{product.category} </h2>
          <h1>{product.title}</h1>
          <h2>{product.description} </h2>
        </div>
      ))}
      {hasMore && (
        <div ref={observeRef} style={{ height: "20px", background: "#eee" }} />
      )}
    </div>
  );
};

export default ProductList;
