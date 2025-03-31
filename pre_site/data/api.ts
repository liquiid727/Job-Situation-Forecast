import { get, post } from '../lib/http';
import { BaseResponse, JobData, MarketAnalysis, PredictionData } from './types';

export class DataService {
  static async fetchJobs(): Promise<BaseResponse<JobData[]>> {
    return get<BaseResponse<JobData[]>>('/jobs');
  }

  static async fetchMarketAnalysis(): Promise<BaseResponse<MarketAnalysis>> {
    return get<BaseResponse<MarketAnalysis>>('/market/analysis');
  }

  static async fetchPredictions(): Promise<BaseResponse<PredictionData[]>> {
    return get<BaseResponse<PredictionData[]>>('/predictions');
  }

  static async createJob(jobData: Omit<JobData, 'id'>): Promise<BaseResponse<JobData>> {
    return post<BaseResponse<JobData>>('/jobs', jobData);
  }
}