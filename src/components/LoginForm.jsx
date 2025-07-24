import React, { useState } from 'react';
import axios from 'axios';
import { Navigate} from 'react-router-dom';
import './Login.css'

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", form);
      localStorage.setItem('token', res.data.token);
      onLogin();
      <Navigate to="/dashboard"/>
    } catch (err) {
      alert('Login failed');
       <Navigate to="/login"/>
    }
  };

  return (
    <div className="page-center">
    <div className="abc">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input className='input' name="username" onChange={handleChange} placeholder="Username" required />
      <input className='input' name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button className='bt' type="submit">Login</button>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
