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
* __Machine:__ Linux fv-az1259-722 5.15.0-1037-azure #44-Ubuntu SMP Thu Apr 20 13:19:31 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.20.0`
* __Run:__ Thu Jun  1 00:53:56 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 63736.0    | 1.45    | 11.37         |
| frourio                  | 0.31.1  | ✓      | 59173.6    | 1.61    | 10.61         |
| foxify                   | 0.10.20 | ✓      | 58734.4    | 1.62    | 9.63          |
| polka                    | 0.5.2   | ✓      | 56138.4    | 1.70    | 10.01         |
| fastify                  | 4.17.0  | ✓      | 56044.0    | 1.70    | 10.05         |
| bare                     | 14.15.1 | ✗      | 55915.2    | 1.70    | 9.97          |
| connect                  | 3.7.0   | ✗      | 54409.6    | 1.75    | 9.70          |
| micro                    | 9.4.1   | ✗      | 54227.2    | 1.76    | 9.67          |
| server-base-router       | 6.1.5   | ✓      | 52031.2    | 1.83    | 9.28          |
| yeps                     | 1.1.1   | ✗      | 51799.2    | 1.84    | 9.24          |
| nest-fastify             | 7.6.18  | ✓      | 51518.4    | 1.86    | 8.65          |
| server-base              | 6.1.5   | ✗      | 50520.8    | 1.89    | 9.01          |
| micro-route              | 2.5.0   | ✓      | 50484.0    | 1.89    | 9.00          |
| connect-router           | 1.3.8   | ✓      | 48948.4    | 1.96    | 8.73          |
| trek-engine              | 1.0.5   | ✗      | 47802.4    | 2.01    | 7.84          |
| trek-router              | 1.2.0   | ✓      | 45990.2    | 2.09    | 7.54          |
| vapr                     | 0.5.5   | ✓      | 44373.6    | 2.16    | 7.28          |
| koa                      | 2.14.2  | ✗      | 43640.0    | 2.21    | 7.78          |
| spirit                   | 0.6.1   | ✗      | 42045.6    | 1.88    | 7.50          |
| spirit-router            | 0.5.0   | ✓      | 41372.0    | 1.94    | 7.38          |
| yeps-router              | 1.2.0   | ✓      | 41251.2    | 2.34    | 7.36          |
| restify                  | 8.6.1   | ✓      | 40757.4    | 2.37    | 7.35          |
| total.js                 | 3.4.13  | ✓      | 40168.0    | 2.40    | 12.30         |
| koa-router               | 7.4.0   | ✓      | 38325.4    | 2.53    | 6.83          |
| microrouter              | 3.1.3   | ✓      | 33755.4    | 2.87    | 6.02          |
| hapi                     | 20.3.0  | ✓      | 33595.0    | 2.89    | 5.99          |
| egg.js                   | 2.37.0  | ✓      | 16306.5    | 6.06    | 5.74          |
| frourio-express          | 0.31.1  | ✓      | 12000.0    | 8.21    | 2.14          |
| express                  | 4.18.2  | ✓      | 11714.4    | 8.42    | 2.09          |
| fastify-big-json         | 4.17.0  | ✓      | 11443.6    | 8.62    | 131.66        |
| express-route-prefix     | 4.18.2  | ✓      | 11120.0    | 8.91    | 4.11          |
| nest                     | 7.6.18  | ✓      | 10614.4    | 9.31    | 2.42          |
| express-with-middlewares | 4.18.2  | ✓      | 10428.4    | 9.46    | 4.00          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
