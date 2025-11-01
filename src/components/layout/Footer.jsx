import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "animate.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-3 animate__animated animate__fadeInUp">
      <div className="container text-center text-md-start">
        {/* Row 1: About Section */}
        <div className="row mb-4 justify-content-between text-center text-md-start g-4">
          <div className="col-md-4 mb-3 animate__animated animate__fadeInLeft">
            <h5 className="fw-bold text-white">Finance Advisor</h5>
            <p className="small text-light">
              Your AI-powered financial partner.  
              Track expenses, predict savings, and receive smart recommendations for a secure financial future.
            </p>
          </div>

          {/* Row 2: Quick Links */}
          <div className="col-md-2 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/home" className="footer-link">Home</a></li>
              <li><a href="/transactions" className="footer-link">Transactions</a></li>
              <li><a href="/advisor" className="footer-link">Advisor</a></li>
              <li><a href="/dashboard" className="footer-link">Dashboard</a></li>
            </ul>
          </div>

          {/* Row 3: Resources */}
          <div className="col-md-3 mb-3 animate__animated animate__fadeInUp animate__delay-2s">
            <h6 className="fw-bold text-white">Resources</h6>
            <ul className="list-unstyled small">
              <li><a href="/budget" className="footer-link">Budget Planner</a></li>
              <li><a href="/tips" className="footer-link">Financial Tips</a></li>
              <li><a href="/investment" className="footer-link">Investment Basics</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Row 4: Contact */}
          <div className="col-md-3 mb-3 animate__animated animate__fadeInRight animate__delay-3s">
            <h6 className="fw-bold text-white">Contact</h6>
            <p className="small mb-1">📍 Hyderabad, India</p>
            <p className="small mb-1">📧 support@financeadvisor.com</p>
            <p className="small mb-0">📞 +91 98765 43210</p>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="text-center mb-3">
          <a href="#" className="mx-3 social-icon"><FaFacebook /></a>
          <a href="#" className="mx-3 social-icon"><FaTwitter /></a>
          <a href="#" className="mx-3 social-icon"><FaInstagram /></a>
          <a href="#" className="mx-3 social-icon"><FaLinkedin /></a>
        </div>

        {/* Copyright Row */}
        <div className="text-center text-white-50 small border-top border-light pt-3">
          © {new Date().getFullYear()} <strong>Finance Advisor</strong> | Built with ❤️ for Smart Financial Planning
        </div>
      </div>
    </footer>
  );
};

export default Footer;
