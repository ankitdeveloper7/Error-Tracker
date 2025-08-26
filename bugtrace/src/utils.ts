import { formatedError } from "./types";

export function formatError(error: string): formatedError {
  return {
    errortype: "TypeError",
    message: error,
    filename: "app.js",
    linenumber: 10,
    statuscode: 500,
    stacktrace: "stacktrace details",
  };
}
