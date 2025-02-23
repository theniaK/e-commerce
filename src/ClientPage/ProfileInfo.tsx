import React from "react";
import { User } from "../Models/User";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  infoContainer: {
    width: "80vw",
    maxWidth: "700px",
    height: "50vh",
    maxHeight: "300px",
    backgroundColor: "#F8F8F8",
    marginLeft: "10vw",
    marginRight: "auto",
    marginTop: "5vh",
    boxShadow: "0 4px 8px rgba(169, 169, 169, 0.5)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2rem",
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

export default function ProfileInfo({
  responseData,
}: props): React.ReactElement {
  const classes = useStyles();

  return (
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
        <Typography className={classes.info}>{responseData.address}</Typography>
      </div>
      <div className={classes.labelWrapper}>
        <label className={classes.label}>Phone Number: </label>
        <Typography className={classes.info}>
          {responseData.phoneNumber}
        </Typography>
      </div>
    </div>
  );
}
