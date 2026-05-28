import apiClient from "./apiClient";
import type { AnalysisResponse, HistoryDocumentsResponse } from "../types/dashboard";

export const dashboardService = {
  uploadAndAnalyzeCV: async (file: File, targetRole: string): Promise<AnalysisResponse> => {
    const formData = new FormData();
    formData.append("file", file);
    const trimmedRole = targetRole ? targetRole.trim() : "";
    
    if (trimmedRole !== "") {
      formData.append("target_role", trimmedRole);
      console.log("Mengirim target_role:", trimmedRole);
    } else {
      console.log("Target role kosong, key 'target_role' SENGAJA tidak dimasukkan (Meniru Postman)");
    }

    const response = await apiClient.post<AnalysisResponse>("/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  getHistoryDocuments: async (): Promise<HistoryDocumentsResponse> => {
    const response = await apiClient.get<HistoryDocumentsResponse>("/documents");
    return response.data;
  },

  getAnalysisDetailByDocId: async (analysisId: string): Promise<AnalysisResponse> => {
    const response = await apiClient.get<AnalysisResponse>(`/analysis/${analysisId}`);
    return response.data;
  },
};