"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserInit = BrowserInit;
const utils_1 = require("../core/utils");
const errorsListener_1 = require("./errorsListener");
function BrowserInit({ projectId, user_id, Environment }) {
    ((utils_1.config.projectId = projectId),
        (utils_1.config.user_id = user_id),
        (utils_1.config.Environment = Environment));
    (0, errorsListener_1.handleWindowerror)();
}
