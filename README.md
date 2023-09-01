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
* __Machine:__ Linux fv-az451-60 5.15.0-1041-azure #48-Ubuntu SMP Tue Jun 20 20:34:08 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v18.17.1`
* __Run:__ Fri Sep  1 01:04:12 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 14.15.1 | ✗      | 28919.2    | 3.36    | 5.16          |
| spirit                   | 0.6.1   | ✗      | 28215.6    | 3.20    | 5.03          |
| micro                    | 9.4.1   | ✗      | 28062.0    | 3.47    | 5.00          |
| polka                    | 0.5.2   | ✓      | 27272.0    | 3.56    | 4.86          |
| fastify                  | 4.22.1  | ✓      | 27231.2    | 3.57    | 4.88          |
| nest-fastify             | 7.6.18  | ✓      | 26824.0    | 3.64    | 4.50          |
| frourio                  | 0.34.1  | ✓      | 26671.2    | 3.65    | 4.78          |
| connect                  | 3.7.0   | ✗      | 26581.6    | 3.66    | 4.74          |
| foxify                   | 0.10.20 | ✓      | 25990.0    | 3.75    | 4.26          |
| spirit-router            | 0.5.0   | ✓      | 25019.2    | 3.52    | 4.46          |
| server-base              | 6.1.5   | ✗      | 24304.8    | 4.01    | 4.33          |
| server-base-router       | 6.1.5   | ✓      | 23839.6    | 4.09    | 4.25          |
| yeps                     | 1.1.1   | ✗      | 23800.0    | 4.10    | 4.24          |
| connect-router           | 1.3.8   | ✓      | 23315.1    | 4.19    | 4.16          |
| micro-route              | 2.5.0   | ✓      | 23237.2    | 4.20    | 4.14          |
| polkadot                 | 1.0.0   | ✗      | 22531.6    | 4.36    | 4.02          |
| koa                      | 2.14.2  | ✗      | 21792.4    | 4.50    | 3.89          |
| trek-engine              | 1.0.5   | ✗      | 21411.2    | 4.58    | 3.51          |
| trek-router              | 1.2.0   | ✓      | 21305.1    | 4.60    | 3.49          |
| yeps-router              | 1.2.0   | ✓      | 21191.2    | 4.62    | 3.78          |
| vapr                     | 0.5.5   | ✓      | 20981.3    | 4.66    | 3.44          |
| koa-router               | 7.4.0   | ✓      | 19767.7    | 4.98    | 3.53          |
| microrouter              | 3.1.3   | ✓      | 17158.0    | 5.73    | 3.06          |
| egg.js                   | 2.37.0  | ✓      | 7810.3     | 12.72   | 2.75          |
| fastify-big-json         | 4.22.1  | ✓      | 7482.1     | 13.22   | 86.09         |
| frourio-express          | 0.34.0  | ✓      | 6148.8     | 16.09   | 1.10          |
| express                  | 4.18.2  | ✓      | 5986.7     | 16.53   | 1.07          |
| express-route-prefix     | 4.18.2  | ✓      | 5938.7     | 16.71   | 2.20          |
| express-with-middlewares | 4.18.2  | ✓      | 5375.0     | 18.47   | 2.06          |
| nest                     | 7.6.18  | ✓      | 5152.9     | 19.22   | 1.17          |
| hapi                     | 20.3.0  | ✓      | N/A        | N/A     | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A     | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A     | N/A           |
