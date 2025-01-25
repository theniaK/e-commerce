import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dropdown: {
    position: "absolute",
    top: "100%", // Position it just below the ClientHeader
    right: "80px",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "100px",
    height: "auto",
    paddingBottom: "10px",
    paddingTop: "10px",
    zIndex: 1000,
    display: "none", // Hide the dropdown initially
  },
  dropdownVisible: {
    display: "block", // Show dropdown when this class is added
  },
  dropdownItem: {
    padding: "10px",
    fontSize: "16px",
    color: "black",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "none",
    },
  },
}));

type props = {
  dropdownVisible: boolean;
};

const Dropdown = ({ dropdownVisible }: props) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.dropdown} ${
        dropdownVisible ? classes.dropdownVisible : ""
      }`}
    >
      <div>
        <a
          href="/home"
          className={classes.dropdownItem}
          style={{ color: "black" }}
        >
          Log out
        </a>
      </div>
      {/*       <div>
        <a
          href="/home"
          className={classes.dropdownItem}
          style={{ color: "black" }}
        >
          Log out
        </a>
      </div> */}
    </div>
  );
};

export default Dropdown;
