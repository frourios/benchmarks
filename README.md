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
* __Machine:__ Linux fv-az389-631 5.15.0-1031-azure #38-Ubuntu SMP Mon Jan 9 12:49:59 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.19.0`
* __Run:__ Wed Feb  1 00:53:32 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 61421.6    | 1.52    | 10.95         |
| bare                     | 14.15.1 | ✗      | 55999.2    | 1.70    | 9.99          |
| fastify                  | 4.12.0  | ✓      | 54393.6    | 1.75    | 9.75          |
| polka                    | 0.5.2   | ✓      | 54181.6    | 1.76    | 9.66          |
| foxify                   | 0.10.20 | ✓      | 53512.8    | 1.78    | 8.78          |
| micro                    | 9.4.1   | ✗      | 52246.4    | 1.83    | 9.32          |
| frourio                  | 0.31.1  | ✓      | 52169.6    | 1.83    | 9.35          |
| connect                  | 3.7.0   | ✗      | 52135.2    | 1.83    | 9.30          |
| nest-fastify             | 7.6.18  | ✓      | 50481.6    | 1.90    | 8.47          |
| yeps                     | 1.1.1   | ✗      | 50014.4    | 1.91    | 8.92          |
| connect-router           | 1.3.7   | ✓      | 48138.4    | 1.99    | 8.58          |
| micro-route              | 2.5.0   | ✓      | 48029.6    | 1.99    | 8.57          |
| server-base              | 6.1.5   | ✗      | 47950.4    | 2.00    | 8.55          |
| server-base-router       | 6.1.5   | ✓      | 46780.8    | 2.05    | 8.34          |
| trek-engine              | 1.0.5   | ✗      | 45943.2    | 2.10    | 7.54          |
| trek-router              | 1.2.0   | ✓      | 45032.6    | 2.14    | 7.39          |
| vapr                     | 0.5.5   | ✓      | 41687.2    | 2.31    | 6.84          |
| koa                      | 2.14.1  | ✗      | 40633.0    | 2.38    | 7.25          |
| restify                  | 8.6.1   | ✓      | 38977.8    | 2.48    | 7.03          |
| spirit                   | 0.6.1   | ✗      | 38792.8    | 2.08    | 6.92          |
| spirit-router            | 0.5.0   | ✓      | 38508.0    | 2.10    | 6.87          |
| yeps-router              | 1.2.0   | ✓      | 38327.2    | 2.52    | 6.83          |
| total.js                 | 3.4.13  | ✓      | 37683.8    | 2.56    | 11.54         |
| koa-router               | 7.4.0   | ✓      | 36159.4    | 2.68    | 6.45          |
| microrouter              | 3.1.3   | ✓      | 30647.2    | 3.17    | 5.47          |
| hapi                     | 20.2.2  | ✓      | 30311.2    | 3.22    | 5.40          |
| egg.js                   | 2.37.0  | ✓      | 14555.8    | 6.80    | 5.12          |
| frourio-express          | 0.31.1  | ✓      | 10727.1    | 9.19    | 1.91          |
| express                  | 4.18.2  | ✓      | 10354.5    | 9.53    | 1.85          |
| fastify-big-json         | 4.12.0  | ✓      | 9871.4     | 10.00   | 113.56        |
| express-route-prefix     | 4.18.2  | ✓      | 9867.4     | 10.05   | 3.65          |
| express-with-middlewares | 4.18.2  | ✓      | 9276.3     | 10.64   | 3.56          |
| nest                     | 7.6.18  | ✓      | 9073.5     | 10.90   | 2.07          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
