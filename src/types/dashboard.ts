export interface RecommendationItem {
  job_id: number;
  job_title: string;
  model_score?: number; // Opsional jika ingin dipakai besok
  fit_category: string;
  why_you_match?: string | null;
  matched_skills: string[];
  missing_skills: string[];
  user_fit_label?: string;
  req_soft_skills?: string;
  req_tech_skills?: string;
  final_rank_score?: number;
  industry_sector_job?: string;
  match_score_percent: number;
  weighted_skill_score?: number;
  sector_similarity_score?: number;
  minimum_experience_years?: number;
  skill_completeness_factor?: number;
}

export interface AnalysisData {
  id: string;
  name: string;
  document_id: string;
  filename: string;
  candidate_name: string;
  extracted_text_preview?: string;
  target_role: string;
  industry_sector_cand: string;
  cand_tech_skills: string[];
  cand_soft_skills: string[];
  experience_years: number;
  education_level_cand: string;
  match_score_percent: number;
  fit_category: string;
  reasoning: string;
  experience_gap_years: number;
  edu_gap: number;
  matched_skills: string[];
  missing_skills: string[];
  recommendations: RecommendationItem[];
  created_at: string;
}

export interface AnalysisResponse {
  code: number;
  status: string;
  message: string;
  data: {
    document: {
      id: string;
    };
    analysis: AnalysisData;
  };
}

export interface HistoryDocumentItem {
  id: string;
  file_name: string;
  file_url: string;
  size: number;
  mime_type: string;
  target_role: string | null;
  analysis_id: string;
}

export interface HistoryDocumentsResponse {
  code: number;
  status: string;
  message: string;
  data: HistoryDocumentItem[];
}