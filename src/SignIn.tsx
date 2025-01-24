import {
  Button,
  FormControl,
  FormHelperText,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
const useStyles = makeStyles(() => ({
  form: {
    height: "600px",
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
    marginTop: "25px",
    boxShadow: "0 2px 4px rgba(169, 169, 169, 0.5)",
  },
  button: {
    width: "50%",
    marginTop: "30px",
    height: "50px",
    backgroundColor: "#FFC0CB",
  },
}));

export default function SignIn(): React.ReactElement {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isFocused, setIsFocused] = useState(false);

  function handleEmailInputChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }

  function handlePasswordInputChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
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
          Sign In
        </Typography>
        <Typography className={classes.secondTitle}>
          Log in to your account
        </Typography>
        <div style={{ marginTop: "40px" }}>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              required={true}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleEmailInputChange}
              className={classes.textField}
            />
          </div>
          {isValidEmail === false && isFocused && (
            <FormHelperText style={{ paddingLeft: "170px" }} error>
              Invalid email address.
            </FormHelperText>
          )}
          {/*           {isValidEmail === true && (
            <FormHelperText style={{ paddingLeft: "170px", color: "green" }}>
              Valid email address!
            </FormHelperText>
          )} */}
          <div>
            <TextField
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              required={true}
              onChange={handlePasswordInputChange}
              className={classes.textField}
            />
          </div>
          <div>
            <Button className={classes.button}>Sign In</Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}
