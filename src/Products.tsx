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
      <h1 style={{ color: "#FFC0CB" }}>Something went wrong.... Kupo!</h1>
      <p style={{ color: "#FFC0CB", fontSize: "25px" }}>
        Our moogles are working to fix this
      </p>
    </div>
  );
}
