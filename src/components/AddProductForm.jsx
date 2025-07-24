import React, { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css'

const AddProductForm = ({ onAdded }) => {
  const [form, setForm] = useState({
    name: '', type: '', sku: '', image_url: '', description: '', quantity: 0, price: 0
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/products", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    onAdded();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='h2'>Add Product</h2>
      {['name', 'type', 'sku', 'image_url', 'description'].map(field => (
        <input className="input" key={field} name={field} placeholder={field} onChange={handleChange} required />
      ))}
      <input className="input" name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required />
      <input className="input" name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <button className="bt" type="submit">Add</button>
    </form>
  );
};

export default AddProductForm;
