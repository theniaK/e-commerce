import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  products: {
    marginBottom: "100px",
  },
  footer: {
    backgroundColor: "#FFFFFF",
    color: "black",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
    fontFamily: "Candara, sans-serif",
    width: "100%",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
}));

export default function Homepage({}): React.ReactElement {
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
    <div>
      <div className={classes.container}>
        <Header
          searchQuery={searchQuery}
          onSearchChange={handleSearchQuery}
          onSearchButtonClicked={handleSearchButtonClick}
        />
        <div className={classes.products}>
          <Products
            searchQuery={searchQuery}
            isSearchTriggered={isSearchTriggered}
          />
        </div>
        <div style={{ height: "50px" }}></div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
