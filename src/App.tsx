import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import "./App.css";
import SignIn from "./Register/SignIn";
import SignUp from "./Register/Signup";
import ClientHomepage from "./ClientPage/ClientHomepage";
import Profile from "./ClientPage/Profile";
import NotFound from "./Homepage/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage key={Math.random()} />} />
        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/shop" element={<Homepage key={Math.random()} />} />
        <Route path="/featured" element={<Homepage key={Math.random()} />} />
        <Route path="/recommended" element={<Homepage key={Math.random()} />} />
        <Route
          path="/loggedin"
          element={<ClientHomepage key={Math.random()} />}
        />
        <Route path="/profile" element={<Profile key={Math.random()} />} />
        <Route path="/signin" element={<SignIn key={Math.random()} />} />
        <Route path="/signup" element={<SignUp key={Math.random()} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
