import client from "./client";

const addData = (endPoint, data) => {
  return client.post(endPoint, data);
};
const removeData = (endPoint, data) => {
  return client.put(endPoint, data);
};
const getItem = (endPoint, data) => {
  return client.get(endPoint, data);
};
export default {
  addData,
  removeData,
  getItem,
};
