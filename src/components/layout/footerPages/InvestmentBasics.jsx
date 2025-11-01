import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../../assets/value-investing-vs-growth-investing.jpg"

import "./footerStyles.css"
const InvestmentBasics = () => {
    const navigate=useNavigate()
  return (
    <div className="investment-page py-5">
      <div className="container">
        {/* Section 1 */}
        <section className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-primary display-6">📈 Investment Basics</h1>
          <p className="lead text-muted mt-3">
            Understand how investing works and take your first confident step toward financial growth.
          </p>
        </section>

        {/* Section 2 */}
        <section className="row align-items-center gy-4 mb-5 animate__animated animate__fadeInLeft">
          <div className="col-md-6">
            <img
              src={img3}
              alt="Investment"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-success mb-3">🏦 Why Invest?</h3>
            <p className="text-muted">
              Investing helps your money grow faster than traditional saving. Start small and be consistent.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="text-center mb-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold mb-4 text-primary">💡 Core Principles</h3>
          <div className="row gy-4">
            {[
              "Start early and stay consistent.",
              "Diversify your portfolio.",
              "Avoid emotional investing.",
              "Invest in what you understand."
            ].map((tip, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card border-0 shadow p-4 rounded-4 h-100">
                  <p className="text-muted">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="text-center bg-primary text-white py-5 rounded-4 animate__animated animate__fadeInUp">
          <h2 className="fw-bold">Start Investing Today!</h2>
          <p>Let Finance Advisor recommend the best investment options based on your goals.</p>
          <button className="btn btn-light btn-lg fw-bold mt-3" onClick={() => navigate("/transactions")}>Get Started →</button>
        </section>
      </div>
    </div>
  );
};

export default InvestmentBasics;
