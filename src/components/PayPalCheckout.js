import React, { useState } from "react";
import { payWithPayPal } from "../api/api";
import { Button, Container } from "react-bootstrap";

const PayPalCheckout = () => {
  const [forwardLink, setForwardLink] = useState("");

  const handlePayment = async () => {
    const response = await payWithPayPal({ amount: "10.00", description: "Premium Access" });
    if (response.data.forwardLink) {
      window.location.href = response.data.forwardLink;
    }
  };

  return (
    <Container className="text-center">
      <h2 className="mb-3">Upgrade to Premium</h2>
      <p>Enjoy full access to all features by upgrading to premium.</p>
      <Button variant="success" size="lg" onClick={handlePayment}>Pay with PayPal</Button>
    </Container>
  );
};

export default PayPalCheckout;
