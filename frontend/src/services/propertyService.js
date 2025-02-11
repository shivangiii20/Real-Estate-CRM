import axios from "axios";

const API_URL = "http://localhost:8888/api/properties";

export const getProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProperty = async (property) => {
  const response = await axios.post(`${API_URL}/create`, property);
  return response.data;
};

export const updateProperty = async (id, property) => {
  const response = await axios.put(`${API_URL}/${id}`, property);
  return response.data;
};
