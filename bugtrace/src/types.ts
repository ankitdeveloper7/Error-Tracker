export type InitConfig = {
  dsnUrl: string;
  projectId: string;
  apikey: string;
};

export type formatedError = {
  errortype: string;
  message: string;
  filename: string;
  linenumber: number;
  statuscode: number;
  stacktrace: string;
};
