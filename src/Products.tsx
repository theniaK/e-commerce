import React, { useEffect } from "react";

export function Products(): React.ReactElement {
  var itemList;

  function getItems() {
    itemList = JSON.parse("../public/products.json");
    console.log(itemList);
  }

  useEffect(() => {
    getItems();
  });
  return (
    <div>
      <p>something</p>
    </div>
  );
}

export default Products;
