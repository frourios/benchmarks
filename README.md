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
* __Machine:__ Linux fv-az42-349 5.13.0-1031-azure #37~20.04.1-Ubuntu SMP Mon Jun 13 22:51:01 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.3`
* __Run:__ Fri Jul  1 01:45:57 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65217.6    | 1.42    | 11.63         |
| fastify                  | 3.29.0  | ✓      | 57917.6    | 1.64    | 10.33         |
| polka                    | 0.5.2   | ✓      | 57911.2    | 1.64    | 10.33         |
| bare                     | 14.15.1 | ✗      | 57712.0    | 1.65    | 10.29         |
| connect                  | 3.7.0   | ✗      | 57539.2    | 1.65    | 10.26         |
| foxify                   | 0.10.20 | ✓      | 56587.2    | 1.69    | 9.28          |
| frourio                  | 0.26.0  | ✓      | 56518.4    | 1.69    | 10.08         |
| micro                    | 9.3.4   | ✗      | 55412.8    | 1.72    | 9.88          |
| rayo                     | 1.3.10  | ✓      | 55268.2    | 1.73    | 9.86          |
| nest-fastify             | 7.6.18  | ✓      | 54425.6    | 1.76    | 9.14          |
| yeps                     | 1.1.1   | ✗      | 53252.8    | 1.79    | 9.50          |
| server-base              | 6.1.5   | ✗      | 52836.8    | 1.81    | 9.42          |
| server-base-router       | 6.1.5   | ✓      | 52772.0    | 1.81    | 9.41          |
| micro-route              | 2.5.0   | ✓      | 52061.6    | 1.84    | 9.28          |
| connect-router           | 1.3.7   | ✓      | 51532.4    | 1.86    | 9.19          |
| trek-engine              | 1.0.5   | ✗      | 48486.4    | 1.98    | 7.95          |
| trek-router              | 1.2.0   | ✓      | 47373.6    | 2.03    | 7.77          |
| vapr                     | 0.5.5   | ✓      | 46001.6    | 2.09    | 7.55          |
| yeps-router              | 1.2.0   | ✓      | 44470.4    | 2.16    | 7.93          |
| spirit                   | 0.6.1   | ✗      | 44451.2    | 1.88    | 7.93          |
| koa                      | 2.13.4  | ✗      | 43420.8    | 2.22    | 7.74          |
| spirit-router            | 0.5.0   | ✓      | 42625.6    | 1.98    | 7.60          |
| total.js                 | 3.4.13  | ✓      | 41809.6    | 2.30    | 12.80         |
| koa-router               | 7.4.0   | ✓      | 38970.4    | 2.49    | 6.95          |
| restify                  | 8.6.1   | ✓      | 38803.2    | 2.50    | 6.99          |
| hapi                     | 20.2.2  | ✓      | 33889.0    | 2.87    | 6.04          |
| microrouter              | 3.1.3   | ✓      | 32342.0    | 3.00    | 5.77          |
| egg.js                   | 2.36.0  | ✓      | 20333.6    | 4.83    | 7.15          |
| frourio-express          | 0.26.0  | ✓      | 13842.4    | 7.11    | 2.47          |
| express                  | 4.18.1  | ✓      | 13607.2    | 7.23    | 2.43          |
| nest                     | 7.6.18  | ✓      | 12317.8    | 8.02    | 2.81          |
| fastify-big-json         | 3.29.0  | ✓      | 12145.6    | 8.11    | 139.74        |
| express-with-middlewares | 4.18.1  | ✓      | 11890.2    | 8.29    | 4.56          |
| express-route-prefix     | 4.18.1  | ✓      | 11725.8    | 8.45    | 4.34          |
