import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/DashBoard/Dashboard";
import Attendence from "./pages/Attendence/Attendence";
import Classes from "./pages/Classes/Classes";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";
import Contribute from "./pages/Contribute/Contribute";
import AddEvent from "./pages/CreateEvent/CreateEvent";
import Developer from "./pages/Developer/Developer";
import store from "./store";
import { getUser, loadUser } from "./actions/auth";
import { useEffect } from "react";
// import setAuthToken from "./utils/setAuthToken";
import ProtectedRoutes from "./ProtectedRoute";
import { useSelector } from "react-redux";
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }
function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const token = localStorage.getItem("erpToken");
  useEffect(() => {
    if (token) {
      store.dispatch(loadUser());
    } else {
      store.dispatch(getUser());
    }
  }, []);
  return (
    <Router>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route element={<ProtectedRoutes isLoggedIn={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/developer" element={<Developer />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
