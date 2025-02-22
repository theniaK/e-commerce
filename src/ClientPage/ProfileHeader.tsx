import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { User } from "../Models/User";

const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "white",
    dispay: "flex",
  },
  logo: {
    marginLeft: "50px",
  },
  label: {
    color: "black",
    fontSize: "30px",
    fontFamily: "Candara, sans-serif",
    marginBottom: "5px",
    marginLeft: "auto",
    marginRight: "5.5vw",
  },
}));

type props = {
  responseData: User;
};
export default function ProfileHeader({
  responseData,
}: props): React.ReactElement {
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
        <Typography className={classes.label}>
          Welcome{" "}
          <span
            style={{
              color: "#FFC0CB",
              border: "2px solid #fff",
              fontWeight: "bold",
            }}
          >
            {responseData.firstName}
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
