import React, { useEffect, useState } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "../api/api";
import { Table, Button, Form, Container } from "react-bootstrap";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ title: "", amount: "", category: "" });

  useEffect(() => {
    fetchExpenses().then((res) => setExpenses(res.data)).catch((err) => console.error(err));
  }, []);

  const handleAddExpense = async () => {
    await addExpense(newExpense);
    setExpenses([...expenses, newExpense]);
  };

  return (
    <Container>
      <h2 className="mb-3">Expenses</h2>
      <Form className="mb-3">
        <Form.Control type="text" placeholder="Title" onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })} className="mb-2" />
        <Form.Control type="number" placeholder="Amount" onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} className="mb-2" />
        <Form.Control type="text" placeholder="Category" onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })} className="mb-2" />
        <Button variant="primary" onClick={handleAddExpense}>Add Expense</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp._id}>
              <td>{exp.title}</td>
              <td>${exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteExpense(exp._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Expenses;
