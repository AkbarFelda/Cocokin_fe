import apiClient from "./apiClient";
import type { AnalysisResponse } from "../types/dashboard";

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

  
};