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
* __Machine:__ Linux fv-az139-724 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.20.0`
* __Run:__ Sun Dec  6 09:09:49 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.1   | ✓      | 63219.2    | 1.49    | 11.27         |
| polkadot                 | 1.0.0   | ✗      | 61311.2    | 1.51    | 10.93         |
| frourio                  | 0.21.1  | ✓      | 61095.2    | 1.55    | 10.90         |
| bare                     | 10.13.0 | ✗      | 59836.0    | 1.58    | 10.67         |
| foxify                   | 0.10.20 | ✓      | 56311.2    | 1.69    | 9.24          |
| polka                    | 0.5.2   | ✓      | 56034.4    | 1.70    | 9.99          |
| rayo                     | 1.3.6   | ✓      | 54899.2    | 1.74    | 9.79          |
| nest-fastify             | 7.5.5   | ✓      | 53943.2    | 1.77    | 9.05          |
| micro                    | 9.3.4   | ✗      | 53329.6    | 1.79    | 9.51          |
| connect                  | 3.7.0   | ✗      | 52568.0    | 1.82    | 9.37          |
| yeps                     | 1.1.1   | ✗      | 51473.6    | 1.86    | 9.18          |
| server-base              | 6.1.5   | ✗      | 50408.8    | 1.90    | 8.99          |
| server-base-router       | 6.1.5   | ✓      | 49484.8    | 1.93    | 8.82          |
| micro-route              | 2.5.0   | ✓      | 48823.2    | 1.96    | 8.71          |
| connect-router           | 1.3.5   | ✓      | 48816.8    | 1.96    | 8.71          |
| trek-engine              | 1.0.5   | ✗      | 45395.0    | 2.12    | 7.45          |
| trek-router              | 1.2.0   | ✓      | 44136.2    | 2.18    | 7.24          |
| yeps-router              | 1.2.0   | ✓      | 42424.0    | 2.27    | 7.57          |
| vapr                     | 0.5.5   | ✓      | 41372.8    | 2.33    | 6.79          |
| koa                      | 2.13.0  | ✗      | 39360.8    | 2.46    | 7.02          |
| spirit                   | 0.6.1   | ✗      | 39306.4    | 2.00    | 7.01          |
| spirit-router            | 0.5.0   | ✓      | 38452.8    | 2.06    | 6.86          |
| total.js                 | 3.4.6   | ✓      | 37685.6    | 2.56    | 11.54         |
| restify                  | 8.5.1   | ✓      | 35205.8    | 2.76    | 6.35          |
| koa-router               | 7.4.0   | ✓      | 34668.2    | 2.80    | 6.18          |
| microrouter              | 3.1.3   | ✓      | 28420.8    | 3.42    | 5.07          |
| hapi                     | 18.4.1  | ✓      | 23390.8    | 4.19    | 4.17          |
| egg.js                   | 2.29.1  | ✓      | 19081.3    | 5.17    | 6.71          |
| frourio-express          | 0.21.0  | ✓      | 11555.8    | 8.53    | 2.06          |
| express                  | 4.17.1  | ✓      | 11430.6    | 8.62    | 2.04          |
| express-with-middlewares | 4.17.1  | ✓      | 10009.9    | 9.85    | 3.84          |
| nest                     | 7.5.5   | ✓      | 9705.2     | 10.19   | 2.21          |
| express-route-prefix     | 4.17.1  | ✓      | 9493.1     | 10.43   | 3.51          |
| fastify-big-json         | 3.9.1   | ✓      | 9379.5     | 10.52   | 107.90        |
