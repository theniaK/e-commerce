import {
  AppBar,
  Card,
  makeStyles,
  TextField,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "white",
  },
  menu: {
    marginLeft: "50px",
  },
  menuItems: {
    fontFamily: "Candara, sans-serif",
    position: "relative",
    display: "inline-block",
    paddingLeft: "20px",
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

export function Header(): React.ReactElement {
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
              <Typography>Home</Typography>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Shop</Typography>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Featured</Typography>
            </a>
          </div>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Recommended</Typography>
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
        <div style={{ paddingLeft: "300px", paddingBottom: "10px" }}>
          <div className={classes.menuItems}>
            <a
              href="/your-link-url"
              onClick={() => {}}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Login</Typography>
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
              <Typography>Sign Up</Typography>
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
