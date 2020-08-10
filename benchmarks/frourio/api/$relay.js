"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createController = exports.createMiddleware = void 0;
const _app_1 = require("../$app");
Object.defineProperty(exports, "createMiddleware", { enumerable: true, get: function () { return _app_1.createMiddleware; } });
function createController(methods, cb) {
    return typeof methods === 'function' ? methods() : { ...cb(methods), inject: (d) => cb(d) };
}
exports.createController = createController;
