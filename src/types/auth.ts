export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export interface ResetPasswordPayload {
  email: string;
  password?: string;
}

export interface ProfilePayload {
  id: string;
  profile_id: string;
  name: string;
  email: string;
  bio: string | null;
  location: string | null;
  subscription_status: string;
}

export interface ProfilePhotoPayload {
  photo_profile: string;
}

export interface RegisterResponse {
  code: number;
  status: string;
  message: string;
  data: {
    id: string;
  };
}

export interface LoginResponse {
  code: number;
  status: string;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface ForgotPasswordResponse {
  code: number;
  status: string;
  message: string;
}

export interface VerifyOtpResponse {
  code: number;
  status: string;
  message: string;
}

export interface ResetPasswordResponse {
  code: number;
  status: string;
  message: string;
}

export interface ProfileResponse {
  code: number;
  status: string;
  message: string;
  data: ProfilePayload;
}

export interface ProfilePhotoResponse {
  code: number;
  status: string;
  message: string;
  data: ProfilePhotoPayload;
}

export interface UpdateProfileResponse {
  code: number;
  status: string;
  message: string;
  data: {
    id: string;
  };
}