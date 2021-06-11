import axios from 'axios';

export type LoginParms = {
  username: string;
  password: string;
};

export const postLogin = (values: LoginParms) => {
  return axios.post('/auth/login/', values);
};
