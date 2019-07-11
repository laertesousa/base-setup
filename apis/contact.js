import { request } from "./index";

export const sendMessage = (name, email, message) => request('api/contact', 'POST', { name, email, message });

export default {
  send: sendMessage
};