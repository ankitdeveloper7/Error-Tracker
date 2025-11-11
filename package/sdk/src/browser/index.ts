import { SDKconfig } from "../core/types";
import { config } from "../core/utils";

export function init({ projectId, user_id, Environment }: SDKconfig) {
  ((config.projectId = projectId),
    (config.user_id = user_id),
    (config.Environment = Environment));
}
