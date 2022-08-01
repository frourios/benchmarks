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
* __Machine:__ Linux fv-az152-595 5.15.0-1014-azure #17~20.04.1-Ubuntu SMP Thu Jun 23 20:01:51 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.20.0`
* __Run:__ Mon Aug  1 01:50:12 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 64556.0    | 1.43    | 11.51         |
| frourio                  | 0.26.0  | ✓      | 58455.2    | 1.63    | 10.42         |
| bare                     | 14.15.1 | ✗      | 57912.8    | 1.64    | 10.33         |
| fastify                  | 3.29.1  | ✓      | 57006.4    | 1.67    | 10.17         |
| foxify                   | 0.10.20 | ✓      | 56902.4    | 1.68    | 9.33          |
| connect                  | 3.7.0   | ✗      | 56765.6    | 1.68    | 10.12         |
| polka                    | 0.5.2   | ✓      | 56147.2    | 1.70    | 10.01         |
| micro                    | 9.4.1   | ✗      | 55422.4    | 1.72    | 9.88          |
| rayo                     | 1.3.10  | ✓      | 54911.2    | 1.74    | 9.79          |
| yeps                     | 1.1.1   | ✗      | 53362.4    | 1.79    | 9.52          |
| micro-route              | 2.5.0   | ✓      | 52164.8    | 1.83    | 9.30          |
| server-base-router       | 6.1.5   | ✓      | 51674.4    | 1.85    | 9.22          |
| connect-router           | 1.3.7   | ✓      | 51135.0    | 1.87    | 9.12          |
| server-base              | 6.1.5   | ✗      | 49759.2    | 1.93    | 8.87          |
| trek-router              | 1.2.0   | ✓      | 47276.0    | 2.04    | 7.76          |
| trek-engine              | 1.0.5   | ✗      | 47252.0    | 2.04    | 7.75          |
| vapr                     | 0.5.5   | ✓      | 44830.4    | 2.14    | 7.35          |
| yeps-router              | 1.2.0   | ✓      | 43902.4    | 2.19    | 7.83          |
| spirit                   | 0.6.1   | ✗      | 43304.0    | 1.93    | 7.72          |
| koa                      | 2.13.4  | ✗      | 42498.4    | 2.27    | 7.58          |
| spirit-router            | 0.5.0   | ✓      | 42308.8    | 1.98    | 7.55          |
| total.js                 | 3.4.13  | ✓      | 41576.8    | 2.32    | 12.73         |
| nest-fastify             | 7.6.18  | ✓      | 41200.8    | 2.35    | 6.92          |
| koa-router               | 7.4.0   | ✓      | 39053.6    | 2.48    | 6.96          |
| restify                  | 8.6.1   | ✓      | 38015.8    | 2.55    | 6.85          |
| hapi                     | 20.2.2  | ✓      | 32985.0    | 2.95    | 5.88          |
| microrouter              | 3.1.3   | ✓      | 32661.0    | 2.97    | 5.82          |
| egg.js                   | 2.36.0  | ✓      | 19791.5    | 4.97    | 6.96          |
| frourio-express          | 0.26.0  | ✓      | 13666.2    | 7.21    | 2.44          |
| express                  | 4.18.1  | ✓      | 13480.0    | 7.31    | 2.40          |
| nest                     | 7.6.18  | ✓      | 12212.2    | 8.09    | 2.78          |
| express-route-prefix     | 4.18.1  | ✓      | 11700.6    | 8.47    | 4.33          |
| express-with-middlewares | 4.18.1  | ✓      | 11695.8    | 8.43    | 4.48          |
| fastify-big-json         | 3.29.1  | ✓      | 11653.0    | 8.46    | 134.05        |
