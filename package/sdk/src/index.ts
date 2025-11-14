import { BrowserInit } from "./browser";
import { sendError } from "./core/transport";
import { SDKconfig } from "./core/types";
import { config } from "./core/utils";
import { NodeInit } from "./node";

export function init({ projectId, user_id, Environment }: SDKconfig) {
  if (typeof window !== undefined) {
    BrowserInit({ projectId, user_id, Environment });
  } else if (typeof process !== undefined && process.on != undefined) {
    NodeInit({ projectId, user_id, Environment });
  } else {
    console.log("some Invalid Error has occured");
  }
}

export async function captureError(error: string) {
  try {
    if (config.projectId == null && config.user_id == null) {
      return console.log("unable to find projectId and user_id");
    }
    const response = await sendError(error);
    return console.log("send error", response);
  } catch (error) {
    return console.log("unable to send error", error);
  }
}
