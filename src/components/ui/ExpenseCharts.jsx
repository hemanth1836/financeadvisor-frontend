// src/components/ExpenseCharts.jsx
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#00C49F", "#FFBB28", "#FF8042", "#0088FE",
  "#AA00FF", "#FF4444", "#FF6D00", "#00E5FF",
  "#9C27B0", "#F50057", "#43A047",
];

const ExpenseCharts = ({ data }) => {
  const [hiddenPieCategories, setHiddenPieCategories] = useState([]);
  const [hiddenBarCategories, setHiddenBarCategories] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;

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

  const chartData = Object.entries(data)
    .filter(([name]) => expenseCategories.includes(name))
    .map(([name, value]) => ({
      name,
      value: Number(value),
    }))
    .filter(item => !Number.isNaN(item.value) && item.value > 0);

  if (chartData.length === 0)
    return (
      <p style={{ textAlign: "center", color: "#999", fontSize: "1.1rem" }}>
        No expense data to display.
      </p>
    );

  const visiblePieData = chartData.filter(
    item => !hiddenPieCategories.includes(item.name)
  );
  const visibleBarData = chartData.filter(
    item => !hiddenBarCategories.includes(item.name)
  );

  const handlePieClick = (entry) => {
    const { name } = entry;
    setHiddenPieCategories(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const handleBarClick = (data) => {
    const { name } = data;
    setHiddenBarCategories(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  // 🎨 Dynamic sizing for smaller screens
  const outerRadius = windowWidth < 768 ? 80 : 130;
  const barSize = windowWidth < 768 ? 25 : 40;
  const aspectRatio = windowWidth < 768 ? 1 : 2;

  return (
    <div style={{ marginTop: "30px" }}>
      {/* 🍩 Pie Chart */}
      <h3
        style={{
          textAlign: "center",
          color: "#00b894",
          marginBottom: "15px",
          fontWeight: "600",
        }}
      >
        💸 Expense Distribution (Interactive)
      </h3>
      <div style={{ width: "100%", minHeight: "300px" }}>
        <ResponsiveContainer width="100%" aspect={aspectRatio}>
          <PieChart>
            <Pie
              data={visiblePieData}
              dataKey="value"
              nameKey="name"
              outerRadius={outerRadius}
              labelLine={false}
              onClick={handlePieClick}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  opacity={hiddenPieCategories.includes(entry.name) ? 0.3 : 1}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 Bar Chart */}
      <h3
        style={{
          textAlign: "center",
          color: "#0984e3",
          margin: "40px 0 15px",
          fontWeight: "600",
        }}
      >
        📈 Expense Comparison (Interactive)
      </h3>
      <div style={{ width: "100%", minHeight: "300px" }}>
        <ResponsiveContainer width="100%" aspect={aspectRatio}>
          <BarChart
            data={visibleBarData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            onClick={(state) => {
              if (state && state.activeLabel) {
                handleBarClick({ name: state.activeLabel });
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              stroke="#555"
              angle={-25}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: windowWidth < 768 ? 10 : 12 }}
            />
            <YAxis stroke="#555" />
            <Tooltip />
            <Bar dataKey="value" barSize={barSize} radius={[5, 5, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`bar-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  opacity={hiddenBarCategories.includes(entry.name) ? 0.3 : 1}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseCharts;
