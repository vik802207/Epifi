import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import UpdateQuantityForm from './components/UpdateQuantityForm';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const Home = ({ onLogout, refreshKey, refreshData }) => (
  <div>
    <Navbar onLogout={onLogout} />
    <AddProductForm onAdded={refreshData} />
    <UpdateQuantityForm />
    <ProductList onRefresh={refreshKey} />
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshData = () => setRefreshKey(prev => prev + 1);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Home onLogout={handleLogout} refreshKey={refreshKey} refreshData={refreshData} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginForm onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/login" replace />
            ) : (
              <SignupForm onSignup={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route path='/' element={<Dashboard/>}/>
          <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
