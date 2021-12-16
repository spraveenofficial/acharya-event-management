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
import { useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { Navigate } from "react-router-dom";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const token = localStorage.getItem("erpToken");
  useEffect(() => {
    if (token) {
      console.log("executing");
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
    // </Provider>
  );
}


export default App;
