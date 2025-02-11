import React, { useState, useEffect } from "react";
import { getLeads } from "../services/leadService";
import { getProperties } from "../services/propertyService";
import "../App.css";


function Dashboard() {
  const [leadCount, setLeadCount] = useState(0);
  const [propertyCount, setPropertyCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const leads = await getLeads();
      const properties = await getProperties();
      setLeadCount(leads.length);
      setPropertyCount(properties.length);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h3 className="dashboard-title">Dashboard</h3>
      < br />
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Leads</h3>
          <p>{leadCount}</p>
        </div>
        <div className="card">
          <h3>Total Properties</h3>
          <p>{propertyCount}</p>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
