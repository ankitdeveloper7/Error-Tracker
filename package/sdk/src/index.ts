import { config } from "./utils";
import { SDKconfig } from "./types";

function init({ projectId, user_id, Environment }: SDKconfig) {
  ((config.projectId = projectId),
    (config.user_id = user_id),
    (config.Environment = Environment));
}
