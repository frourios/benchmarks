"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineController = exports.defineHooks = void 0;
const _app_1 = require("../$app");
Object.defineProperty(exports, "defineHooks", { enumerable: true, get: function () { return _app_1.defineHooks; } });
function defineController(methods, cb) {
    return typeof methods === 'function' ? methods() : { ...cb(methods), inject: (d) => cb(d) };
}
exports.defineController = defineController;
