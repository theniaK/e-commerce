import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../ClientPage/ClientHeader";
import Products from "../Homepage/Products";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
}));

export default function ClientHomepage({}): React.ReactElement {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchTriggered, setISearchTriggered] = useState<boolean>(false);

  function handleSearchQuery(query: string) {
    setSearchQuery(query);
  }

  function handleSearchButtonClick() {
    setISearchTriggered(true);
  }
  return (
    <div className={classes.container}>
      <div>
        <Header
          searchQuery={searchQuery}
          onSearchChange={handleSearchQuery}
          onSearchButtonClicked={handleSearchButtonClick}
        />
        <Products
          searchQuery={searchQuery}
          isSearchTriggered={isSearchTriggered}
        />
      </div>
    </div>
  );
}
