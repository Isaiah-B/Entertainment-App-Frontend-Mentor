import axios from 'axios';

const baseUrl = '/api/v1/auth';

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
