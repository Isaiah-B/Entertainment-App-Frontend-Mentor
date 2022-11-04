import axios from 'axios';

let baseUrl: string;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8000/api/v1/auth';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://fm-entertainment-server.onrender.com/api/v1/auth';
}

interface ICredientials {
  email: String;
  password: String;
  passwordConfirm?: String;
}

export const login = async (credentials: ICredientials) => {
  const res = await axios.post(`${baseUrl}/login`, credentials);
  return res.data;
};

export const createUser = async (credentials: ICredientials) => {
  const res = await axios.post(`${baseUrl}/signup`, credentials);
  return res.data;
};
