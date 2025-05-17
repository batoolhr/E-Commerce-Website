import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/auth/LoginPage";
import Register from "./Components/auth/RegisterPage";
import ProtectedRoute from "./Components/Home/routes/ProtectedRoute";
import Cart from "./Components/Products/Cart";
import ProductDetails from "./Components/Products/ProductDetails";
import Home from "./Components/Home/Home";
import PublicHome from "./Components/Home/PublicHome";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(!!userData && authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("userData");
    localStorage.removeItem("isAuthenticated");
    // Optionally redirect to home page
    window.location.href = "/";
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <PublicHome
                onLogout={handleLogout}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onLogin={handleLogin} />}
          />

          {/* Protected routes */}
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
