import React from "react";
import "./footerStyles.css"
import { useNavigate } from "react-router-dom";
import img4 from "../../../assets/360_F_464217752_EmtW15jg5kMhwqClmlSohRatlVXrcMop.jpg"
const FinancialTips = () => {
    const navigate=useNavigate()
  return (
    <div className="tips-page py-5">
      <div className="container">
        {/* Section 1: Header */}
        <section className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-primary display-6">💰 Smart Financial Tips</h1>
          <p className="lead text-muted mt-3">
            Simple steps to build wealth, reduce debt, and grow your savings.
          </p>
        </section>

        {/* Section 2: Savings Tips */}
        <section className="row align-items-center gy-4 mb-5 animate__animated animate__fadeInLeft">
          <div className="col-md-6">
            <h3 className="fw-bold text-success mb-3">💵 Saving Made Easy</h3>
            <p className="text-muted">
              Automate your savings and treat them as a monthly expense. This ensures you never skip saving for the future.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={img4}
              alt="Saving Tips"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </section>

        {/* Section 3: Investment & Debt */}
        <section className="text-center mb-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold mb-4 text-primary">📈 Manage & Grow Wisely</h3>
          <div className="row gy-4">
            {[
              "Pay off high-interest debt first.",
              "Invest in diversified mutual funds.",
              "Keep an emergency fund for 6 months.",
              "Track credit score regularly."
            ].map((tip, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card border-0 shadow p-4 rounded-4 h-100">
                  <p className="text-muted">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CTA */}
        <section className="text-center bg-primary text-white py-5 rounded-4 animate__animated animate__fadeInUp">
          <h2 className="fw-bold">Transform Your Financial Habits</h2>
          <p>Small changes today lead to big financial freedom tomorrow!</p>
          <button className="btn btn-light btn-lg fw-bold mt-3" onClick={() => navigate("/advisor")}>Learn More →</button>
        </section>
      </div>
    </div>
  );
};

export default FinancialTips;
