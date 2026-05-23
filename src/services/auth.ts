import apiClient from "./apiClient";
import type { LoginPayload, RegisterPayload, LoginResponse ,RegisterResponse } from "../types/auth"; 
 

export const authService = {
  // 1. Fungsi API untuk Login
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/login", payload);
    return response.data;
  },

  // 2. Fungsi API untuk Register
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>("/register", payload);
    return response.data;
  },
};