import {
  AppBar,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "white",
  },
  menu: {
    marginLeft: "40px",
  },
  menuItems: {
    fontFamily: "Candara, sans-serif",
    position: "relative",
    display: "inline-block",
    paddingLeft: "5px",
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
}));

export default function Header(): React.ReactElement {
  const classes = useStyles();
  return (
    <AppBar className={classes.toolBar}>
      <Toolbar className={classes.toolBar}>
        <img
          className={classes.logo}
          src={"../public/logo.png"}
          alt="Logo"
          height="100px"
        />
        <div className={classes.menu}>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
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
              href="/your-link-url"
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
              href="/your-link-url"
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
              href="/your-link-url"
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
          InputProps={{
            style: { color: "black" },
          }}
        />
        <div style={{ height: "50px", width: "50px", paddingLeft: "5px" }}>
          <button style={{ backgroundColor: "#FFC0CB", color: "black" }}>
            <SearchOutlinedIcon />
          </button>
        </div>
        <div style={{ paddingLeft: "250px", paddingBottom: "10px" }}>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>Login</Typography>
              </Button>
            </a>
          </div>
          <div className={classes.menuItems}>
            <p>|</p>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <Typography style={{ textTransform: "none" }}>
                  Sign up
                </Typography>
              </Button>
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
