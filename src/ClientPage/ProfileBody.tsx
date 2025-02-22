import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { User } from "../Models/User";

const useStyles = makeStyles(() => ({
  infoContainer: {
    width: "80vw" /* Adjust width as a percentage of the viewport width */,
    maxWidth: "700px" /* Prevent it from getting too wide on large screens */,
    height: "50vh" /* Set height as a percentage of the viewport height */,
    maxHeight: "300px" /* Prevent it from getting too tall */,
    backgroundColor: "#F8F8F8",
    marginLeft: "35vw" /* Center it horizontally */,
    marginRight: "auto" /* Center it horizontally */,
    marginTop: "5vh" /* Vertical margin as a percentage of viewport height */,
    boxShadow: "0 4px 8px rgba(169, 169, 169, 0.5)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2rem" /* Use rem for padding to keep it relative to font size */,
  },

  labelWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    marginLeft: "100px",
    marginTop: "15px",
  },
  label: {
    fontFamily: "Candara, sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    width: "200px",
  },
  info: {
    fontFamily: "Candara, sans-serif",
    fontSize: "20px",
    marginLeft: "20px",
    backgroundColor: "#F0F0F0",
    width: "300px",
    height: "30px",
    borderRadius: "5px",
    boxShadow: "0 1px 2px rgba(169, 169, 169, 0.5)",
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
  },
}));

type props = {
  responseData: User;
};

export default function ProfileBody({
  responseData,
}: props): React.ReactElement {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.infoContainer}>
        <div className={classes.labelWrapper}>
          <label className={classes.label}>First Name: </label>
          <Typography className={classes.info}>
            {responseData.firstName}
          </Typography>
        </div>
        <div className={classes.labelWrapper}>
          <label className={classes.label}>Last Name: </label>
          <Typography className={classes.info}>
            {responseData.lastName}
          </Typography>
        </div>
        <div className={classes.labelWrapper}>
          <label className={classes.label}>E-Mail Address: </label>
          <Typography className={classes.info}>
            {responseData.emailAddress}
          </Typography>
        </div>
        <div className={classes.labelWrapper}>
          <label className={classes.label}>Address: </label>
          <Typography className={classes.info}>
            {responseData.address}
          </Typography>
        </div>
        <div className={classes.labelWrapper}>
          <label className={classes.label}>Phone Number: </label>
          <Typography className={classes.info}>
            {responseData.phoneNumber}
          </Typography>
        </div>
      </div>
    </div>
  );
}
