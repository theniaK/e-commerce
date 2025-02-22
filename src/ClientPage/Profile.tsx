import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import Footer from "../Homepage/Footer";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#FFFFFF",
    color: "black",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
    fontFamily: "Candara, sans-serif",
    width: "100%",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
}));
export default function Profile() {
  const classes = useStyles();
  const responseData = useLocation().state?.responseData;

  return (
    <div>
      <div>
        <ProfileHeader responseData={responseData} />
      </div>
      <div>
        <ProfileBody responseData={responseData} />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}
