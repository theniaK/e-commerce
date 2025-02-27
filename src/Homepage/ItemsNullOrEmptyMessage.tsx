import React from "react";

export default function ItemsNullOrEmptyMessage(): React.ReactElement {
  return (
    <div>
      <h1 style={{ color: "#FFC0CB" }}>Loading...</h1>
      <p style={{ color: "#FFC0CB", fontSize: "25px" }}>
        Our moogles are fetching the products
      </p>
    </div>
  );
}
