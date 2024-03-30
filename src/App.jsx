import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./Landingpage/Landingpage";
import HospitalSignup from "./pages/HospitalSignup";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<HospitalSignup/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default App;
