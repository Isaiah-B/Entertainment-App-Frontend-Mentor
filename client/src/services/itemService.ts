import axios from 'axios';

let baseUrl: string;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8000/api/v1/items';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://fm-entertainment-server.onrender.com/api/v1/items';
}

export const getAllItems = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
