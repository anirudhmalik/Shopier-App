import client from "./client";

const login = (id, phone, password) =>
  client.post("/auth", { id, phone, password });
const register = (id, latitude, longitude, name, phone, password) =>
  client.post("/users", { id, latitude, longitude, name, phone, password });
export default {
  login,
  register,
};
