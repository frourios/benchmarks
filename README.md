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
* __Machine:__ Linux fv-az119-252 5.11.0-1022-azure #23~20.04.1-Ubuntu SMP Fri Nov 19 10:20:52 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.18.2`
* __Run:__ Sat Jan  1 01:18:57 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 57512.0    | 1.63    | 10.26         |
| fastify                  | 3.25.3  | ✓      | 52316.8    | 1.83    | 9.33          |
| frourio                  | 0.23.1  | ✓      | 52020.8    | 1.84    | 9.28          |
| micro                    | 9.3.4   | ✗      | 51380.8    | 1.86    | 9.16          |
| foxify                   | 0.10.20 | ✓      | 51233.6    | 1.87    | 8.40          |
| bare                     | 14.15.1 | ✗      | 50969.6    | 1.88    | 9.09          |
| connect                  | 3.7.0   | ✗      | 50488.0    | 1.90    | 9.00          |
| rayo                     | 1.3.10  | ✓      | 49947.2    | 1.92    | 8.91          |
| polka                    | 0.5.2   | ✓      | 49904.0    | 1.92    | 8.90          |
| yeps                     | 1.1.1   | ✗      | 48236.0    | 1.99    | 8.60          |
| nest-fastify             | 7.6.18  | ✓      | 47250.4    | 2.03    | 7.93          |
| micro-route              | 2.5.0   | ✓      | 46428.0    | 2.07    | 8.28          |
| server-base              | 6.1.5   | ✗      | 46016.0    | 2.09    | 8.21          |
| connect-router           | 1.3.6   | ✓      | 45962.4    | 2.09    | 8.20          |
| server-base-router       | 6.1.5   | ✓      | 45476.8    | 2.11    | 8.11          |
| trek-engine              | 1.0.5   | ✗      | 43097.6    | 2.24    | 7.07          |
| trek-router              | 1.2.0   | ✓      | 42986.2    | 2.24    | 7.05          |
| yeps-router              | 1.2.0   | ✓      | 39913.6    | 2.42    | 7.12          |
| vapr                     | 0.5.5   | ✓      | 39487.4    | 2.45    | 6.48          |
| koa                      | 2.13.4  | ✗      | 39416.8    | 2.46    | 7.03          |
| spirit                   | 0.6.1   | ✗      | 37875.8    | 2.11    | 6.75          |
| total.js                 | 3.4.13  | ✓      | 35838.6    | 2.70    | 10.97         |
| koa-router               | 7.4.0   | ✓      | 35394.6    | 2.74    | 6.31          |
| restify                  | 8.6.0   | ✓      | 34925.8    | 2.78    | 6.30          |
| spirit-router            | 0.5.0   | ✓      | 30572.0    | 2.72    | 5.45          |
| hapi                     | 20.2.1  | ✓      | 29727.6    | 3.28    | 5.30          |
| microrouter              | 3.1.3   | ✓      | 28410.8    | 3.42    | 5.07          |
| egg.js                   | 2.33.1  | ✓      | 19129.7    | 5.16    | 6.73          |
| frourio-express          | 0.23.0  | ✓      | 12448.8    | 7.92    | 2.22          |
| express                  | 4.17.2  | ✓      | 12042.0    | 8.18    | 2.15          |
| express-with-middlewares | 4.17.2  | ✓      | 10952.2    | 9.00    | 4.20          |
| nest                     | 7.6.18  | ✓      | 10448.9    | 9.46    | 2.38          |
| fastify-big-json         | 3.25.3  | ✓      | 10428.1    | 9.46    | 119.97        |
| express-route-prefix     | 4.17.2  | ✓      | 10343.8    | 9.57    | 3.83          |
