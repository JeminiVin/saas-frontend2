import axios from "axios";

// Set Backend Base URL
const API_URL = "https://backend-saasexpensetracker.onrender.com"; // Change when deploying

// Get Auth Token from Local Storage
const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT Token
  },
});

// API Calls
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const fetchExpenses = () => axios.get(`${API_URL}/expenses/all`, getAuthHeaders());
export const addExpense = (data) => axios.post(`${API_URL}/expenses/add`, data, getAuthHeaders());
export const deleteExpense = (id) => axios.delete(`${API_URL}/expenses/delete/${id}`, getAuthHeaders());
export const payWithPayPal = (data) => axios.post(`${API_URL}/paypal/pay`, data, getAuthHeaders());
export const getPaymentHistory = () => axios.get(`${API_URL}/paypal/history`, getAuthHeaders());
