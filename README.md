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
* __Machine:__ Linux fv-az70 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Tue Oct 13 19:08:20 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 55980.8    | 1.68    | 8.76          |
| frourio                  | 0.17.2  | ✓      | 54445.6    | 1.75    | 7.89          |
| bare                     | 10.13.0 | ✗      | 51988.8    | 1.84    | 8.13          |
| fastify                  | 3.6.0   | ✓      | 51478.4    | 1.85    | 8.05          |
| nest-fastify             | 7.4.4   | ✓      | 50460.8    | 1.89    | 7.36          |
| connect                  | 3.7.0   | ✗      | 50385.6    | 1.90    | 7.88          |
| foxify                   | 0.10.20 | ✓      | 49644.0    | 1.93    | 7.05          |
| polka                    | 0.5.2   | ✓      | 49450.4    | 1.93    | 7.73          |
| micro                    | 9.3.4   | ✗      | 49229.6    | 1.94    | 7.70          |
| rayo                     | 1.3.5   | ✓      | 49200.0    | 1.94    | 7.70          |
| yeps                     | 1.1.1   | ✗      | 45812.8    | 2.09    | 7.17          |
| connect-router           | 1.3.5   | ✓      | 45228.8    | 2.12    | 7.07          |
| server-base              | 6.1.5   | ✗      | 44708.8    | 2.15    | 6.99          |
| server-base-router       | 6.1.5   | ✓      | 44473.6    | 2.16    | 6.96          |
| micro-route              | 2.5.0   | ✓      | 42812.8    | 2.25    | 6.70          |
| trek-router              | 1.2.0   | ✓      | 42268.6    | 2.28    | 6.01          |
| trek-engine              | 1.0.5   | ✗      | 41042.2    | 2.35    | 5.83          |
| vapr                     | 0.5.5   | ✓      | 38643.2    | 2.50    | 5.49          |
| koa                      | 2.13.0  | ✗      | 37785.0    | 2.56    | 5.91          |
| yeps-router              | 1.2.0   | ✓      | 37756.0    | 2.56    | 5.91          |
| spirit                   | 0.6.1   | ✗      | 36749.8    | 2.14    | 5.75          |
| spirit-router            | 0.5.0   | ✓      | 35041.8    | 2.26    | 5.48          |
| total.js                 | 3.4.5   | ✓      | 34548.6    | 2.80    | 9.82          |
| koa-router               | 7.4.0   | ✓      | 32944.8    | 2.95    | 5.15          |
| restify                  | 8.5.1   | ✓      | 32356.8    | 3.00    | 5.12          |
| microrouter              | 3.1.3   | ✓      | 26723.2    | 3.64    | 4.18          |
| hapi                     | 18.4.1  | ✓      | 22222.4    | 4.42    | 3.48          |
| egg.js                   | 2.28.0  | ✓      | 18468.3    | 5.35    | 6.09          |
| frourio-express          | 0.17.1  | ✓      | 10767.6    | 9.16    | 1.55          |
| express                  | 4.17.1  | ✓      | 10593.6    | 9.31    | 1.66          |
| express-route-prefix     | 4.17.1  | ✓      | 9434.6     | 10.50   | 3.28          |
| nest                     | 7.4.4   | ✓      | 9314.0     | 10.61   | 1.92          |
| express-with-middlewares | 4.17.1  | ✓      | 9123.3     | 10.81   | 3.30          |
| fastify-big-json         | 3.6.0   | ✓      | 9012.4     | 10.95   | 103.49        |
