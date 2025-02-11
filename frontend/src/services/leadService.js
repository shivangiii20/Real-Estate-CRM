import axios from "axios";

const API_URL = "http://127.0.0.1:8888/api/leads";

export const getLeads = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createLead = async (lead) => {
  const response = await axios.post(`${API_URL}/create`, lead);
  return response.data;
};

export const updateLead = async (id, lead) => {
  const response = await axios.put(`${API_URL}/${id}`, lead);
  return response.data;
};

