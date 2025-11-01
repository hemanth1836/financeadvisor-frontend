import React from "react";

import "./footerStyles.css"
import { useNavigate } from "react-router-dom";

const BudgetPlanner = () => {
    const navigate=useNavigate()
  return (
    <div className="budget-page py-5">
      <div className="container">
        {/* Section 1: Header */}
        <section className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-primary display-6">
            💸 Smart Budget Planner
          </h1>
          <p className="lead text-muted mt-3">
            Plan, track, and optimize your monthly expenses with our intelligent budgeting system.
          </p>
        </section>

        {/* Section 2: How It Works */}
        <section className="row align-items-center gy-4 mb-5 animate__animated animate__fadeInLeft">
          <div className="col-md-6">
            <img
              src="src\assets\budget-1024x617.webp"
              alt="Budget Planning"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3 text-success">📊 AI Expense Analysis</h3>
            <p className="text-muted">
              Our tool categorizes your spending automatically and highlights areas where you can save more efficiently.
            </p>
          </div>
        </section>

        {/* Section 3: Tips Section */}
        <section className="text-center mb-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold mb-4 text-primary">💡 Quick Budgeting Tips</h3>
          <div className="row gy-4">
            {[
              "Set monthly saving goals before spending.",
              "Track recurring expenses like subscriptions.",
              "Review your budget weekly for better control.",
              "Use cash for discretionary spending to stay disciplined."
            ].map((tip, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card border-0 shadow p-4 rounded-4 h-100">
                  <p className="text-muted">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="text-center bg-primary text-white py-5 rounded-4 animate__animated animate__fadeInUp">
          <h2 className="fw-bold">Start Your Budgeting Journey Today!</h2>
          <p>Stay in control of your finances with smart insights and reports.</p>
          <button className="btn btn-light btn-lg fw-bold mt-3" onClick={() => navigate("/transactions")}>Plan My Budget →</button>
        </section>
      </div>
    </div>
  );
};

export default BudgetPlanner;
