import { AppBar, makeStyles, TextField, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "white",
  },
  menu: {
    marginLeft: "200px",
  },
  menuItems: {
    fontFamily: "Candara, sans-serif",
    position: "relative",
    display: "inline-block",
    paddingLeft: "40px",
    fontSize: "25px",
    color: "black",
  },
  textField: {
    position: "relative",
    display: "inline-block",
    paddingLeft: "100px",
    width: "500px",
    fontSize: "25px",
  },
}));

export function Header(): React.ReactElement {
  const classes = useStyles();
  return (
    <AppBar className={classes.toolBar}>
      <Toolbar>
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
          placeholder="Search for an item.."
          InputProps={{
            style: { color: "black" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
