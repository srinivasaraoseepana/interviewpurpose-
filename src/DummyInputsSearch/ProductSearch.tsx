
// -----------------------------------------*****************************--------------------------------
import React, { useState, useEffect } from "react";

interface filterProducts {
  id: number;
  name: string;
  description: string;
}

const productsList = [
  { id: 1, name: "Laptop", description: "A high performance laptop" },
  { id: 2, name: "Phone", description: "A smartphone with great camera" },
  { id: 3, name: "Shoes", description: "Comfortable running shoes" },
  { id: 4, name: "Headphones", description: "Noise cancelling headphones" },
  { id: 5, name: "Watch", description: "Smart watch with fitness tracker" },
];

const ProductSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<filterProducts | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<filterProducts[]>([]);

  const handleShowInput = () => {
    setShowInput((prev) => !prev);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClickProduct = (product: filterProducts) => {
    setSelectedProduct(product);
    setSearchTerm(product.name);
    setFilteredProducts([]);
  };

  const handleSearch = () => {
    const findItem = productsList.find(
      (product) => product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (findItem) {
      setSelectedProduct(findItem);
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = productsList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm]);

  return (
    <div>
      <div
        style={{
          height: 30,
          width: 30,
          borderRadius: 15,
          border: "2px solid green",
          cursor: "pointer",
        }}
        onClick={handleShowInput}
      />

      {showInput && (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChangeInput}
            placeholder="search..."
          />
          <button onClick={handleSearch}>search</button>
        </div>
      )}
      
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => handleClickProduct(product)}>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>

      <div>
        {selectedProduct && (
          <div>
            <h1>{selectedProduct.name}</h1>
            <h2>{selectedProduct.description}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

