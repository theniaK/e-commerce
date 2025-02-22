import React from "react";
import { makeStyles } from "@material-ui/core";
import { User } from "../Models/User";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex" /* Align components side by side */,
    justifyContent: "space-between" /* Space them out evenly */,
    alignItems: "center" /* Align them vertically in the center */,
    width: "100%" /* Ensure it takes full width */,
  },
  profilePictureWrapper: {
    marginRight: "20px" /* Space between ProfilePicture and ProfileInfo */,
  },
  profileInfoWrapper: {
    flexGrow: 1 /* Make ProfileInfo grow to take remaining space */,
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
    <div className={classes.container}>
      <div className={classes.profilePictureWrapper}>
        <ProfilePicture responseData={responseData} />
      </div>
      <div className={classes.profileInfoWrapper}>
        <ProfileInfo responseData={responseData} />
      </div>
    </div>
  );
}
