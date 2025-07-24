import React from 'react';
import { useNavigate ,Navigate} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
     navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">🛒 Inventory Dashboard</div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
