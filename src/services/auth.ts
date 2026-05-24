import apiClient from "./apiClient";
import type { LoginPayload, RegisterPayload, LoginResponse ,RegisterResponse, ForgotPasswordResponse, ForgotPasswordPayload } from "../types/auth"; 
 

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

  // 3. Fungsi API untuk Forgot Password
  forgotPassword: async (payload: ForgotPasswordPayload): Promise<ForgotPasswordResponse> => {
    const response = await apiClient.post<ForgotPasswordResponse>("/forgot-password", payload);
    return response.data;
  },
};