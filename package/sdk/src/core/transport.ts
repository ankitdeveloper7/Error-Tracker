import axios from "axios";
import { config } from "./utils";

export async function sendError(error: any) {
  try {
    await axios({
      method: "POST",
      url: process.env.DSNURL,
      data: {
        error,
        projectId: config.projectId,
      },
    });
  } catch (error) {
    return console.log("Unable to send Error to backend", error);
  }
}
