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
* __Machine:__ Linux fv-az413-740 5.15.0-1024-azure #30-Ubuntu SMP Wed Nov 16 23:37:59 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.18.1`
* __Run:__ Sun Jan  1 00:53:14 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 59728.8    | 1.56    | 10.65         |
| bare                     | 14.15.1 | ✗      | 56576.0    | 1.68    | 10.09         |
| foxify                   | 0.10.20 | ✓      | 56000.0    | 1.70    | 9.19          |
| frourio                  | 0.31.1  | ✓      | 55728.0    | 1.71    | 9.99          |
| polka                    | 0.5.2   | ✓      | 54952.0    | 1.73    | 9.80          |
| fastify                  | 4.10.2  | ✓      | 54076.0    | 1.76    | 9.70          |
| micro                    | 9.4.1   | ✗      | 53968.0    | 1.77    | 9.62          |
| connect                  | 3.7.0   | ✗      | 53730.4    | 1.77    | 9.58          |
| nest-fastify             | 7.6.18  | ✓      | 50581.6    | 1.89    | 8.49          |
| yeps                     | 1.1.1   | ✗      | 49564.0    | 1.93    | 8.84          |
| connect-router           | 1.3.7   | ✓      | 48406.4    | 1.98    | 8.63          |
| server-base              | 6.1.5   | ✗      | 47706.4    | 2.01    | 8.51          |
| server-base-router       | 6.1.5   | ✓      | 47051.2    | 2.04    | 8.39          |
| micro-route              | 2.5.0   | ✓      | 46760.8    | 2.05    | 8.34          |
| trek-engine              | 1.0.5   | ✗      | 45578.4    | 2.11    | 7.48          |
| trek-router              | 1.2.0   | ✓      | 44027.4    | 2.19    | 7.22          |
| vapr                     | 0.5.5   | ✓      | 42547.0    | 2.26    | 6.98          |
| koa                      | 2.14.1  | ✗      | 40700.0    | 2.37    | 7.26          |
| yeps-router              | 1.2.0   | ✓      | 40327.2    | 2.39    | 7.19          |
| spirit-router            | 0.5.0   | ✓      | 38869.6    | 2.02    | 6.93          |
| restify                  | 8.6.1   | ✓      | 38761.0    | 2.49    | 6.99          |
| spirit                   | 0.6.1   | ✗      | 38386.4    | 2.03    | 6.85          |
| total.js                 | 3.4.13  | ✓      | 38060.6    | 2.53    | 11.65         |
| koa-router               | 7.4.0   | ✓      | 36498.2    | 2.66    | 6.51          |
| microrouter              | 3.1.3   | ✓      | 31382.4    | 3.09    | 5.60          |
| hapi                     | 20.2.2  | ✓      | 30398.4    | 3.21    | 5.42          |
| egg.js                   | 2.37.0  | ✓      | 14788.0    | 6.69    | 5.20          |
| frourio-express          | 0.31.1  | ✓      | 10731.3    | 9.19    | 1.91          |
| express                  | 4.18.2  | ✓      | 10428.8    | 9.46    | 1.86          |
| fastify-big-json         | 4.10.2  | ✓      | 9905.3     | 9.97    | 113.96        |
| express-route-prefix     | 4.18.2  | ✓      | 9874.5     | 10.04   | 3.65          |
| express-with-middlewares | 4.18.2  | ✓      | 9387.9     | 10.51   | 3.60          |
| nest                     | 7.6.18  | ✓      | 9173.3     | 10.78   | 2.09          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
