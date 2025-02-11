import React, { useState, useEffect } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import { getLeads } from "../services/leadService";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    async function fetchLeads() {
      const data = await getLeads();
      setLeads(data);
    }
    fetchLeads();
  }, []);

  return (
   
    <div className="container">
      <h2 className="dashboard-title">Leads Section</h2>
      <div className="form-wrapper">
        <LeadForm setLeads={setLeads} selectedLead={selectedLead} setSelectedLead={setSelectedLead} />
      </div>
      <div className="table-wrapper">
        <LeadList leads={leads} setSelectedLead={setSelectedLead} />
      </div>
    </div>
  );
}

export default Leads;
