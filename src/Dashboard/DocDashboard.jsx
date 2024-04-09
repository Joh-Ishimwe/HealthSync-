import React from 'react';
import AppointmentTable from './AppointmentTable'; // Import the AppointmentTable component
import Labtable from './Labtable';

function DocDashboard() {
  return (
    <div className="bg-[#DDF4FC] py-5 px-20 min-h-screen">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className='w-[450px]  '>
        <AppointmentTable />
        <Labtable/> 
      </div>
    </div>
  );
}

export default DocDashboard;
