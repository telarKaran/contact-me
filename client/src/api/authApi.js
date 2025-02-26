import axiousInstance from "./axiousInstance";

export const registerUserApi = async (userData) => {
  const response = await axiousInstance.post("/auth/register", userData);
  return response.data;
};

export const loginUserApi = async (credentials) => {
  const response = await axiousInstance.post("/auth/login", credentials);
  return response.data;
};
