import React from "react";

function PropertyList({ properties, setSelectedProperty }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Size (sq ft)</th>
            <th>Budget (INR)</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td>{property.type}</td>
              <td>{property.location}</td>
              <td>{property.size}</td>
              <td>{property.budget}</td>
              <td>{property.availability ? "✅ Available" : "❌ Not Available"}</td>
              <td>
                <button className="edit-btn" onClick={() => setSelectedProperty(property)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
