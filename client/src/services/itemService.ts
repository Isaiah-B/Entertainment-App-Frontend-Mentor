import axios from 'axios';

const baseUrl = '/api/v1/items';

export const getAllItems = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
