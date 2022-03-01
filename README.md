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
* __Machine:__ Linux fv-az105-131 5.11.0-1028-azure #31~20.04.2-Ubuntu SMP Tue Jan 18 08:46:15 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.0`
* __Run:__ Tue Mar  1 01:26:46 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.27.2  | ✓      | 48296.8    | 1.98    | 8.61          |
| bare                     | 14.15.1 | ✗      | 47860.0    | 2.00    | 8.53          |
| polkadot                 | 1.0.0   | ✗      | 47739.2    | 1.98    | 8.51          |
| connect                  | 3.7.0   | ✗      | 47473.6    | 2.02    | 8.47          |
| foxify                   | 0.10.20 | ✓      | 46993.6    | 2.04    | 7.71          |
| polka                    | 0.5.2   | ✓      | 46287.2    | 2.07    | 8.25          |
| frourio                  | 0.26.0  | ✓      | 46135.2    | 2.08    | 8.23          |
| micro                    | 9.3.4   | ✗      | 44504.0    | 2.16    | 7.94          |
| rayo                     | 1.3.10  | ✓      | 42742.4    | 2.25    | 7.62          |
| nest-fastify             | 7.6.18  | ✓      | 42643.2    | 2.25    | 7.16          |
| yeps                     | 1.1.1   | ✗      | 41318.4    | 2.33    | 7.37          |
| server-base-router       | 6.1.5   | ✓      | 41023.2    | 2.35    | 7.32          |
| connect-router           | 1.3.6   | ✓      | 40963.0    | 2.35    | 7.31          |
| micro-route              | 2.5.0   | ✓      | 40852.0    | 2.36    | 7.29          |
| server-base              | 6.1.5   | ✗      | 40558.4    | 2.38    | 7.23          |
| trek-router              | 1.2.0   | ✓      | 37133.4    | 2.61    | 6.09          |
| trek-engine              | 1.0.5   | ✗      | 37106.6    | 2.60    | 6.09          |
| yeps-router              | 1.2.0   | ✓      | 36064.2    | 2.68    | 6.43          |
| vapr                     | 0.5.5   | ✓      | 35228.8    | 2.74    | 5.78          |
| koa                      | 2.13.4  | ✗      | 34626.6    | 2.80    | 6.18          |
| spirit                   | 0.6.1   | ✗      | 33151.6    | 2.39    | 5.91          |
| total.js                 | 3.4.13  | ✓      | 33132.4    | 2.92    | 10.14         |
| spirit-router            | 0.5.0   | ✓      | 31218.0    | 2.61    | 5.57          |
| restify                  | 8.6.1   | ✓      | 30721.2    | 3.17    | 5.54          |
| koa-router               | 7.4.0   | ✓      | 30372.4    | 3.20    | 5.42          |
| microrouter              | 3.1.3   | ✓      | 25000.8    | 3.90    | 4.46          |
| hapi                     | 20.2.1  | ✓      | 24996.4    | 3.91    | 4.46          |
| egg.js                   | 2.33.1  | ✓      | 16031.2    | 6.16    | 5.64          |
| frourio-express          | 0.26.0  | ✓      | 10459.0    | 9.43    | 1.87          |
| express                  | 4.17.3  | ✓      | 10031.6    | 9.83    | 1.79          |
| express-route-prefix     | 4.17.3  | ✓      | 8891.7     | 11.15   | 3.29          |
| fastify-big-json         | 3.27.2  | ✓      | 8627.5     | 11.45   | 99.24         |
| express-with-middlewares | 4.17.3  | ✓      | 8521.6     | 11.59   | 3.27          |
| nest                     | 7.6.18  | ✓      | 8507.2     | 11.62   | 1.94          |
