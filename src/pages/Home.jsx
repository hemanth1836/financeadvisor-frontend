import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Home.css';
import img1 from "../assets/MicrosoftTeams-image-4.jpg"
import img2 from "../assets/inflation-spending-habits-header.jpg"
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="container-fluid bg-light text-dark py-5">
      {/* Hero Section */}
      <section className="text-center py-5 bg-gradient animate__animated animate__fadeIn">
        <div className="container py-5">
          <h1 className="display-5 fw-bold text-primary animate__animated animate__fadeInDown">
            Welcome to <span className="text-success">Finance Advisor</span>
          </h1>
          <p className="lead text-secondary animate__animated animate__fadeInUp animate__delay-1s">
            Your AI-powered companion for smarter spending, saving, and investment decisions.
          </p>
          <button
            className="btn btn-primary btn-lg mt-3 animate__animated animate__pulse animate__infinite"
            onClick={() => navigate("/transactions")}
          >
            Start My Financial Checkup
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
          Why Choose Finance Advisor?
        </h2>
        <div className="row gy-4">
          {[
            {
              icon: "💰",
              title: "Expense Optimization",
              text: "Analyze where your money goes each month and identify areas to save more effectively.",
            },
            {
              icon: "📊",
              title: "Predictive Savings Model",
              text: "Using real-time AI models, predict how much you can save based on your spending behavior.",
            },
            {
              icon: "🏦",
              title: "Smart Investment Tips",
              text: "Receive personalized investment ideas tailored to your income, expenses, and savings goals.",
            },
            {
              icon: "💳",
              title: "Debt & Credit Management",
              text: "Track loan repayments, monitor credit health, and receive suggestions to maintain a good score.",
            },
          ].map((feature, i) => (
            <div key={i} className="col-md-6 col-lg-3 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="card text-center shadow border-0 p-4 h-100 rounded-4">
                <div className="fs-1">{feature.icon}</div>
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="ai-insights-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <div className="insight-image-wrapper">
                <img
                  src={img1}
                  alt="AI Insights"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="insight-text-box">
                <h2 className="section-title mb-3">💡 Smarter Financial Insights</h2>
                <p className="text-muted mb-3">
                  Our intelligent system analyses your <b>income</b>, <b>expenses</b>,
                  and <b>spending behavior</b> to create personalized recommendations that help
                  you achieve financial stability and growth.
                </p>
                <ul className="custom-list text-muted">
                  <li>📊 AI-powered health score generation</li>
                  <li>💰 Personalized saving and investment tips</li>
                  <li>📈 Predictive analytics for better budgeting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expense Visualization Section */}
      <section className="expense-visual-section py-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">
            Visualize Your Financial Journey
          </h2>
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <div className="visual-text-box">
                <p className="text-muted mb-3">
                  See where your money really goes — from <b>necessities</b> to
                  <b> leisure</b>. Understand your spending patterns and make
                  informed decisions with AI-driven insights.
                </p>
                <p className="text-muted mb-4">
                  Our interactive charts and reports give you a clear picture of your
                  monthly trends and help you build better habits.
                </p>
                <button className="explore-btn" onClick={() => navigate("/transactions")}>Explore Insights →</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="visual-image-wrapper">
                <img
                  src={img2}
                  alt="Spending Visualization"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5 animate__animated animate__fadeInUp">
          What Our Users Say 💬
        </h2>
        <div className="row gy-4">
          {[
            {
              name: "Aarav Patel",
              feedback:
                "Finance Advisor helped me identify where I was overspending and boosted my savings by 25% in 2 months!",
            },
            {
              name: "Neha Sharma",
              feedback:
                "The financial health score and tips gave me clarity on how to manage my income better.",
            },
            {
              name: "Ravi Kumar",
              feedback:
                "I loved the AI insights. It feels like having a personal financial assistant on my phone!",
            },
          ].map((user, i) => (
            <div
              key={i}
              className="col-md-4 d-flex align-items-stretch animate__animated animate__fadeInUp"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="card border-0 shadow p-4 w-100 rounded-4 d-flex flex-column justify-content-between">
                <p className="text-muted fst-italic flex-grow-1">
                  “{user.feedback}”
                </p>
                <h6 className="fw-bold mt-3 text-primary text-end">
                  {user.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="text-center bg-primary text-white py-5 rounded-0 animate__animated animate__fadeInUp">
        <h2 className="fw-bold">Ready to Take Control of Your Finances?</h2>
        <p className="lead">
          Let Finance Advisor guide you toward financial freedom with intelligent predictions and smart strategies.
        </p>
        <button className="btn btn-light btn-lg mt-3 fw-bold" onClick={() => navigate("/transactions")}>Try It Now →</button>
      </section>
    </div>
  )
}

export default Home
