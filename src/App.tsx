import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";
import SignUp from "./Signup";
import { useState } from "react";

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
  let isSignUp = false;

  function handleSearchQuery(query: string) {
    setSearchQuery(query);
  }

  return (
    <div className={classes.container}>
      {isSignUp ? (
        <SignUp />
      ) : (
        <div>
          <Header
            searchQuery={searchQuery}
            onSearchChange={handleSearchQuery}
          />
          <Products searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}

export default App;
