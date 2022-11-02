import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1/users';

export const getUser = async (userId: string) => {
  const res = await axios.get(`${baseUrl}/${userId}`);
  return res.data;
};

export const bookmarkItem = async (userId: string, itemId: string) => {
  const res = await axios.patch(`${baseUrl}/${userId}`, { itemId });
  return res.data;
};
