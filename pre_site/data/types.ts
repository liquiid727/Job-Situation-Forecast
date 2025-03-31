// 基础响应类型
export interface BaseResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

// 职业数据接口
export interface JobData {
  id: string;
  title: string;
  salaryRange: [number, number];
  experience: string;
  education: string;
  company: string;
  city: string;
  publishDate: string;
  skills: string[];
}

// 行情分析数据
export interface MarketAnalysis {
  date: string;
  avgSalary: number;
  jobCount: number;
  hotSkills: string[];
}

// 预测数据
export interface PredictionData {
  date: string;
  predictedSalary: number;
  predictedJobCount: number;
  confidence: number;
}