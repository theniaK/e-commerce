import {
  AppBar,
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
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
  filter: {
    paddingLeft: "10px",
    paddingRight: "5px",
    paddingBottom: "10px",
    marginLeft: "50px",
  },
  logo: {
    marginLeft: "50px",
  },
}));
/**
 *
 * @returns
 */
export default function Header(): React.ReactElement {
  const classes = useStyles();
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
              href="/home"
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
              href="/shop"
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
        {/* <div className={classes.filter}>
          <FormControl
            variant="outlined"
            style={{ width: "100px", height: "45px" }}
          >
            <InputLabel id="demo-simple-select-autowidth-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="Filter"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>Name</MenuItem>
              <MenuItem value={2}>Movie</MenuItem>
              <MenuItem value={3}>Video Game</MenuItem>
              <MenuItem value={4}>Book</MenuItem>
            </Select>
          </FormControl>
        </div> */}
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="Search in moogle"
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
          >
            <SearchOutlinedIcon
              style={{ marginTop: "-3px", marginLeft: "-6px" }}
            />
          </button>
        </div>
        <div style={{ paddingLeft: "250px", paddingBottom: "10px" }}>
          <div className={classes.menuItems}>
            <a
              href="/login"
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
              href="/signup"
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
