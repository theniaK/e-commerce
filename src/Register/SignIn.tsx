import {
  Button,
  FormControl,
  FormHelperText,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { UserCredentials } from "../Models/UserCredentials";
import { User } from "../Models/User";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFieldsFilled, setIsFieldsFilled] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isFocused, setIsFocused] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [dataResponse, setDataResponse] = useState<any>();

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

  async function logInUser() {
    if (!email || !password) {
      setIsFieldsFilled(false);
    } else if (!isValidEmail) {
      setIsValidEmail(false);
    } else {
      const userCredentials: UserCredentials = {
        emailAddress: email,
        password: password,
      };

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      };

      try {
        const response = await fetch(
          "https://localhost:7231/api/Users/signin",
          requestOptions
        );

        if (!response.ok) {
          // Handle server-side errors
          //alert("There is no user with this email address or password!");
          setUserExists(false);
        } else {
          // Handle successful response
          const data = await response.json();
          setUserExists(true);
          setDataResponse(data);
          if (data.role === "Admin") {
            navigate("/signup"); // redirect sign in page for admin
            window.location.reload();
          } else {
            navigate("/home"); // redirect sign in page for client
            window.location.reload();
          }
        }
      } catch (error) {
        console.error("Error during user registration:", error);
      }
      setEmail("");
      setPassword("");
    }
  }

  if (dataResponse) {
    const loggedInUser: User = {
      id: dataResponse.id,
      firstName: dataResponse.firstName,
      lastName: dataResponse.lastName,
      emailAddress: dataResponse.emailAddress,
      password: dataResponse.password,
      role: dataResponse.role,
    };

    console.log("loggedInUser", loggedInUser);
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
              value={email}
            />
          </div>
          {!isValidEmail && isFocused && (
            <FormHelperText style={{ paddingLeft: "170px" }} error>
              Invalid email address.
            </FormHelperText>
          )}{" "}
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
            <Button className={classes.button} onClick={logInUser}>
              Sign In
            </Button>
          </div>
          {!userExists && (
            <FormHelperText style={{ paddingLeft: "170px", color: "red" }}>
              Incorect email or password
            </FormHelperText>
          )}
          {!isFieldsFilled && (
            <FormHelperText style={{ paddingLeft: "170px" }} error>
              Please fill all fields
            </FormHelperText>
          )}
        </div>
      </FormControl>
    </div>
  );
}
