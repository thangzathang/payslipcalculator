import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/payslip.png")} width={160} height={150} alt="Payslip Logo" />
        </Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/payslip">Payslip</Link>
    </nav>
  );
};

export default Navbar;
