export interface PaymentData {
  id: string;
  user_id: string;
  order_id: string;
  amount: number;
  payment_status: "Pending" | "Success" | "Failed";
  created_at: string;
  updated_at: string;
}

export interface PaymentResponse {
  code: number;
  status: string;
  message: string;
  data: {
    payment: PaymentData;
  };
}

export interface PaymentSuccessResponse {
  code: number;
  status: string;
  message: string;
}