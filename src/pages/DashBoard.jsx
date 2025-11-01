// src/pages/Dashboard.jsx
import React, { useContext } from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";
import "animate.css";
import { Button } from "antd";


const { Title } = Typography;

const Dashboard = () => {
  const { expenses, backendData } = useContext(ExpenseContext);

  // 🧠 If no data yet
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

  // 🎯 Prepare expense data for charts
  const expenseCategories = [
    "Rent",
    "Loan_Repayment",
    "Insurance",
    "Groceries",
    "Transport",
    "Eating_Out",
    "Entertainment",
    "Utilities",
    "Healthcare",
    "Education",
    "Miscellaneous",
  ];

  const expenseData = expenseCategories.map((cat) => ({
    name: cat,
    value: Number(expenses[cat]) || 0,
  }));

  // 💰 Financial calculations
  const totalIncome =
    Number(expenses?.Income || 0) + Number(expenses?.Additional_Income || 0);
  const totalExpenses = expenseData.reduce((sum, e) => sum + e.value, 0);
  const actualSavings = totalIncome - totalExpenses;
  const predictedSavings = backendData?.predicted_savings || 0;

  // ❤️ Health Score
  const score = backendData?.financial_health_score || 0;
  const getColor = (score) => {
    if (score >= 70) return "#00b894";
    if (score >= 40) return "#ffcc00";
    return "#ff5252";
  };

  const COLORS = [
    "#0984e3",
    "#00b894",
    "#ff7675",
    "#fdcb6e",
    "#6c5ce7",
    "#74b9ff",
    "#a29bfe",
    "#55efc4",
    "#fab1a0",
    "#ffeaa7",
  ];

  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        minHeight: "100vh",
        padding: "60px 30px 100px",
      }}
    >
      <Title
        level={2}
        style={{
          color: "#0d47a1",
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "40px",
        }}
      >
        📊 Financial Dashboard
      </Title>

      <Row gutter={[24, 24]}>
        {/* 💸 Expense Breakdown Pie Chart */}
        <Col xs={24} lg={12}>
          <Card
            title="💸 Expense Breakdown"
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label={false}
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* 📈 Savings Comparison */}
        <Col xs={24} lg={12}>
          <Card
            title="📈 Actual vs Predicted Savings"
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: "Actual Savings", value: actualSavings },
                  { name: "Predicted Savings", value: predictedSavings },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#333" />
                <YAxis stroke="#333" />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="url(#colorGradient)"
                  radius={[10, 10, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00b894" />
                    <stop offset="100%" stopColor="#0984e3" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        {/* ❤️ Financial Health Score Gauge */}
        <Col xs={24} lg={12}>
          <Card
            title="❤️ Financial Health Score"
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                cx="50%"
                cy="70%"
                innerRadius="80%"
                outerRadius="100%"
                barSize={20}
                data={[
                  {
                    name: "Health Score",
                    value: score,
                    fill: getColor(score),
                  },
                ]}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                />
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#0d47a1"
                  fontSize="28px"
                  fontWeight="bold"
                >
                  {`${score}%`}
                </text>
                <text
                  x="50%"
                  y="88%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#555"
                  fontSize="14px"
                >
                  Financial Wellness
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* 🔝 Top 3 Expenses */}
        <Col xs={24} lg={12}>
          <Card
            title="🔥 Top 3 Expenses"
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            {expenseData
              .sort((a, b) => b.value - a.value)
              .slice(0, 3)
              .map((item, index) => (
                <div key={index} style={{ marginBottom: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                      color: "#0d47a1",
                      fontWeight: "600",
                    }}
                  >
                    <span>{item.name}</span>
                    <span>₹{item.value}</span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      background: "rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(item.value / expenseData[0].value) * 100}%`,
                        background:
                          index === 0
                            ? "linear-gradient(90deg,#ff7675,#e17055)"
                            : index === 1
                            ? "linear-gradient(90deg,#00b894,#00cec9)"
                            : "linear-gradient(90deg,#0984e3,#74b9ff)",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
