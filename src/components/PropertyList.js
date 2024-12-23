// components/PropertyList.js
import React from 'react';

function PropertyList({ properties, setForm, form }) {
  return (
    <section className="property-list">
      <h2>Available Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>Price: {property.price}</p>
            <button onClick={() => setForm({ ...form, propertyID: property.id })}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PropertyList;