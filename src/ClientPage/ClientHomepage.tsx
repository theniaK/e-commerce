import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../ClientPage/ClientHeader";
import Footer from "../Homepage/Footer";
import { useLocation } from "react-router-dom";
import ClientProducts from "./ClientProducts";

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

export default function ClientHomepage({}): React.ReactElement {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchTriggered, setISearchTriggered] = useState<boolean>(false);
  const responseData = useLocation().state?.responseData;

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
          responseData={responseData}
        />
      </div>
      <div className={classes.products}>
        <ClientProducts
          searchQuery={searchQuery}
          isSearchTriggered={isSearchTriggered}
        />
      </div>
      <div style={{ height: "50px" }}></div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}
