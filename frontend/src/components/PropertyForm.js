import React, { useState, useEffect } from "react";
import { createProperty, updateProperty } from "../services/propertyService";

function PropertyForm({ setProperties, selectedProperty, setSelectedProperty }) {
  const [type, setType] = useState("Residential");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [budget, setBudget] = useState("");
  const [availability, setAvailability] = useState(true);

  useEffect(() => {
    if (selectedProperty) {
      setType(selectedProperty.type);
      setLocation(selectedProperty.location);
      setSize(selectedProperty.size);
      setBudget(selectedProperty.budget);
      setAvailability(selectedProperty.availability);
    }
  }, [selectedProperty]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedProperty) {
      const updatedProperty = await updateProperty(selectedProperty._id, { type, location, size, budget, availability });
      setProperties((prev) => prev.map((prop) => (prop._id === updatedProperty._id ? updatedProperty : prop)));
      setSelectedProperty(null);
    } else {
      const newProperty = await createProperty({ type, location, size, budget, availability });
      setProperties((prev) => [...prev, newProperty]);
    }

    setType("Residential");
    setLocation("");
    setSize("");
    setBudget("");
    setAvailability(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size (sq ft)" />
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget (INR)" required />
        <label>
          Available:
          <input type="checkbox" checked={availability} onChange={() => setAvailability(!availability)} />
        </label>
        &nbsp;
        <button type="submit">{selectedProperty ? "Update Property" : "Add Property"}</button>
      </form>
    </div>
  );
}

export default PropertyForm;
