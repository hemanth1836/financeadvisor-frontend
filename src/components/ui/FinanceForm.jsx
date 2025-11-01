import React, { useContext } from "react";
import { Button, Form, Input, InputNumber, Select, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "./FinanceForm.css";
import { ExpenseContext } from "../../context/ExpenseContext";

const { Option } = Select;

const FinanceForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setExpenses, setBackendData } = useContext(ExpenseContext); // ✅ include setBackendData

  const onFinish = async (values) => {  // ✅ async added
const expenseData = {
  // 🔹 Personal & Financial Details
  Age: values.Age || 0,
  Dependents: values.Dependents || 0,
  Occupation: values.Occupation || "Other",
  Income: values.Income || 0,
  Additional_Income: values.Additional_Income || 0,
  Credit_Score: values.Credit_Score || 0,

  // 🔹 Expense Categories
  Rent: values.Rent || 0,
  Loan_Repayment: values.Loan_Repayment || 0,
  Insurance: values.Insurance || 0,
  Groceries: values.Groceries || 0,
  Transport: values.Transport || 0,
  Eating_Out: values.Eating_Out || 0,
  Entertainment: values.Entertainment || 0,
  Utilities: values.Utilities || 0,
  Healthcare: values.Healthcare || 0,
  Education: values.Education || 0,
  Miscellaneous: values.Miscellaneous || 0,
};


    

    // ✅ store frontend data in context
    setExpenses(expenseData);
    console.log("✅ Stored expenses in context:", expenseData);

      try {
    console.log("📝 Original form data:", values);

    // ❌ Remove 'name' field before sending
    const { name, ...filteredValues } = values;

    console.log("🚀 Sending filtered data to backend:", filteredValues);

   const response = await fetch("http://127.0.0.1:8000/api/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredValues),
    });

    console.log("Response status:", response.status);
    const text = await response.text();
    console.log("Raw backend response:", text);

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const backendResponse = JSON.parse(text);
    console.log("✅ Parsed backend data:", backendResponse);

    setExpenses(filteredValues);
    setBackendData(backendResponse);

    navigate("/advisor");
  } catch (error) {
    console.error("❌ Backend error:", error);
    alert("Backend not responding properly");
  }
};

  

  // ✅ Moved return inside component
  return (
    <div className="finance-form-container animate__animated animate__fadeInUp">
      <Card className="finance-card animate__animated animate__fadeInUp">
        <h2 className="finance-title animate__animated animate__fadeInDown">
          💰 Smart Finance Advisor
        </h2>
        <p className="finance-subtitle">
          Enter your details and get AI-powered financial recommendations
        </p>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ width: "100%" }}
        >
          {/* Personal Details group */}
          <div className="flex-row">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your Name" }]}
              className="flex-item"
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please enter Age" }]}
              className="flex-item"
            >
              <InputNumber
                placeholder="Enter age"
                style={{ width: "100%" }}
                min={0}
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="Income"
              label="Monthly Income"
              rules={[{ required: true, message: "Please enter Income" }]}
              className="flex-item"
            >
              <InputNumber
                placeholder="Enter income"
                style={{ width: "100%" }}
                min={0}
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="Dependents"
              label="Dependents"
              rules={[{ required: true, message: "Enter dependents (0 if none)" }]}
              className="flex-item"
            >
              <InputNumber
                placeholder="Enter dependents"
                style={{ width: "100%" }}
                min={0}
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="Occupation"
              label="Occupation"
              rules={[{ required: true, message: "Please select Occupation" }]}
              style={{ flexBasis: "100%" }}
            >
              <Select placeholder="Select Occupation" size="large">
                <Option value="Salaried Employee">Salaried Employee</Option>
                <Option value="Freelancer">Freelancer</Option>
                <Option value="BusinessOwner">Business Owner</Option>
                <Option value="Unemployed">Unemployed</Option>
                <Option value="Retired">Retired</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Expense Section */}
          <div className="expense-section animate__animated animate__fadeIn">
            <h3>🧾 Expense Breakdown</h3>

            <div className="flex-row">
              {[
                "Rent",
                "Credit_Score",
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
                "Desired_Savings",
                "Additional_Income",
              ].map((field) => (
                <Form.Item
                  key={field}
                  label={field.replace(/_/g, " ")}
                  name={field}
                  rules={[
                    {
                      required: true,
                      message: `${field} is required (0 if none)`,
                    },
                  ]}
                  className="flex-item"
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder={`Enter ${field.replace(/_/g, " ")}`}
                    min={0}
                    size="large"
                  />
                </Form.Item>
              ))}
            </div>
          </div>

         {/* Submit */}
<Form.Item style={{ marginTop: 30, textAlign: "center" }}>
  <Button
    htmlType="submit"
    size="large"
    style={{
      backgroundColor: "#00e676",      // Neon green background
      color: "#000",                   // Black text for perfect contrast
      fontWeight: "bold",
      borderRadius: "10px",
      padding: "12px 40px",
      border: "none",
      boxShadow: "0 0 12px rgba(0, 230, 118, 0.7)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 230, 118, 1)";
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.color = "#000"; // ensure text stays black
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 230, 118, 0.7)";
      e.currentTarget.style.transform = "scale(1.0)";
      e.currentTarget.style.color = "#000"; // reset text color
    }}
  >
    ⚡ Submit for Prediction
  </Button>
</Form.Item>


        </Form>
      </Card>
    </div>
  );
};

export default FinanceForm;
