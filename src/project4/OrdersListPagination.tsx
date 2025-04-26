import React, { useState } from "react";
import { users } from "./OptionalCheckingData";

const OrdersList = ({ data }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;


  const filtered = (data || []).filter((order) =>
    order.product.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filterd", filtered);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>📦 Orders</h3>

      {/* Filter */}
      <input
        type="text"
        placeholder="Search by product..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset to first page on filter
        }}
      />

      {/* List */}
      {paginated.length > 0 ? (
        paginated.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <strong>{order.name}</strong> ordered: {order.product}
          </div>
        ))
      ) : (
        <p style={{ color: "gray" }}>❌ No orders found</p>
      )}

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default OrdersList;
