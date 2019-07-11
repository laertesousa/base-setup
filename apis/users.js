import { request } from "./index";

export const create = (data) => request('users', 'POST', data);
export const get = () => request('users');

export default {
  create,
  get
};
