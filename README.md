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
* __Machine:__ Linux fv-az214-593 5.11.0-1028-azure #31~20.04.2-Ubuntu SMP Tue Jan 18 08:46:15 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.0`
* __Run:__ Mon Feb 14 10:59:34 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 60489.6    | 1.54    | 10.79         |
| fastify                  | 3.27.1  | ✓      | 54913.6    | 1.74    | 9.79          |
| bare                     | 14.15.1 | ✗      | 53820.0    | 1.77    | 9.60          |
| foxify                   | 0.10.20 | ✓      | 53732.0    | 1.78    | 8.81          |
| polka                    | 0.5.2   | ✓      | 53208.0    | 1.80    | 9.49          |
| frourio                  | 0.26.0  | ✓      | 52799.2    | 1.81    | 9.42          |
| micro                    | 9.3.4   | ✗      | 52664.0    | 1.82    | 9.39          |
| rayo                     | 1.3.10  | ✓      | 52651.2    | 1.82    | 9.39          |
| nest-fastify             | 7.6.18  | ✓      | 50225.6    | 1.91    | 8.43          |
| yeps                     | 1.1.1   | ✗      | 50167.2    | 1.91    | 8.95          |
| server-base-router       | 6.1.5   | ✓      | 50094.4    | 1.91    | 8.93          |
| connect                  | 3.7.0   | ✗      | 50025.6    | 1.91    | 8.92          |
| server-base              | 6.1.5   | ✗      | 49292.0    | 1.94    | 8.79          |
| micro-route              | 2.5.0   | ✓      | 47710.4    | 2.01    | 8.51          |
| connect-router           | 1.3.6   | ✓      | 47040.8    | 2.04    | 8.39          |
| trek-engine              | 1.0.5   | ✗      | 45692.0    | 2.11    | 7.50          |
| trek-router              | 1.2.0   | ✓      | 45020.8    | 2.14    | 7.38          |
| vapr                     | 0.5.5   | ✓      | 43675.2    | 2.20    | 7.16          |
| yeps-router              | 1.2.0   | ✓      | 42098.4    | 2.29    | 7.51          |
| koa                      | 2.13.4  | ✗      | 41202.4    | 2.34    | 7.35          |
| spirit                   | 0.6.1   | ✗      | 39693.6    | 2.01    | 7.08          |
| total.js                 | 3.4.13  | ✓      | 38643.2    | 2.50    | 11.83         |
| spirit-router            | 0.5.0   | ✓      | 38220.0    | 2.11    | 6.82          |
| koa-router               | 7.4.0   | ✓      | 37079.4    | 2.62    | 6.61          |
| restify                  | 8.6.1   | ✓      | 36792.2    | 2.64    | 6.63          |
| hapi                     | 20.2.1  | ✓      | 31943.6    | 3.05    | 5.70          |
| microrouter              | 3.1.3   | ✓      | 30628.0    | 3.17    | 5.46          |
| egg.js                   | 2.33.1  | ✓      | 19613.3    | 5.01    | 6.90          |
| frourio-express          | 0.26.0  | ✓      | 13291.2    | 7.41    | 2.37          |
| express                  | 4.17.2  | ✓      | 12769.2    | 7.72    | 2.28          |
| nest                     | 7.6.18  | ✓      | 11972.8    | 8.25    | 2.73          |
| express-route-prefix     | 4.17.2  | ✓      | 11832.1    | 8.37    | 4.38          |
| express-with-middlewares | 4.17.2  | ✓      | 11741.0    | 8.39    | 4.50          |
| fastify-big-json         | 3.27.1  | ✓      | 11244.0    | 8.77    | 129.35        |
