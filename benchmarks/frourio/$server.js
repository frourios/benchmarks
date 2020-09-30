"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./api/controller"));
const methodsToHandler = (methodCallback) => async (req, res) => {
    try {
        const result = methodCallback({
            query: req.query,
            path: req.path,
            method: req.method,
            body: req.body,
            headers: req.headers,
            params: req.typedParams,
            user: req.user
        });
        const { status, body, headers } = result instanceof Promise ? await result : result;
        for (const key in headers) {
            res.setHeader(key, headers[key]);
        }
        res.status(status).send(body);
    }
    catch (e) {
        res.sendStatus(500);
    }
};
exports.default = (app, options = {}) => {
    var _a;
    const basePath = (_a = options.basePath) !== null && _a !== void 0 ? _a : '';
    app.get(`${basePath}/`, methodsToHandler(controller_1.default.get));
    return app;
};
