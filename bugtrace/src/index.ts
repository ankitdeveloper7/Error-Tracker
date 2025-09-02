import axios from "axios";
import { InitConfig, formatedError } from "./types";
import { formatError } from "./utils";
import dotenv from "dotenv";
dotenv.config();

const bugtrace = {
  config: { dsnUrl: "", projectId: "", apikey: "" },

  init({ dsnUrl, projectId, apikey }: InitConfig) {
    this.projectId = projectId;
    this.apikey = apikey;
    this.dsnUrl = process.env.dsnurl;

    //global error handler
    ((window.onerror = async function (message, source, lineno, colno, error) {
      try {
        // send to server
        await axios({
          method: "post",
          url: dsnUrl,
          data: {
            projectId: projectId,
            message: message,
            source: source,
            lineno: lineno,
            colno: colno,
            error: error ? formatError(error.toString()) : null,
          },
        }).then((res) => {
          console.log("Error logged successfully");
        });
      } catch (error) {
        console.log("Error logging failed", error);
      }
    }),
      //global unhandled promise rejection handler
      window.addEventListener("error", async (event) => {
        try {
          // send to server
          await axios({
            method: "post",
            url: `${this.dsnUrl}/${this.projectId}/${this.apikey}`,
            data: {
              projectId: this.projectId,
              message: event.message,
              source: event.filename,
              lineno: event.lineno,
              colno: event.colno,
              error: event.error ? formatError(event.error.toString()) : null,
            },
          }).then((res) => {
            console.log("Error logged successfully");
          });
        } catch (error) {
          console.log("Error logging failed", error);
        }
      }));
  },

  //function to capture custom errors
  async captureError(error: string) {
    console.log("Error captured:", error);
    const formatedError: formatedError = formatError(error);
    console.log(formatedError);

    //send to server
    try {
      await axios({
        method: "post",
        url: this.dsnurl,
        data: {
          projectId: this.projectId,
          message: formatedError.message,
          source: formatedError.filename,
          lineno: formatedError.lineno,
          colno: formatedError.colno,
          error: formatedError.error,
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
