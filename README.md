<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![Build Status](https://travis-ci.org/fastify/fastify.svg?branch=master)](https://travis-ci.org/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is, fast and low overhead web framework for Node.js
* This package shows how fast it is comparatively.

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks
* __Machine:__ Linux fv-az137-259 5.8.0-1042-azure #45~20.04.1-Ubuntu SMP Wed Sep 15 14:24:15 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.18.0`
* __Run:__ Fri Oct  1 01:17:42 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.23.1  | ✓      | 51512.0    | 1.85    | 9.19          |
| foxify                   | 0.10.20 | ✓      | 49021.6    | 1.95    | 8.04          |
| connect                  | 3.7.0   | ✗      | 48082.4    | 1.99    | 8.58          |
| polkadot                 | 1.0.0   | ✗      | 46703.2    | 2.01    | 8.33          |
| polka                    | 0.5.2   | ✓      | 46561.6    | 2.05    | 8.30          |
| fastify                  | 3.22.0  | ✓      | 46328.8    | 2.07    | 8.26          |
| micro                    | 9.3.4   | ✗      | 45890.4    | 2.08    | 8.18          |
| rayo                     | 1.3.6   | ✓      | 45454.4    | 2.10    | 8.11          |
| bare                     | 14.15.1 | ✗      | 44807.2    | 2.13    | 7.99          |
| yeps                     | 1.1.1   | ✗      | 44125.6    | 2.18    | 7.87          |
| nest-fastify             | 7.6.18  | ✓      | 43492.0    | 2.20    | 7.30          |
| micro-route              | 2.5.0   | ✓      | 43167.2    | 2.23    | 7.70          |
| server-base-router       | 6.1.5   | ✓      | 43121.6    | 2.23    | 7.69          |
| connect-router           | 1.3.5   | ✓      | 42014.0    | 2.29    | 7.49          |
| server-base              | 6.1.5   | ✗      | 41852.8    | 2.28    | 7.46          |
| trek-engine              | 1.0.5   | ✗      | 40004.4    | 2.41    | 6.56          |
| trek-router              | 1.2.0   | ✓      | 39285.4    | 2.46    | 6.44          |
| yeps-router              | 1.2.0   | ✓      | 38239.0    | 2.52    | 6.82          |
| vapr                     | 0.5.5   | ✓      | 37404.6    | 2.57    | 6.14          |
| spirit-router            | 0.5.0   | ✓      | 37369.2    | 2.33    | 6.66          |
| spirit                   | 0.6.1   | ✗      | 36550.4    | 2.40    | 6.52          |
| koa                      | 2.13.3  | ✗      | 36177.8    | 2.68    | 6.45          |
| koa-router               | 7.4.0   | ✓      | 34003.2    | 2.85    | 6.06          |
| total.js                 | 3.4.10  | ✓      | 32536.2    | 2.97    | 9.96          |
| restify                  | 8.6.0   | ✓      | 31041.0    | 3.12    | 5.59          |
| microrouter              | 3.1.3   | ✓      | 26259.2    | 3.71    | 4.68          |
| hapi                     | 20.2.0  | ✓      | 24667.7    | 3.96    | 4.40          |
| egg.js                   | 2.30.0  | ✓      | 15590.7    | 6.34    | 5.49          |
| express                  | 4.17.1  | ✓      | 10597.0    | 9.31    | 1.89          |
| frourio-express          | 0.23.0  | ✓      | 9987.8     | 9.88    | 1.78          |
| express-route-prefix     | 4.17.1  | ✓      | 8668.4     | 11.43   | 3.21          |
| express-with-middlewares | 4.17.1  | ✓      | 8658.0     | 11.40   | 3.32          |
| nest                     | 7.6.18  | ✓      | 8552.6     | 11.56   | 1.95          |
| fastify-big-json         | 3.22.0  | ✓      | 8519.8     | 11.60   | 98.01         |
