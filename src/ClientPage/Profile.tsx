import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "Candara, sans-serif",
  },
  label: {
    display: "inline",
    justifyContent: "left",
    alignItems: "left",
    marginLeft: "30px",
    alignContent: "left",
  },
  info: {
    display: "inline",
    alignContent: "left",
  },
}));
export default function Profile() {
  const classes = useStyles();
  const responseData = useLocation().state?.responseData;
  return (
    <div className={classes.container}>
      <Typography>
        <h1>Profile</h1>
      </Typography>
      <div className={classes.label}>
        <Typography>
          <label>
            <b>First Name: </b>
          </label>
          <p className={classes.info}>{responseData.firstName}</p>
        </Typography>
        <Typography>
          <label>
            <b>Last Name: </b>
          </label>
          <p className={classes.info}>{responseData.lastName}</p>
        </Typography>
        <Typography>
          <label>
            <b>email: </b>
          </label>
          <p className={classes.info}>{responseData.emailAddress}</p>
        </Typography>
      </div>
    </div>
  );
}
