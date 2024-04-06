import React from 'react';

const Dashpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-semibold">Healthcare Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Patient Summary */}
        <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Patient Summary</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-600 mb-2">Name:</p>
                    <p className="font-semibold">John Doe</p>
                </div>
                <div>
                    <p className="text-gray-600 mb-2">Age:</p>
                    <p className="font-semibold">45 years</p>
                </div>
                <div>
                    <p className="text-gray-600 mb-2">Gender:</p>
                    <p className="font-semibold">Male</p>
                </div>
                <div>
                    <p className="text-gray-600 mb-2">Last Visit:</p>
                    <p className="font-semibold">March 15, 2022</p>
                </div>
                </div>
            </div>
        </section>


        {/* Appointment Schedule */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Appointment Schedule</h2>
          {/* Placeholder for appointment schedule component */}
        </section>

        {/* Recent Patient Activity */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Recent Patient Activity</h2>
          {/* Placeholder for recent patient activity component */}
        </section>

        {/* Alerts and Notifications */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Alerts and Notifications</h2>
          {/* Placeholder for alerts and notifications component */}
        </section>

        {/* Clinical Metrics */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Clinical Metrics</h2>
          {/* Placeholder for clinical metrics component */}
        </section>

        {/* Task Management */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Task Management</h2>
          {/* Placeholder for task management component */}
        </section>

        {/* Financial Overview */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
          {/* Placeholder for financial overview component */}
        </section>

        {/* Quality Metrics */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Quality Metrics</h2>
          {/* Placeholder for quality metrics component */}
        </section>

        {/* Resource Utilization */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Resource Utilization</h2>
          {/* Placeholder for resource utilization component */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2022 Healthcare Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashpage;
