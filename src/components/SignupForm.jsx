import React, { useState } from 'react';
import axios from 'axios';
import { Navigate} from 'react-router-dom';
import './Signup.css'
const SignupForm = ({ onSignup }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/signup", form);
      localStorage.setItem('token', res.data.token);
      onSignup(); 
       <Navigate to="/login" replace />

    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
      <Navigate to="/signup"/>
    }
  };

  return (
     <div className="page-center">
      <div className="abc">
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Signup</button>
    </form>
    </div>
    </div>
  );
};

export default SignupForm;
