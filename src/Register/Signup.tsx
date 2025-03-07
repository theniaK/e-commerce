import {
  Button,
  FormControl,
  FormHelperText,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { User } from "../Models/User";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  form: {
    height: "710px",
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
    marginTop: "16px",
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
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isFocused, setIsFocused] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isFieldsFilled, setIsFieldsFilled] = useState(true);

  function handleFirstNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function handleLastNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

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

  function handlePasswordConfirmInputChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setPasswordConfirm(event.target.value);
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function checkPasswordMatch() {
    return password === passwordConfirm;
  }

  async function registerUser() {
    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      setIsFieldsFilled(false);
    } else if (!isValidEmail) {
      setIsValidEmail(false);
    } else {
      const newUser: User = {
        id: "",
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password: password,
        phoneNumber: "",
        address: "",
        role: "Client",
      };

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      };

      try {
        const response = await fetch(
          "https://localhost:7231/api/Users/signup",
          requestOptions
        );

        if (!response.ok) {
          // Handle server-side errors
          setEmailExists(true);
        } else {
          // Handle successful response
          const data = await response.json();
          console.log("Response Data:", data);
          setEmailExists(false);
          navigate("/signin");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error during user registration:", error);
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    }
  }

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
              onChange={handleFirstNameInputChange}
              value={firstName}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              variant="outlined"
              color="secondary"
              required={true}
              className={classes.textField}
              onChange={handleLastNameInputChange}
              value={lastName}
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              required={true}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleEmailInputChange}
              value={email}
              className={classes.textField}
            />
          </div>
          {isValidEmail === false && isFocused && (
            <FormHelperText style={{ paddingLeft: "170px" }} error>
              Invalid email address.
            </FormHelperText>
          )}
          <div>
            <TextField
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              required={true}
              onChange={handlePasswordInputChange}
              className={classes.textField}
              value={password}
            />
          </div>
          <div>
            <TextField
              label="Confirm Password"
              variant="outlined"
              color="secondary"
              type="password"
              required={true}
              onChange={handlePasswordConfirmInputChange}
              className={classes.textField}
              value={passwordConfirm}
            />
          </div>
          {!checkPasswordMatch() && (
            <FormHelperText style={{ paddingLeft: "170px" }} error>
              Passwords don't match!
            </FormHelperText>
          )}
          <div>
            <Button className={classes.button} onClick={registerUser}>
              Sign Up
            </Button>
          </div>
          {emailExists && (
            <FormHelperText style={{ paddingLeft: "170px", color: "red" }}>
              Email already exists
            </FormHelperText>
          )}
          {!isFieldsFilled && (
            <FormHelperText style={{ paddingLeft: "170px", color: "red" }}>
              Please fill all fields
            </FormHelperText>
          )}
          {!isValidEmail && (
            <FormHelperText style={{ paddingLeft: "170px", color: "red" }}>
              Email format is not valid
            </FormHelperText>
          )}
        </div>
      </FormControl>
    </div>
  );
}
