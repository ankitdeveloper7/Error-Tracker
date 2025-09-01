import { formatedError } from "./types";

export function formatError(error: string): formatedError {
  return {
    errortype: "TypeError",
    message: error,
    filename: "app.js",
    lineno: 10,
    colno: 500,
    // stacktrace: "stacktrace details",
    error: "asjdflkasjdfl",
  };
}
