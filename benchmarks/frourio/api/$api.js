"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = ({ baseURL, fetch }) => {
    const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
    const GET = 'GET';
    return {
        get: (option) => fetch(prefix, '', GET, option).text(),
        $get: (option) => fetch(prefix, '', GET, option).text().then(r => r.body),
        $path: () => `${prefix}${''}`
    };
};
exports.default = api;
