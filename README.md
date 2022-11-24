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
* __Machine:__ Linux fv-az613-400 5.15.0-1023-azure #29-Ubuntu SMP Wed Oct 19 22:37:08 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.18.1`
* __Run:__ Thu Nov 24 19:07:57 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 60084.0    | 1.56    | 10.72         |
| bare                     | 14.15.1 | ✗      | 54502.4    | 1.75    | 9.72          |
| foxify                   | 0.10.20 | ✓      | 53232.8    | 1.79    | 8.73          |
| micro                    | 9.4.1   | ✗      | 53108.0    | 1.80    | 9.47          |
| polka                    | 0.5.2   | ✓      | 52774.4    | 1.81    | 9.41          |
| frourio                  | 0.31.0  | ✓      | 52362.4    | 1.82    | 9.39          |
| connect                  | 3.7.0   | ✗      | 51122.4    | 1.87    | 9.12          |
| fastify                  | 4.10.2  | ✓      | 50880.8    | 1.88    | 9.12          |
| yeps                     | 1.1.1   | ✗      | 49803.2    | 1.92    | 8.88          |
| nest-fastify             | 7.6.18  | ✓      | 48530.4    | 1.98    | 8.15          |
| server-base              | 6.1.5   | ✗      | 46794.4    | 2.05    | 8.35          |
| server-base-router       | 6.1.5   | ✓      | 46565.6    | 2.06    | 8.30          |
| micro-route              | 2.5.0   | ✓      | 46472.8    | 2.07    | 8.29          |
| connect-router           | 1.3.7   | ✓      | 46372.4    | 2.07    | 8.27          |
| trek-router              | 1.2.0   | ✓      | 44287.4    | 2.18    | 7.26          |
| trek-engine              | 1.0.5   | ✗      | 42474.6    | 2.27    | 6.97          |
| vapr                     | 0.5.5   | ✓      | 42247.2    | 2.28    | 6.93          |
| koa                      | 2.13.4  | ✗      | 39241.0    | 2.47    | 7.00          |
| yeps-router              | 1.2.0   | ✓      | 38623.2    | 2.50    | 6.89          |
| restify                  | 8.6.1   | ✓      | 37091.8    | 2.61    | 6.69          |
| total.js                 | 3.4.13  | ✓      | 36663.8    | 2.63    | 11.22         |
| spirit                   | 0.6.1   | ✗      | 36656.0    | 2.16    | 6.54          |
| spirit-router            | 0.5.0   | ✓      | 36173.0    | 2.22    | 6.45          |
| koa-router               | 7.4.0   | ✓      | 35623.0    | 2.73    | 6.35          |
| microrouter              | 3.1.3   | ✓      | 30266.8    | 3.21    | 5.40          |
| hapi                     | 20.2.2  | ✓      | 29461.6    | 3.31    | 5.25          |
| egg.js                   | 2.37.0  | ✓      | 17616.5    | 5.61    | 6.20          |
| frourio-express          | 0.31.0  | ✓      | 10628.0    | 9.28    | 1.90          |
| express                  | 4.18.2  | ✓      | 10138.0    | 9.73    | 1.81          |
| express-route-prefix     | 4.18.2  | ✓      | 9591.0     | 10.33   | 3.55          |
| fastify-big-json         | 4.10.2  | ✓      | 9414.0     | 10.49   | 108.31        |
| nest                     | 7.6.18  | ✓      | 9119.0     | 10.85   | 2.08          |
| express-with-middlewares | 4.18.2  | ✓      | 9038.0     | 10.92   | 3.46          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
