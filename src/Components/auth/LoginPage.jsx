import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //@TODO:Integrate login with auth api
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const payload = {
    //     email: "sss",
    //     password: "",
    //   };
    //   //   const { data } = await axios.post("auth/login", payload);
    //   //   if (data?.access_token) {
    //   //     // notify("Login succeeded!");
    //   //     localStorage.setItem("userData", JSON.stringify(data));
    //   //     // updateUser(data);
    //   //   } else {
    //   //     console.log("Wrong UserName or Password");
    //   //     // setLoading(false);
    //   //   }
    // } catch (error) {
    //   console.log(error.response.data.message);
    //   //   setLoading(false);
    // }

    onLogin();
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
            // @TODO:Handle navigate when click
            // onClick={navigate("/")}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <a href="#" className="text-sm text-blue-500 hover:underline ml-1">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
