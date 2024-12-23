// App.js
import React, { useState } from 'react';
import './App.css';
import PropertyList from './components/PurchaseForm.js';
import PurchaseForm from './components/PurchaseForm.js';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    propertyID: '',
    paymentMethod: 'crypto',
  });

  const [properties, setProperties] = useState([
    { id: '1', name: 'Apartment in NYC', price: '$500,000' },
    { id: '2', name: 'Villa in Dubai', price: '$1,200,000' },
    { id: '3', name: 'Beach House in Goa', price: '$800,000' },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}. Your request for property ID ${form.propertyID} has been submitted.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain Real Estate Platform</h1>
        <p>Buy properties globally with blockchain-powered security and transparency.</p>
      </header>

      <main>
        <PropertyList properties={properties} setForm={setForm} form={form} />
        <PurchaseForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;