"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.controllers = exports.createMiddleware = void 0;
const express_1 = __importDefault(require("express"));
exports.createMiddleware = (handler) => (Array.isArray(handler) ? handler : [handler]);
const _controller_1 = __importDefault(require("./api/@controller"));
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
exports.controllers = () => {
    return [
        {
            path: '/',
            methods: [
                {
                    name: 'get',
                    handlers: methodsToHandler(_controller_1.default.get)
                }
            ]
        }
    ];
};
exports.apply = (app, config = {}) => {
    var _a;
    app.use((req, res, next) => {
        express_1.default.json()(req, res, err => {
            if (err)
                return res.sendStatus(400);
            next();
        });
    });
    const ctrls = exports.controllers();
    for (const ctrl of ctrls) {
        for (const method of ctrl.methods) {
            app[method.name](`${(_a = config.basePath) !== null && _a !== void 0 ? _a : ''}${ctrl.path}`, method.handlers);
        }
    }
    return app;
};
