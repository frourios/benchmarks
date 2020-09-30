"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineController = exports.defineHooks = void 0;
function defineHooks(hooks, cb) {
    return typeof hooks === 'function' ? hooks() : { ...cb(hooks), inject: (d) => cb(d) };
}
exports.defineHooks = defineHooks;
function defineController(methods, cb) {
    return typeof methods === 'function' ? methods() : { ...cb(methods), inject: (d) => cb(d) };
}
exports.defineController = defineController;
