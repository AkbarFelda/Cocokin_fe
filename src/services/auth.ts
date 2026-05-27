import apiClient from "./apiClient";
import type { LoginPayload, RegisterPayload, LoginResponse, RegisterResponse, ForgotPasswordResponse, ForgotPasswordPayload, VerifyOtpResponse, VerifyOtpPayload, ResetPasswordResponse, ProfileResponse, ProfilePayload, ProfilePhotoPayload, ProfilePhotoResponse, UpdateProfileResponse } from "../types/auth";


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

  // 4. Fungsi API untuk Verify OTP
  verifyOtp: async (payload: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
    const response = await apiClient.post<VerifyOtpResponse>("/verify-otp", payload);
    return response.data;
  },

  // 5. Fungsi API untuk Reset Password
  resetPassword: async (payload: { email: string; password: string }): Promise<ResetPasswordResponse> => {
    const response = await apiClient.post<ResetPasswordResponse>("/reset-password", payload);
    return response.data;
  },

  // 6. Fungsi API untuk Get Profile (Opsional, jika diperlukan)
  getProfile: async (payload?: ProfilePayload): Promise<ProfileResponse> => {
    const response = await apiClient.get<ProfileResponse>("/profile/me", {params: payload,});
    return response.data;
  },

  // 7. Fungsi get Photo Profile (Opsional, jika diperlukan)
  getProfilePhoto: async (payload?: ProfilePhotoPayload): Promise<ProfilePhotoResponse> => {
    const response = await apiClient.get<ProfilePhotoResponse>("/profile/photo/me", {params: payload,});
    return response.data;
  },

  // 8. Fungsi API untuk Update Profile (Opsional, jika diperlukan)
  updateProfile: async (payload: { name: string; bio: string; location: string }): Promise<UpdateProfileResponse> => {
    const response = await apiClient.put("/profile/me", payload);
    return response.data;
  },

  // 9. Fungsi API untuk Update Photo Profile (Opsional, jika diperlukan)
  updateProfilePhoto: async (formData: FormData): Promise<UpdateProfileResponse> => {
    const response = await apiClient.put("/profile/photo/me", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};