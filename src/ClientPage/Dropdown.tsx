import { makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { User } from "../Models/User";
const useStyles = makeStyles(() => ({
  dropdown: {
    position: "absolute",
    top: "100%",
    right: "80px",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "110px",
    height: "auto",
    paddingBottom: "10px",
    paddingTop: "10px",
    display: "none", // Hide the dropdown initially
  },
  dropdownVisible: {
    display: "block", // Show dropdown when this class is added
  },
  dropdownItem: {
    fontFamily: "Candara, sans-serif",
    padding: "10px",
    fontSize: "16px",
    color: "black",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
  },
}));

type props = {
  dropdownVisible: boolean;
  responseData: User;
};

const Dropdown = ({ dropdownVisible, responseData }: props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/profile", { state: { responseData: responseData } });
  };

  return (
    <div
      className={`${classes.dropdown} ${
        dropdownVisible ? classes.dropdownVisible : ""
      }`}
    >
      <div>
        <Typography className={classes.dropdownItem}>
          <button
            onClick={handleNavigate}
            style={{
              background: "none",
              border: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            Profile
          </button>
        </Typography>
      </div>
      <div>
        <Typography className={classes.dropdownItem}>
          <a href="/home" style={{ color: "black" }}>
            Log out
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Dropdown;
