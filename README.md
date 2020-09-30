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
* __Machine:__ Linux fv-az67 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Wed Sep 30 13:46:14 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 35632.2    | 2.70    | 5.57          |
| fastify                  | ✓      | 33241.4    | 2.91    | 5.20          |
| micro                    | ✗      | 31510.0    | 3.07    | 4.93          |
| polka                    | ✓      | 30684.0    | 3.16    | 4.80          |
| bare                     | ✗      | 29970.8    | 3.24    | 4.69          |
| foxify                   | ✓      | 29125.2    | 3.33    | 4.14          |
| connect                  | ✗      | 28662.0    | 3.39    | 4.48          |
| rayo                     | ✓      | 28163.6    | 3.45    | 4.40          |
| nest-fastify             | ✓      | 28120.8    | 3.46    | 4.10          |
| connect-router           | ✓      | 25904.0    | 3.76    | 4.05          |
| yeps                     | ✗      | 25689.6    | 3.79    | 4.02          |
| micro-route              | ✓      | 25260.4    | 3.85    | 3.95          |
| server-base              | ✗      | 24866.8    | 3.92    | 3.89          |
| spirit-router            | ✓      | 24784.0    | 3.58    | 3.88          |
| server-base-router       | ✓      | 24593.2    | 3.96    | 3.85          |
| spirit                   | ✗      | 24550.8    | 3.61    | 3.84          |
| trek-engine              | ✗      | 24542.8    | 3.98    | 3.49          |
| trek-router              | ✓      | 24116.4    | 4.05    | 3.43          |
| yeps-router              | ✓      | 23293.2    | 4.19    | 3.64          |
| koa                      | ✗      | 22734.0    | 4.30    | 3.56          |
| vapr                     | ✓      | 21526.4    | 4.53    | 3.06          |
| restify                  | ✓      | 20446.8    | 4.79    | 3.24          |
| total.js                 | ✓      | 19884.7    | 4.92    | 5.65          |
| koa-router               | ✓      | 19603.5    | 5.01    | 3.07          |
| microrouter              | ✓      | 18670.1    | 5.26    | 2.92          |
| hapi                     | ✓      | 15719.2    | 6.29    | 2.46          |
| egg.js                   | ✓      | 11806.0    | 8.39    | 3.90          |
| fastify-big-json         | ✓      | 7728.5     | 12.78   | 88.74         |
| express                  | ✓      | 7123.0     | 13.87   | 1.11          |
| express-route-prefix     | ✓      | 6496.0     | 15.27   | 2.26          |
| nest                     | ✓      | 5951.7     | 16.64   | 1.23          |
| express-with-middlewares | ✓      | 5747.2     | 17.27   | 2.08          |
| frourio                  | ✓      | 5650.9     | 17.56   | 1.16          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
