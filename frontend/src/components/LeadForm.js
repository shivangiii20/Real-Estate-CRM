import React, { useState, useEffect } from "react";
import { createLead, updateLead } from "../services/leadService";

function LeadForm({ setLeads, selectedLead, setSelectedLead }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (selectedLead) {
      setName(selectedLead.name);
      setPhone(selectedLead.phone);
    }
  }, [selectedLead]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedLead) {
      const updatedLead = await updateLead(selectedLead._id, { name, phone });
      setLeads((prev) => prev.map((lead) => (lead._id === updatedLead._id ? updatedLead : lead)));
      setSelectedLead(null);
    } else {
      const newLead = await createLead({ name, phone });
      setLeads((prev) => [...prev, newLead]);
    }

    setName("");
    setPhone("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <button type="submit">{selectedLead ? "Update Lead" : "Add Lead"}</button>
      </form>
    </div>
  );
}

export default LeadForm;
