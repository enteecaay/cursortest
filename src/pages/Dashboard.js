import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Member Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard/fish">Manage Fish</Link></li>
          <li><Link to="/dashboard/pond">Manage Pond</Link></li>
          <li><Link to="/dashboard/water-parameters">Water Parameters</Link></li>
          <li><Link to="/dashboard/calculators">Calculators</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;