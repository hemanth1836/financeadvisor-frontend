// src/components/FinanceAdvisor.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";
import {
  DollarOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import ExpenseCharts from "./ExpenseCharts";
import { ExpenseContext } from "../../context/ExpenseContext";
import "animate.css";

const FinanceAdvisor = () => {
  const navigate = useNavigate();
  const { expenses, backendData } = useContext(ExpenseContext);

  if (!expenses || Object.keys(expenses).length === 0) {
    return (
      <div
        className="animate__animated animate__fadeIn d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#0d47a1", fontWeight: "600" }}>
          No data available. Please fill the form to view insights.
        </h2>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/transactions")}
          style={{
            background: "linear-gradient(90deg, #fdccccff, #f9bebeff)",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "600",
            padding: "10px 30px",
            marginTop: "20px",
          }}
        >
          Back to Form
        </Button>
      </div>
    );
  }

  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        color: "#333",
        minHeight: "100vh",
        padding: "60px 15px 100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          width: "100%",
          maxWidth: "960px",
          borderRadius: "18px",
          padding: "35px 20px",
          background: "rgba(255, 255, 255, 0.96)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Title */}
        <h2
          style={{
            marginBottom: "20px",
            color: "#0d47a1",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.8rem",
          }}
        >
          <DollarOutlined style={{ color: "#00b894" }} /> Financial Overview
        </h2>

        {/* Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "850px",
            margin: "0 auto 30px",
          }}
        >
          <Card
            style={{
              background: "linear-gradient(135deg, #00b894, #00cec9)",
              color: "#fff",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.1rem" }}>
              <DollarOutlined /> Financial Health Score
            </h3>
            <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>
              {backendData?.financial_health_score ?? 0}
            </h2>
          </Card>

          <Card
            style={{
              background: "linear-gradient(135deg, #0984e3, #74b9ff)",
              color: "#fff",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.1rem" }}>
              <HeartOutlined /> Predicted Savings
            </h3>
            <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>
              ₹{backendData?.predicted_savings?.toLocaleString("en-IN") ?? 0}
            </h2>
          </Card>

          <Card
            style={{
              background: "linear-gradient(135deg, #ff7675, #fd79a8)",
              color: "#fff",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.1rem" }}>
              <ThunderboltOutlined /> Expense to Cut Down
            </h3>
            <h2 style={{ fontSize: "1.7rem", marginTop: "10px" }}>
              {backendData?.top_expense_to_cut ?? "N/A"}
            </h2>
          </Card>
        </div>

        {/* Expense Charts */}
        <div
          style={{
            marginTop: "40px",
            borderTop: "2px solid #e0e0e0",
            paddingTop: "25px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#1565c0",
              marginBottom: "20px",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            📊 Your Expense Breakdown
          </h3>
          <div
            style={{
              width: "100%",
              height: "auto",
              minHeight: "400px",
              overflowX: "auto",
            }}
          >
            <ExpenseCharts data={expenses} />
          </div>
        </div>

        {/* Recommendations */}
        <div
          style={{
            marginTop: "40px",
            background: "#f5f9ff",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.05)",
            wordWrap: "break-word",
          }}
        >
          <h3
            style={{
              color: "#0d47a1",
              fontWeight: "700",
              borderBottom: "2px solid #bbdefb",
              paddingBottom: "8px",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "1.3rem",
              lineHeight: "1.4",
            }}
          >
            <CommentOutlined /> Personalized Recommendations
          </h3>

          {backendData?.recommendations?.length > 0 ? (
            <ol
              style={{
                color: "#444",
                lineHeight: "1.8",
                paddingLeft: "20px",
                fontSize: "1rem",
              }}
            >
              {backendData.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ol>
          ) : (
            <p style={{ color: "#777" }}>No recommendations available.</p>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center mt-4">
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/transactions")}
            style={{
              background: "linear-gradient(90deg, #fdccccff, #f9bebeff)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontWeight: "600",
              padding: "10px 30px",
            }}
          >
            Back to Form
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FinanceAdvisor;
