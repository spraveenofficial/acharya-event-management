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
import AddEvent from './pages/CreateEvent/CreateEvent'
import { useSelector } from "react-redux";
import { isAuth } from "./store/authSlice";
import { Navigate } from "react-router-dom";
function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
