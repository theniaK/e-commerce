import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Register/SignIn"; // Your SignIn component
import SignUp from "./Register/Signup";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default Index;
