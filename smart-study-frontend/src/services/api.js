import axios from "axios";

const API_URL = "http://localhost/backend-PHP/api/api";
export const register = async (data) => {
  return await axios.post(`${API_URL}/auth.php?action=register`, data);
};
export const login = async (data) => {
  return await axios.post(`${API_URL}/auth.php?action=login`, data);
};
export const askAI = async (data) => {
  return await axios.post(`${API_URL}/ai.php?action=ask`, data);
};