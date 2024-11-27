import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Products from "./Products";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Products />
    </div>
  );
}

export default App;
