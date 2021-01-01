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
* __Machine:__ Linux fv-az121-503 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.1`
* __Run:__ Fri Jan  1 01:13:40 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.22.0  | ✓      | 61544.0    | 1.53    | 10.98         |
| fastify                  | 3.9.2   | ✓      | 59092.8    | 1.60    | 10.54         |
| polkadot                 | 1.0.0   | ✗      | 59017.6    | 1.57    | 10.53         |
| polka                    | 0.5.2   | ✓      | 57917.6    | 1.64    | 10.33         |
| foxify                   | 0.10.20 | ✓      | 56364.8    | 1.69    | 9.25          |
| connect                  | 3.7.0   | ✗      | 55804.0    | 1.71    | 9.95          |
| bare                     | 10.13.0 | ✗      | 54244.8    | 1.76    | 9.67          |
| micro                    | 9.3.4   | ✗      | 54053.6    | 1.76    | 9.64          |
| nest-fastify             | 7.6.5   | ✓      | 54034.4    | 1.77    | 9.07          |
| rayo                     | 1.3.6   | ✓      | 53755.2    | 1.77    | 9.59          |
| yeps                     | 1.1.1   | ✗      | 50848.8    | 1.88    | 9.07          |
| server-base-router       | 6.1.5   | ✓      | 50216.0    | 1.90    | 8.96          |
| connect-router           | 1.3.5   | ✓      | 49711.2    | 1.92    | 8.87          |
| server-base              | 6.1.5   | ✗      | 49440.0    | 1.93    | 8.82          |
| micro-route              | 2.5.0   | ✓      | 49432.8    | 1.93    | 8.82          |
| trek-engine              | 1.0.5   | ✗      | 44041.6    | 2.19    | 7.22          |
| koa                      | 2.13.0  | ✗      | 41391.2    | 2.33    | 7.38          |
| yeps-router              | 1.2.0   | ✓      | 41357.6    | 2.33    | 7.38          |
| trek-router              | 1.2.0   | ✓      | 41000.5    | 2.36    | 6.73          |
| vapr                     | 0.5.5   | ✓      | 40406.4    | 2.38    | 6.63          |
| spirit-router            | 0.5.0   | ✓      | 38649.6    | 2.03    | 6.89          |
| spirit                   | 0.6.1   | ✗      | 38624.8    | 2.03    | 6.89          |
| koa-router               | 7.4.0   | ✓      | 36995.0    | 2.62    | 6.60          |
| total.js                 | 3.4.6   | ✓      | 36647.8    | 2.63    | 11.22         |
| restify                  | 8.5.1   | ✓      | 35917.8    | 2.70    | 6.47          |
| microrouter              | 3.1.3   | ✓      | 28967.6    | 3.35    | 5.17          |
| hapi                     | 18.4.1  | ✓      | 23400.8    | 4.19    | 4.17          |
| egg.js                   | 2.29.1  | ✓      | 18564.7    | 5.31    | 6.53          |
| express                  | 4.17.1  | ✓      | 11552.4    | 8.53    | 2.06          |
| frourio-express          | 0.22.0  | ✓      | 11446.4    | 8.61    | 2.04          |
| fastify-big-json         | 3.9.2   | ✓      | 9999.4     | 9.87    | 115.04        |
| nest                     | 7.6.5   | ✓      | 9816.6     | 10.07   | 2.24          |
| express-route-prefix     | 4.17.1  | ✓      | 9524.0     | 10.40   | 3.52          |
| express-with-middlewares | 4.17.1  | ✓      | 9431.5     | 10.46   | 3.62          |
