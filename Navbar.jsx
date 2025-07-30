import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">✝ DSCPL Assistant</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/chat" className="hover:text-gray-300">
          Chat
        </Link>
        <Link to="/devotion" className="hover:text-gray-300">
          Devotion
        </Link>
        <Link to="/prayer" className="hover:text-gray-300">
          Prayer
        </Link>
        <Link to="/meditation" className="hover:text-gray-300">
          Meditation
        </Link>
        <Link to="/accountability" className="hover:text-gray-300">
          Accountability
        </Link>
        <Link to="/settings" className="hover:text-gray-300">
          Settings
        </Link>
        <Link to="/videos" className="hover:text-gray-300">
          Videos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
