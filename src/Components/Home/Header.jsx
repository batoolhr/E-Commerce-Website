import React from "react";
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleCartList = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header className="h-16 flex">
      <div className="container mx-auto flex items-center justify-between">
        <a
          onClick={() => handleNavigate()}
          className="uppercase font-semibold text-2xl cursor-pointer"
          href="# "
        >
          La Collection
        </a>

        <ul className="list-none flex gap-12 text-lg font-medium">
          <li>
            <a className="" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="" href="#products">
              Products
            </a>
          </li>
          <li>
            <a className="" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => handleCartList()}
            className="flex gap-1 bg-[#E5E4E2] p-3 rounded-md"
          >
            <FaShoppingCart size={26} />
            <span className="text-lg font-medium">Cart</span>
          </button>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="flex gap-1 bg-[#E5E4E2] p-3 rounded-md"
            >
              <FaSignOutAlt size={26} />
              <span className="text-lg font-medium">Logout</span>
            </button>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="flex gap-1 bg-[#E5E4E2] p-3 rounded-md"
              >
                <FaSignInAlt size={26} />
                <span className="text-lg font-medium">Login</span>
              </button>
              <button
                onClick={handleRegister}
                className="flex gap-1 bg-[#E5E4E2] p-3 rounded-md"
              >
                <FaUserPlus size={26} />
                <span className="text-lg font-medium">Register</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
