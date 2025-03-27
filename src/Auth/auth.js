import React, { useState } from "react";
import { loginUser, registerUser } from "../api/api";
import { Form, Button, Container, Card } from "react-bootstrap";

const Auth = ({ isLogin, setAuth }) => {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLogin ? await loginUser(form) : await registerUser(form);
      localStorage.setItem("token", response.data.token);
      setAuth(true);
    } catch (error) {
      console.error("Auth Error:", error.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "400px", padding: "20px" }}>
        <h2 className="text-center">{isLogin ? "Login" : "Register"}</h2>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {isLogin ? "Login" : "Register"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
