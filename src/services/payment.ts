import apiClient from "./apiClient";
import type { PaymentResponse, PaymentSuccessResponse } from "../types/payment";

export const paymentService = {
  createPaymentSession: async (): Promise<PaymentResponse> => {
    const response = await apiClient.post<PaymentResponse>("/payments");
    return response.data;
  },

  confirmPaymentSuccess: async (): Promise<PaymentSuccessResponse> => {
    const response = await apiClient.put<PaymentSuccessResponse>("/payments/success");
    return response.data;
  },
};