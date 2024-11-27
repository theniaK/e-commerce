import React, { useEffect } from "react";

export function Products(): React.ReactElement {
  var itemList;

  function getItems() {
    itemList = JSON.parse("../products.json");
    console.log(itemList);
  }

  // useEffect(() => {
  //   getItems();
  // });
  return (
    <div>
      <h1>Still loading.... Kupo!</h1>
    </div>
  );
}

export default Products;
