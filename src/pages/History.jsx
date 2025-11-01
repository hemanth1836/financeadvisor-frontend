import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Card, Spin, Typography } from "antd";
const { Title } = Typography;

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/history/")
      .then((response) => {
        setHistory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: "Age",
      dataIndex: ["input_data", "age"],
      key: "age",
    },
    {
      title: "Income (₹)",
      dataIndex: ["input_data", "Income"],
      key: "Income",
    },
    {
      title: "Savings (₹)",
      dataIndex: ["result", "predicted_savings"],
      key: "predicted_savings",
      render: (val) => val.toFixed(2),
    },
    {
      title: "Health Score",
      dataIndex: ["result", "financial_health_score"],
      key: "financial_health_score",
    },
    {
      title: "Top Expense",
      dataIndex: ["result", "top_expense_to_cut"],
      key: "top_expense_to_cut",
    },
  ];

  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-6xl shadow-lg rounded-2xl">
        <Title level={2} className="text-center mb-6 text-blue-700">
          📊 User Prediction History
        </Title>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={history}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            bordered
            scroll={{ x: true }}
          />
        )}
      </Card>
    </div>
  );
};

export default History;
