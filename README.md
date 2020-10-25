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
* __Machine:__ Linux fv-az70 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sun Oct 25 11:31:18 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.7.0   | ✓      | 61130.4    | 1.54    | 10.90         |
| polkadot                 | 1.0.0   | ✗      | 59105.6    | 1.57    | 10.54         |
| bare                     | 10.13.0 | ✗      | 58247.2    | 1.63    | 10.39         |
| frourio                  | 0.18.1  | ✓      | 56148.8    | 1.69    | 10.01         |
| connect                  | 3.7.0   | ✗      | 56104.0    | 1.69    | 10.01         |
| foxify                   | 0.10.20 | ✓      | 54869.6    | 1.74    | 9.00          |
| polka                    | 0.5.2   | ✓      | 53155.2    | 1.80    | 9.48          |
| nest-fastify             | 7.4.4   | ✓      | 52766.4    | 1.81    | 8.86          |
| rayo                     | 1.3.5   | ✓      | 52614.4    | 1.82    | 9.38          |
| micro                    | 9.3.4   | ✗      | 51953.6    | 1.84    | 9.27          |
| yeps                     | 1.1.1   | ✗      | 50579.2    | 1.89    | 9.02          |
| connect-router           | 1.3.5   | ✓      | 48992.8    | 1.95    | 8.74          |
| micro-route              | 2.5.0   | ✓      | 48269.6    | 1.98    | 8.61          |
| server-base-router       | 6.1.5   | ✓      | 48175.2    | 1.99    | 8.59          |
| server-base              | 6.1.5   | ✗      | 47772.8    | 2.01    | 8.52          |
| trek-engine              | 1.0.5   | ✗      | 43943.0    | 2.19    | 7.21          |
| trek-router              | 1.2.0   | ✓      | 43772.8    | 2.20    | 7.18          |
| yeps-router              | 1.2.0   | ✓      | 41566.4    | 2.32    | 7.41          |
| vapr                     | 0.5.5   | ✓      | 39480.0    | 2.44    | 6.48          |
| koa                      | 2.13.0  | ✗      | 39440.2    | 2.45    | 7.03          |
| spirit                   | 0.6.1   | ✗      | 37460.8    | 2.05    | 6.68          |
| total.js                 | 3.4.5   | ✓      | 37083.2    | 2.61    | 11.35         |
| spirit-router            | 0.5.0   | ✓      | 36815.2    | 2.11    | 6.57          |
| koa-router               | 7.4.0   | ✓      | 35410.6    | 2.74    | 6.32          |
| restify                  | 8.5.1   | ✓      | 34865.4    | 2.78    | 6.28          |
| microrouter              | 3.1.3   | ✓      | 28239.6    | 3.44    | 5.04          |
| hapi                     | 18.4.1  | ✓      | 22686.4    | 4.32    | 4.05          |
| egg.js                   | 2.29.1  | ✓      | 18988.5    | 5.20    | 6.68          |
| express                  | 4.17.1  | ✓      | 11520.6    | 8.56    | 2.05          |
| frourio-express          | 0.18.1  | ✓      | 11498.0    | 8.57    | 2.05          |
| express-with-middlewares | 4.17.1  | ✓      | 10016.6    | 9.85    | 3.84          |
| nest                     | 7.4.4   | ✓      | 9635.0     | 10.26   | 2.20          |
| fastify-big-json         | 3.7.0   | ✓      | 9550.9     | 10.33   | 109.88        |
| express-route-prefix     | 4.17.1  | ✓      | 9201.3     | 10.77   | 3.40          |
