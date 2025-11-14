"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.captureError = captureError;
const browser_1 = require("./browser");
const transport_1 = require("./core/transport");
const utils_1 = require("./core/utils");
const node_1 = require("./node");
function init({ projectId, user_id, Environment }) {
    if (typeof window !== undefined) {
        (0, browser_1.BrowserInit)({ projectId, user_id, Environment });
    }
    else if (typeof process !== undefined && process.on != undefined) {
        (0, node_1.NodeInit)({ projectId, user_id, Environment });
    }
    else {
        console.log("some Invalid Error has occured");
    }
}
async function captureError(error) {
    try {
        if (utils_1.config.projectId == null && utils_1.config.user_id == null) {
            return console.log("unable to find projectId and user_id");
        }
        const response = await (0, transport_1.sendError)(error);
        return console.log("send error", response);
    }
    catch (error) {
        return console.log("unable to send error", error);
    }
}
