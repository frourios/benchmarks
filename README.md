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
* __Machine:__ Linux fv-az191-94 5.13.0-1022-azure #26~20.04.1-Ubuntu SMP Thu Apr 7 19:42:45 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.1`
* __Run:__ Sun May  1 01:46:04 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 56904.8    | 1.65    | 10.15         |
| bare                     | 14.15.1 | ✗      | 53047.2    | 1.79    | 9.46          |
| fastify                  | 3.29.0  | ✓      | 52671.2    | 1.81    | 9.39          |
| rayo                     | 1.3.10  | ✓      | 51349.6    | 1.86    | 9.16          |
| foxify                   | 0.10.20 | ✓      | 51312.0    | 1.86    | 8.42          |
| frourio                  | 0.26.0  | ✓      | 51185.6    | 1.87    | 9.13          |
| polka                    | 0.5.2   | ✓      | 51074.4    | 1.87    | 9.11          |
| micro                    | 9.3.4   | ✗      | 50701.6    | 1.89    | 9.04          |
| connect                  | 3.7.0   | ✗      | 48345.6    | 1.98    | 8.62          |
| yeps                     | 1.1.1   | ✗      | 47939.2    | 2.00    | 8.55          |
| nest-fastify             | 7.6.18  | ✓      | 47825.6    | 2.00    | 8.03          |
| server-base              | 6.1.5   | ✗      | 46552.0    | 2.06    | 8.30          |
| server-base-router       | 6.1.5   | ✓      | 46297.6    | 2.07    | 8.26          |
| micro-route              | 2.5.0   | ✓      | 45512.8    | 2.11    | 8.12          |
| connect-router           | 1.3.7   | ✓      | 45512.0    | 2.11    | 8.12          |
| trek-router              | 1.2.0   | ✓      | 42539.2    | 2.27    | 6.98          |
| trek-engine              | 1.0.5   | ✗      | 41554.6    | 2.32    | 6.82          |
| vapr                     | 0.5.5   | ✓      | 39764.8    | 2.43    | 6.52          |
| yeps-router              | 1.2.0   | ✓      | 39570.4    | 2.44    | 7.06          |
| koa                      | 2.13.4  | ✗      | 37883.4    | 2.56    | 6.76          |
| total.js                 | 3.4.13  | ✓      | 36979.6    | 2.61    | 11.32         |
| spirit                   | 0.6.1   | ✗      | 36624.8    | 2.20    | 6.53          |
| spirit-router            | 0.5.0   | ✓      | 35081.8    | 2.30    | 6.26          |
| restify                  | 8.6.1   | ✓      | 34646.2    | 2.80    | 6.25          |
| koa-router               | 7.4.0   | ✓      | 34471.0    | 2.82    | 6.15          |
| hapi                     | 20.2.2  | ✓      | 28149.6    | 3.47    | 5.02          |
| microrouter              | 3.1.3   | ✓      | 27761.6    | 3.51    | 4.95          |
| egg.js                   | 2.35.0  | ✓      | 18409.3    | 5.36    | 6.48          |
| express                  | 4.18.1  | ✓      | 12091.8    | 8.15    | 2.16          |
| frourio-express          | 0.26.0  | ✓      | 11943.8    | 8.25    | 2.13          |
| express-with-middlewares | 4.18.1  | ✓      | 10235.8    | 9.64    | 3.92          |
| express-route-prefix     | 4.18.1  | ✓      | 10118.6    | 9.80    | 3.74          |
| nest                     | 7.6.18  | ✓      | 10084.9    | 9.80    | 2.30          |
| fastify-big-json         | 3.29.0  | ✓      | 9748.5     | 10.12   | 112.14        |
