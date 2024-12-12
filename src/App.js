import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/LoginPage';
import ProtectedRoute from './Components/Home/routes/ProtectedRoute';
import Cart from './Components/Products/Cart';
import ProductDetails from './Components/Products/ProductDetails';
import Home from './Components/Home/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated (e.g., from localStorage)
  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={<Home />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                element={<Cart />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/ProductDetails"
            element={
              <ProtectedRoute
                element={<ProductDetails />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
