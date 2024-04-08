import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboard3Line } from "react-icons/ri";

function DashNavbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-[#F9F8F4] h-screen p-5 pt-8 ${
          open ? "w-[220px]" : "w-[70px]"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-gray-900 text-3xl rounded-full absolute top-8 ${
            open ? "left-[200px] duration-300" : "left-[50px] duration-300"
          } border border-gray-900 cursor-pointer ${!open ? "rotate-180" : ""}`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <img
            src={open ? "./src/assets/logo.png" : "./src/assets/logo (2).png"}
            className=""
          />
        </div>
        <div className="pt-[70px] px-8 font-bold text-lg flex flex-col justify-between items-left ">
          <div className="pb-[20px] flex items-center border border-red-950 w-auto">
            <RiDashboard3Line className="text-4xl " />
            Dashboard
          </div>
          <div className="pb-[20px]">Patient List</div>
          <div className="pb-[20px]">Appointments</div>
          <div className="pb-[20px]">Reports</div>
          <div className="pb-[20px]">Messages</div>
        </div>
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default DashNavbar;
