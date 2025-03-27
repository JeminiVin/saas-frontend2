import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import Auth from "./Auth/auth";
import Expenses from "./components/Expenses";
import PayPalCheckout from "./components/PayPalCheckout";

const App = () => {
  const [isAuthenticated, setAuth] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      {isAuthenticated && <NavigationBar />}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Expenses /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Auth isLogin={true} setAuth={setAuth} />} />
          <Route path="/register" element={<Auth isLogin={false} setAuth={setAuth} />} />
          <Route path="/checkout" element={isAuthenticated ? <PayPalCheckout /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
