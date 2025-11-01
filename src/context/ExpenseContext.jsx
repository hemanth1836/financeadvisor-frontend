// src/context/ExpenseContext.jsx
import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState({});
  const [backendData, setBackendData] = useState(null); // <-- store backend predictions

  return (
    <ExpenseContext.Provider
      value={{ expenses, setExpenses, backendData, setBackendData }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
