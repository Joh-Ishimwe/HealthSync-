import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/about";
import Features from "./Components/features/Features";
import Team from "./Components/team/team";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Login />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <About />
        <Features />
        <Team />
        <Contact />
        <Footer /> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
