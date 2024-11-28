import React, { useEffect } from "react";

export default function Products(): React.ReactElement {
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
      <h1 style={{ color: "#FFC0CB" }}>Oops! Something went wrong.... Kupo!</h1>
      <p style={{ color: "#FFC0CB" }}>Our moogles are working to fix this</p>
    </div>
  );
}
