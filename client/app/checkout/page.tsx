'use client'
import React, { useState } from 'react';
import esewaCall from './esewa';

const TestButton = () => {
  const [userInput, setUserInput] = useState({
    amount: 100,
    tax_amount: 0,
    product_delivery_charge: 0,
    product_service_charge: 0,
    total_amount: 0,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const floatValue = parseFloat(value);

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: floatValue,
      total_amount:
        name === 'amount'
          ? floatValue +
            prevInput.tax_amount +
            prevInput.product_delivery_charge +
            prevInput.product_service_charge
          : name === 'tax_amount'
          ? prevInput.amount +
            floatValue +
            prevInput.product_delivery_charge +
            prevInput.product_service_charge
          : name === 'product_delivery_charge'
          ? prevInput.amount +
            prevInput.tax_amount +
            floatValue +
            prevInput.product_service_charge
          : name === 'product_service_charge'
          ? prevInput.amount +
            prevInput.tax_amount +
            prevInput.product_delivery_charge +
            floatValue
          : prevInput.total_amount,
    }));
  };

  const handleSubmit = () => {
    // Set the formSubmitted state to true
    setFormSubmitted(true);

    // Call the esewaCall function with updated user input
    esewaCall(userInput);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <label>
        Total Amount:
        <input type="number" name="amount" value={userInput.amount} onChange={handleInputChange} />
      </label>
      <label>
        Tax Amount:
        <input type="number" name="tax_amount" value={userInput.tax_amount} onChange={handleInputChange} />
      </label>
      <label>
        Product Delivery Charge:
        <input type="number" name="product_delivery_charge" value={userInput.product_delivery_charge} onChange={handleInputChange} />
      </label>
      <label>
        Product Service Charge:
        <input type="number" name="product_service_charge" value={userInput.product_service_charge} onChange={handleInputChange} />
      </label>
      <label>
        Amount: {userInput.total_amount}
      </label>
      {/* Use type="button" to prevent form submission and call handleSubmit */}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TestButton;
