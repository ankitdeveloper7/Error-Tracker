export type InitConfig = {
  dsnUrl: string;
  projectId: string;
  apikey: string;
};

export type formatedError = {
  errortype?: string;
  message: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: string;
};
