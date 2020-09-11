"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _relay_1 = require("./$relay");
exports.default = _relay_1.defineController(() => ({
    get: () => ({ status: 200, body: 'Hello world' })
}));
