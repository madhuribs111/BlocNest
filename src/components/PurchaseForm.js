
// components/PurchaseForm.js
import React from 'react';

function PurchaseForm({ form, handleChange, handleSubmit }) {
  return (
    <section className="purchase-form">
      <h2>Purchase Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Selected Property ID:
          <input
            type="text"
            name="propertyID"
            value={form.propertyID}
            readOnly
          />
        </label>

        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="crypto">Cryptocurrency</option>
            <option value="fiat">Fiat Currency</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default PurchaseForm;
