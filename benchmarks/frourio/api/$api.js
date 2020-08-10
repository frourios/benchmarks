"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GET = 'GET';
const api = ({ baseURL, fetch }) => {
    const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
    return {
        get: (option) => fetch(prefix, '', GET, option).text(),
        $get: (option) => fetch(prefix, '', GET, option).text().then(r => r.body)
    };
};
exports.default = api;
