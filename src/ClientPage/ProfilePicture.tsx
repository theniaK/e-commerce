import { User } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#F0F0F0",
    marginTop: "7vw",
    marginLeft: "-23vw",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "3vw",
    height: "3vw",
    "&:hover": {
      backgroundColor: "#B2B2B2",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
  },
  avatar: {
    padding: "8px",
    marginBottom: "15vw",
    marginLeft: "10vw",
    marginTop: "4vw",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#E0E0E0",
    color: "white",
    border: "2px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
}));
type props = {
  responseData: User;
};
export default function ProfilePicture({ responseData }: props) {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleReturnButton() {
    navigate("/loggedin", { state: { responseData: responseData } });
    window.location.reload();
  }

  return (
    <div>
      <div>
        <Button className={classes.button} onClick={handleReturnButton}>
          <FaArrowLeft size={20} color="#213547" />
        </Button>
      </div>
      <div>
        <div className={classes.avatar}>
          <Typography
            style={{
              textTransform: "none",
              fontSize: "50px",
              fontFamily: "Candara, sans-serif",
              fontWeight: "bold",
              color: "#404040",
            }}
          >
            {responseData.firstName[0].toUpperCase()}
            {responseData.lastName[0].toUpperCase()}
          </Typography>
        </div>
      </div>
    </div>
  );
}
