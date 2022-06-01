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
* __Machine:__ Linux fv-az39-201 5.13.0-1023-azure #27~20.04.1-Ubuntu SMP Mon Apr 25 22:39:07 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.2`
* __Run:__ Wed Jun  1 01:44:20 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 57490.4    | 1.63    | 10.25         |
| foxify                   | 0.10.20 | ✓      | 54170.4    | 1.76    | 8.89          |
| bare                     | 14.15.1 | ✗      | 53970.4    | 1.77    | 9.62          |
| frourio                  | 0.26.0  | ✓      | 53166.4    | 1.79    | 9.48          |
| micro                    | 9.3.4   | ✗      | 52448.8    | 1.82    | 9.35          |
| polka                    | 0.5.2   | ✓      | 52132.8    | 1.83    | 9.30          |
| fastify                  | 3.29.0  | ✓      | 51803.2    | 1.84    | 9.24          |
| connect                  | 3.7.0   | ✗      | 51668.8    | 1.85    | 9.22          |
| rayo                     | 1.3.10  | ✓      | 51287.2    | 1.86    | 9.15          |
| nest-fastify             | 7.6.18  | ✓      | 48588.8    | 1.97    | 8.16          |
| server-base-router       | 6.1.5   | ✓      | 48139.2    | 1.99    | 8.58          |
| server-base              | 6.1.5   | ✗      | 47836.0    | 2.00    | 8.53          |
| micro-route              | 2.5.0   | ✓      | 47556.0    | 2.02    | 8.48          |
| yeps                     | 1.1.1   | ✗      | 47196.8    | 2.03    | 8.42          |
| connect-router           | 1.3.7   | ✓      | 46866.0    | 2.05    | 8.36          |
| trek-engine              | 1.0.5   | ✗      | 43336.0    | 2.23    | 7.11          |
| trek-router              | 1.2.0   | ✓      | 42372.8    | 2.28    | 6.95          |
| vapr                     | 0.5.5   | ✓      | 40407.8    | 2.39    | 6.63          |
| yeps-router              | 1.2.0   | ✓      | 39443.2    | 2.45    | 7.03          |
| spirit                   | 0.6.1   | ✗      | 39056.0    | 2.07    | 6.96          |
| koa                      | 2.13.4  | ✗      | 38573.2    | 2.51    | 6.88          |
| spirit-router            | 0.5.0   | ✓      | 36298.2    | 2.24    | 6.47          |
| restify                  | 8.6.1   | ✓      | 36011.4    | 2.69    | 6.49          |
| koa-router               | 7.4.0   | ✓      | 35818.6    | 2.71    | 6.39          |
| total.js                 | 3.4.13  | ✓      | 35666.2    | 2.71    | 10.92         |
| hapi                     | 20.2.2  | ✓      | 29835.2    | 3.27    | 5.32          |
| microrouter              | 3.1.3   | ✓      | 28761.6    | 3.38    | 5.13          |
| egg.js                   | 2.35.0  | ✓      | 19101.5    | 5.17    | 6.72          |
| frourio-express          | 0.26.0  | ✓      | 12352.8    | 7.98    | 2.20          |
| express                  | 4.18.1  | ✓      | 11861.2    | 8.31    | 2.12          |
| express-route-prefix     | 4.18.1  | ✓      | 10570.0    | 9.38    | 3.91          |
| express-with-middlewares | 4.18.1  | ✓      | 10564.9    | 9.33    | 4.05          |
| nest                     | 7.6.18  | ✓      | 10370.9    | 9.53    | 2.36          |
| fastify-big-json         | 3.29.0  | ✓      | 10269.0    | 9.61    | 118.14        |
