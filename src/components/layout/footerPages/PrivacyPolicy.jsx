import React from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../../assets/0x0.webp"
import "./footerStyles.css"
const PrivacyPolicy = () => {
    const navigate=useNavigate()
  return (
    <div className="privacy-page py-5">
      <div className="container">
        {/* Section 1 */}
        <section className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-primary display-6">🔒 Privacy Policy</h1>
          <p className="lead text-muted mt-3">
            We value your trust. Here’s how we protect your personal and financial data.
          </p>
        </section>

        {/* Section 2 */}
        <section className="row align-items-center gy-4 mb-5 animate__animated animate__fadeInLeft">
          <div className="col-md-6">
            <img
              src={img2}
              alt="Privacy"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-success mb-3">🔐 Data Protection</h3>
            <p className="text-muted">
              All your financial details are encrypted using industry-standard protocols to ensure your safety.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="text-center mb-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold mb-4 text-primary">🧾 Our Commitments</h3>
          <div className="row gy-4">
            {[
              "We never sell your data.",
              "We use bank-level encryption.",
              "We collect only necessary details.",
              "You can delete your data anytime."
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
          <h2 className="fw-bold">Your Privacy, Our Priority</h2>
          <p>Finance Advisor ensures transparency and safety in every transaction.</p>
          <button className="btn btn-light btn-lg fw-bold mt-3" onClick={() => navigate("/home")}>Back to Home</button>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
