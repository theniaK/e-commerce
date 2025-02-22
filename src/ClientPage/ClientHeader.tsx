import React, { useState } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Dropdown from "./Dropdown";

const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "white",
  },
  menu: {
    marginLeft: "auto",
  },
  menuItems: {
    fontFamily: "Candara, sans-serif",
    position: "relative",
    display: "inline-block",
    paddingLeft: "auto",
    fontSize: "25px",
    color: "black",
  },
  textField: {
    position: "relative",
    display: "inline-block",
    paddingLeft: "100px",
  },
  logo: {
    marginLeft: "50px",
  },
  avatar: {
    padding: "8px",
    marginLeft: "40px",
    marginTop: "5px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#E0E0E0",
    color: "white",
    border: "2px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#B2B2B2",
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
  },
}));

export default function ClientHeader({
  searchQuery,
  onSearchChange,
  onSearchButtonClicked,
  responseData,
}: {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchButtonClicked: () => void;
  responseData?: any;
}): React.ReactElement {
  const classes = useStyles();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible((prevState) => !prevState); // Toggle dropdown visibility
  };

  return (
    <AppBar className={classes.toolBar}>
      <Toolbar className={classes.toolBar}>
        <img
          className={classes.logo}
          src={"/logo.png"}
          alt="Logo"
          height="100px"
        />
        <div className={classes.menu}>
          <div className={classes.menuItems}>
            <a
              href="/login"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>Home</Typography>
              </Button>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/login"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>Shop</Typography>
              </Button>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/featured"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>
                  Featured
                </Typography>
              </Button>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/recommended"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>
                  Recommended
                </Typography>
              </Button>
            </a>
          </div>
        </div>
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="Search in moogle"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            style: {
              color: "black",
              borderRadius: "5px 0 0 5px",
            },
          }}
        />
        <div style={{ height: "40px", width: "50px", paddingLeft: "0px" }}>
          <button
            style={{
              height: "40px",
              width: "50px",
              backgroundColor: "#FFC0CB",
              color: "black",
              borderRadius: "0 5px 5px 0",
            }}
            onClick={onSearchButtonClicked}
          >
            <SearchOutlinedIcon
              style={{ marginTop: "-3px", marginLeft: "-6px" }}
            />
          </button>
        </div>

        <div
          style={{
            paddingLeft: "100px",
            paddingRight: "80px",
            paddingBottom: "10px",
          }}
        >
          <div className={classes.menuItems}>
            <a
              href="/login"
              onClick={(e) => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button style={{ background: "none" }}>
                <ShoppingCartOutlinedIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingRight: "40px",
                  }}
                />
              </Button>
            </a>
          </div>
          <div className={classes.menuItems}>
            <Button className={classes.avatar} onClick={handleDropdownToggle}>
              <Typography
                style={{
                  textTransform: "none",
                  fontSize: "23px",
                  fontFamily: "Candara, sans-serif",
                  fontWeight: "bold",
                  color: "#404040",
                }}
              >
                {responseData.firstName[0].toUpperCase()}
                {responseData.lastName[0].toUpperCase()}
              </Typography>
            </Button>
          </div>
        </div>
      </Toolbar>
      <Dropdown dropdownVisible={dropdownVisible} responseData={responseData} />
    </AppBar>
  );
}
