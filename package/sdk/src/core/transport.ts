import axios from "axios";
import { Errors } from "./types";
require("dotenv").config();

export async function sendError({ error, projectId }: Errors) {
  try {
    await axios({
      method: "POST",
      url: process.env.DSNURL,
      data: {
        error,
        projectId,
      },
    });
  } catch (error) {
    return console.log("Unable to send Error to backend", error);
  }
}
