import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./Landingpage/Landingpage";
import HospitalSignup from "./pages/HospitalSignup";
import LandingDashboard from "./LandingDash/LandingDashboard"
import Schedulingpage from "./Scheduling/Schedulingpage";
import "./App.css";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<HospitalSignup/>} />
        <Route path="/Dashboard" element={<LandingDashboard/>}/>
        <Route path= "/Scheduling" element={<Schedulingpage/>}/>
      </Routes>
    </div>
  );
};

export default App;
