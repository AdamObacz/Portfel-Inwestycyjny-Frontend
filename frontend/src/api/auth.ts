import { customAxios } from "@/lib/utils";

const API_URL = "/api/auth";

export const authAPI = {
  register: async (email: string, password: string, firstName?: string, lastName?: string) => {
    const response = await customAxios.post(`${API_URL}/register`, {
      email,
      password,
      firstName,
      lastName,
    });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await customAxios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  },

  getMe: async () => {
    const response = await customAxios.get(`${API_URL}/me`);
    return response.data;
  },

  logout: async () => {
    const response = await customAxios.post(`${API_URL}/logout`);
    return response.data;
  },
};
