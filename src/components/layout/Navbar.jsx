import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import "animate.css";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; //  for glass style customization

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm sticky-top animate__animated animate__fadeInDown custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand Name */}
        <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
          💸 Finance <span className="text-warning">Advisor</span>
        </NavLink>

        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            {["Home", "Transactions", "Advisor", "Dashboard","History"].map(
              (page, i) => (
                <li key={i} className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-white fw-semibold position-relative ${isActive ? "active-nav" : ""
                      }`
                    }
                    to={`/${page.toLowerCase()}`}
                  >
                    {page}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <Button
            type="default"
            className="contact-btn"
            onClick={() => navigate("/contact")}
            style={{
              backgroundColor: "#f9bebeff",
              color: "#333",
              border: "none",
              borderRadius: "8px",
              fontWeight: "500",
              padding: "8px 18px",
            }}
          >
            📞 Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
