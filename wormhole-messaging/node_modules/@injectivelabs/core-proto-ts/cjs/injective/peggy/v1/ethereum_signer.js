"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypeToJSON = exports.signTypeFromJSON = exports.SignType = void 0;
/** SignType defines messages that have been signed by an orchestrator */
var SignType;
(function (SignType) {
    SignType[SignType["SIGN_TYPE_UNKNOWN"] = 0] = "SIGN_TYPE_UNKNOWN";
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE"] = 1] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH"] = 2] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
    SignType[SignType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignType = exports.SignType || (exports.SignType = {}));
function signTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_TYPE_UNKNOWN":
            return SignType.SIGN_TYPE_UNKNOWN;
        case 1:
        case "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE":
            return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE;
        case 2:
        case "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH":
            return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignType.UNRECOGNIZED;
    }
}
exports.signTypeFromJSON = signTypeFromJSON;
function signTypeToJSON(object) {
    switch (object) {
        case SignType.SIGN_TYPE_UNKNOWN:
            return "SIGN_TYPE_UNKNOWN";
        case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE:
            return "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
        case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH:
            return "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
        case SignType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signTypeToJSON = signTypeToJSON;
