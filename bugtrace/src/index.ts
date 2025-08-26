import axios from "axios";
import { InitConfig, formatedError } from "./types";
import { formatError } from "./utils";

const bugtrace = {
  config: { dsnUrl: "", projectId: "", apikey: "" },

  init({ dsnUrl, projectId, apikey }: InitConfig) {
    this.projectId = projectId;
    this.apikey = apikey;
    this.dsnUrl = dsnUrl;
  },

  async captureError(error: string) {
    console.log("Error captured:", error);
    const formatedError: formatedError = formatError(error);
    console.log(formatedError);

    //send to server
    try {
      await axios({
        method: "post",
        url: `${this.dsnUrl}/${this.projectId}/${this.apikey}`,
        data: {
          error: formatedError,
        },
      }).then((res) => {
        console.log("Error logged successfully");
      });
    } catch (error) {
      console.log("Error logging failed", error);
    }
  },

  async captureEvent(event: string) {
    console.log("Event captured:", event);
    //send to server
  },
};
