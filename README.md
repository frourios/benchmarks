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
* __Machine:__ Linux fv-az213-823 5.11.0-1021-azure #22~20.04.1-Ubuntu SMP Fri Oct 29 01:11:25 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.18.1`
* __Run:__ Wed Dec  1 01:17:23 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 54555.2    | 1.72    | 9.73          |
| bare                     | 14.15.1 | ✗      | 52232.0    | 1.83    | 9.32          |
| fastify                  | 3.24.1  | ✓      | 50755.2    | 1.88    | 9.05          |
| connect                  | 3.7.0   | ✗      | 50400.8    | 1.90    | 8.99          |
| connect-router           | 1.3.6   | ✓      | 49701.6    | 1.92    | 8.86          |
| frourio                  | 0.23.1  | ✓      | 49525.6    | 1.93    | 8.83          |
| foxify                   | 0.10.20 | ✓      | 48956.8    | 1.96    | 8.03          |
| polka                    | 0.5.2   | ✓      | 48075.2    | 1.99    | 8.57          |
| micro                    | 9.3.4   | ✗      | 47396.8    | 2.02    | 8.45          |
| rayo                     | 1.3.6   | ✓      | 46294.4    | 2.07    | 8.26          |
| nest-fastify             | 7.6.18  | ✓      | 45482.4    | 2.11    | 7.63          |
| yeps                     | 1.1.1   | ✗      | 44310.4    | 2.17    | 7.90          |
| micro-route              | 2.5.0   | ✓      | 43906.4    | 2.19    | 7.83          |
| server-base              | 6.1.5   | ✗      | 43716.0    | 2.20    | 7.80          |
| server-base-router       | 6.1.5   | ✓      | 43600.8    | 2.21    | 7.78          |
| trek-engine              | 1.0.5   | ✗      | 40231.0    | 2.40    | 6.60          |
| trek-router              | 1.2.0   | ✓      | 39797.4    | 2.43    | 6.53          |
| yeps-router              | 1.2.0   | ✓      | 38020.2    | 2.54    | 6.78          |
| koa                      | 2.13.4  | ✗      | 37574.6    | 2.58    | 6.70          |
| vapr                     | 0.5.5   | ✓      | 37003.4    | 2.61    | 6.07          |
| spirit                   | 0.6.1   | ✗      | 34557.0    | 2.24    | 6.16          |
| total.js                 | 3.4.13  | ✓      | 34294.2    | 2.82    | 10.50         |
| koa-router               | 7.4.0   | ✓      | 33902.2    | 2.87    | 6.05          |
| spirit-router            | 0.5.0   | ✓      | 33237.8    | 2.38    | 5.93          |
| restify                  | 8.6.0   | ✓      | 33091.6    | 2.94    | 5.96          |
| hapi                     | 20.2.1  | ✓      | 28135.2    | 3.47    | 5.02          |
| microrouter              | 3.1.3   | ✓      | 27272.4    | 3.57    | 4.86          |
| egg.js                   | 2.32.0  | ✓      | 19489.7    | 5.05    | 6.86          |
| frourio-express          | 0.23.0  | ✓      | 12070.8    | 8.17    | 2.15          |
| express                  | 4.17.1  | ✓      | 11891.0    | 8.29    | 2.12          |
| express-with-middlewares | 4.17.1  | ✓      | 10620.4    | 9.28    | 4.07          |
| express-route-prefix     | 4.17.1  | ✓      | 10400.8    | 9.52    | 3.85          |
| nest                     | 7.6.18  | ✓      | 10027.8    | 9.85    | 2.29          |
| fastify-big-json         | 3.24.1  | ✓      | 9896.6     | 9.97    | 113.86        |
