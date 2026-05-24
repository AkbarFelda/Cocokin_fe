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
