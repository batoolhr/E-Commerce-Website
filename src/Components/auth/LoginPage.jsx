import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";

const Login = ({ onLogin }) => {
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        username: loginIdentifier,
        password,
      };

      const { data } = await api.post("/auth/login", payload);

      if (data?.access_token) {
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("isAuthenticated", "true");

        onLogin();
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="loginIdentifier"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="loginIdentifier"
              value={loginIdentifier}
              onChange={(e) => setLoginIdentifier(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <Link
            to="/register"
            className="text-sm text-blue-500 hover:underline ml-1"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
