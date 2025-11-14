"use strict";
// window.onerror, unhandledRejection
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWindowerror = handleWindowerror;
const transport_1 = require("../core/transport");
async function handleWindowerror() {
    window.onerror = async function (message) {
        try {
            const response = await (0, transport_1.sendError)(message);
        }
        catch (error) {
            console.log("Unable to send error to server");
        }
    };
}
