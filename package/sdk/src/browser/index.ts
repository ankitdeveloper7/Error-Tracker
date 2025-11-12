import { SDKconfig } from "../core/types";
import { config } from "../core/utils";
import { handleWindowerror } from "./errorsListener";

export function BrowserInit({ projectId, user_id, Environment }: SDKconfig) {
  ((config.projectId = projectId),
    (config.user_id = user_id),
    (config.Environment = Environment));

  handleWindowerror();
}
