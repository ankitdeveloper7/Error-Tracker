// window.onerror, unhandledRejection

import { sendError } from "../core/transport";

export async function handleWindowerror() {
  window.onerror = async function (message) {
    try {
      const response = await sendError(message);
    } catch (error) {
      console.log("Unable to send error to server");
    }
  };
}
