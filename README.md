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
* __Machine:__ Linux fv-az213-71 5.4.0-1047-azure #49-Ubuntu SMP Thu Apr 22 14:30:37 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.17.0`
* __Run:__ Tue Jun  1 02:12:13 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 38753.4    | 2.46    | 6.91          |
| frourio                  | 0.23.1  | ✓      | 36282.2    | 2.66    | 6.47          |
| foxify                   | 0.10.20 | ✓      | 35972.2    | 2.68    | 5.90          |
| micro                    | 9.3.4   | ✗      | 35723.6    | 2.70    | 6.37          |
| connect                  | 3.7.0   | ✗      | 34578.4    | 2.80    | 6.17          |
| bare                     | 14.15.1 | ✗      | 34296.2    | 2.82    | 6.12          |
| rayo                     | 1.3.6   | ✓      | 33802.8    | 2.86    | 6.03          |
| polka                    | 0.5.2   | ✓      | 33405.8    | 2.90    | 5.96          |
| fastify                  | 3.17.0  | ✓      | 32332.6    | 2.99    | 5.77          |
| nest-fastify             | 7.6.17  | ✓      | 31348.2    | 3.09    | 5.26          |
| server-base              | 6.1.5   | ✗      | 30402.8    | 3.19    | 5.42          |
| connect-router           | 1.3.5   | ✓      | 30146.0    | 3.22    | 5.38          |
| micro-route              | 2.5.0   | ✓      | 30115.2    | 3.22    | 5.37          |
| server-base-router       | 6.1.5   | ✓      | 30023.6    | 3.23    | 5.35          |
| yeps                     | 1.1.1   | ✗      | 29524.4    | 3.29    | 5.27          |
| trek-engine              | 1.0.5   | ✗      | 29424.0    | 3.31    | 4.83          |
| spirit-router            | 0.5.0   | ✓      | 28949.6    | 3.16    | 5.16          |
| spirit                   | 0.6.1   | ✗      | 28755.6    | 3.18    | 5.13          |
| trek-router              | 1.2.0   | ✓      | 28460.8    | 3.42    | 4.67          |
| yeps-router              | 1.2.0   | ✓      | 27385.6    | 3.55    | 4.88          |
| koa                      | 2.13.1  | ✗      | 26406.4    | 3.69    | 4.71          |
| vapr                     | 0.5.5   | ✓      | 24883.2    | 3.91    | 4.08          |
| restify                  | 8.5.1   | ✓      | 23552.4    | 4.15    | 4.24          |
| koa-router               | 7.4.0   | ✓      | 22691.6    | 4.32    | 4.05          |
| total.js                 | 3.4.8   | ✓      | 22441.2    | 4.35    | 6.87          |
| hapi                     | 20.1.3  | ✓      | 19602.1    | 5.01    | 3.50          |
| microrouter              | 3.1.3   | ✓      | 19162.5    | 5.12    | 3.42          |
| egg.js                   | 2.29.4  | ✓      | 12772.2    | 7.75    | 4.49          |
| frourio-express          | 0.23.0  | ✓      | 8259.9     | 11.94   | 1.47          |
| fastify-big-json         | 3.17.0  | ✓      | 8184.8     | 12.07   | 94.16         |
| express                  | 4.17.1  | ✓      | 7972.3     | 12.38   | 1.42          |
| nest                     | 7.6.17  | ✓      | 7087.5     | 13.96   | 1.62          |
| express-route-prefix     | 4.17.1  | ✓      | 7057.4     | 14.05   | 2.61          |
| express-with-middlewares | 4.17.1  | ✓      | 6755.3     | 14.65   | 2.59          |
