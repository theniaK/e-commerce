import {
  Button,
  FormControl,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  form: {
    height: "650px",
    width: "650px",
    backgroundColor: "#F8F8F8",
    boxShadow: "0 4px 8px rgba(169, 169, 169, 0.5)",
  },
  logo: {
    display: "in-line",
    paddingLeft: "10px",
    paddingTop: "10px",
  },
  title: {
    fontFamily: "Candara, sans-serif",
    fontWeight: "bold",
    justifyContent: "center",
  },
  secondTitle: {
    fontFamily: "Candara, sans-serif",
    width: "100%",
  },
  textField: {
    width: "50%",
    marginTop: "20px",
    boxShadow: "0 2px 4px rgba(169, 169, 169, 0.5)",
  },
  button: {
    width: "50%",
    marginTop: "30px",
    height: "50px",
    backgroundColor: "#FFC0CB",
  },
}));

export default function SignUp(): React.ReactElement {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.form}>
        <img
          className={classes.logo}
          src={"/logo.png"}
          alt="Logo"
          height="70px"
          width="150px"
        />
        <Typography variant="h3" className={classes.title}>
          Sign Up
        </Typography>
        <Typography className={classes.secondTitle}>
          Create an account or <Link href="/signin">Sign in</Link>
        </Typography>
        <div style={{ marginTop: "40px" }}>
          <div>
            <TextField
              label="First Name"
              variant="outlined"
              color="secondary"
              required={true}
              className={classes.textField}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              variant="outlined"
              color="secondary"
              required={true}
              className={classes.textField}
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              required={true}
              className={classes.textField}
            />
          </div>
          <div>
            <TextField
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              required={true}
              className={classes.textField}
            />
          </div>
          <div>
            <Button className={classes.button}>Sign Up</Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}
