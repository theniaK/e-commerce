import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";
import { useState } from "react";
import SignIn from "./Register/SignIn";
import SignUp from "./Register/Signup";
//import SignUp from "./Register/Signup";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
}));

function App() {
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
      {!isSignUp ? (
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

export default App;
