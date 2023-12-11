export interface GetRequestType {
  code: string;
  data?: {
    name: string;
    age?: number;
    sex?: string;
    phone?: string;
  };
}