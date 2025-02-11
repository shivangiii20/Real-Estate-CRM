import React, { useState, useEffect } from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyList from "../components/PropertyList";
import { getProperties } from "../services/propertyService";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    async function fetchProperties() {
      const data = await getProperties();
      setProperties(data);
    }
    fetchProperties();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Properties</h2>
      <div style={{ marginBottom: "10px" }}>
        <PropertyForm
          setProperties={setProperties}
          selectedProperty={selectedProperty}
          setSelectedProperty={setSelectedProperty}
        />
      </div>
      <PropertyList properties={properties} setSelectedProperty={setSelectedProperty} />
    </div>
  );
}

export default Properties;
