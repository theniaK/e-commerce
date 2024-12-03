import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";
import SignUp from "./Signup";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
}));

function App() {
  const classes = useStyles();

  let isSignUp = false;

  return (
    <div className={classes.container}>
      {isSignUp ? (
        <SignUp />
      ) : (
        <div>
          <Header />
          <Products />
        </div>
      )}
    </div>
  );
}

export default App;
