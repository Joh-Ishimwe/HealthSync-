import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./Landingpage/Landingpage";
import HospitalSignup from "./pages/HospitalSignup";
import LandingDashboard from "./LandingDash/LandingDashboard"
import Schedulingpage from "./Scheduling/Schedulingpage";
import "./App.css";
import LandingPatientlist from "./LandingPatientList/LandingPatientlist";


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<HospitalSignup/>} />
        <Route path="/Dashboard" element={<LandingDashboard/>}/>
        <Route path= "/Scheduling" element={<Schedulingpage/>}/>
        <Route path= "PatientList" element={<LandingPatientlist/>}/>
      
      </Routes>
    </div>
  );
};

export default App;
