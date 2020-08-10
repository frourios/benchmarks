"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.controllers = exports.createMiddleware = void 0;
const express_1 = __importDefault(require("express"));
const fastify_1 = __importDefault(require("fastify"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
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
                    handlers: [
                        methodsToHandler(_controller_1.default.get)
                    ]
                }
            ]
        }
    ];
};
exports.run = async (config) => {
    const app = fastify_1.default();
    await app.register(require('fastify-express'));
    if (config.helmet)
        app.use(helmet_1.default(config.helmet === true ? {} : config.helmet));
    if (config.cors)
        app.use(cors_1.default(config.cors === true ? {} : config.cors));
    const router = express_1.default.Router();
    const basePath = config.basePath ? `/${config.basePath}`.replace('//', '/') : '';
    const ctrls = exports.controllers();
    for (const ctrl of ctrls) {
        for (const method of ctrl.methods) {
            router[method.name](`${basePath}${ctrl.path}`, method.handlers);
        }
    }
    app.use(router);
    await app.listen(config.port);
    console.log(`Frourio is running on http://localhost:${config.port}`);
    return { app };
};
