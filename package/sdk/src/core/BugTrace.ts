import { sendError } from "./transport";

export async function captureError(error: string) {
  try {
    const response = await sendError(error);
    return console.log("send error", response);
  } catch (error) {
    return console.log("unable to send error", error);
  }
}
