import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1/items';

export const getAllItems = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
