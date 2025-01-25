import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";
import SignIn from "../Register/SignIn";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
}));

export default function Homepage({}): React.ReactElement {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchTriggered, setISearchTriggered] = useState<boolean>(false);
  let isSignUp = false;

  function handleSearchQuery(query: string) {
    setSearchQuery(query);
  }

  function handleSearchButtonClick() {
    setISearchTriggered(true);
  }
  return (
    <div className={classes.container}>
      {isSignUp ? (
        <SignIn />
      ) : (
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
      )}
    </div>
  );
}
