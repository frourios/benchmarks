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
* __Run:__ Sun Oct 25 13:23:03 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 62364.0    | 1.52    | 11.12         |
| fastify                  | 3.7.0   | ✓      | 61559.2    | 1.53    | 10.98         |
| polkadot                 | 1.0.0   | ✗      | 61536.0    | 1.50    | 10.97         |
| foxify                   | 0.10.20 | ✓      | 57529.6    | 1.65    | 9.44          |
| connect                  | 3.7.0   | ✗      | 55938.4    | 1.70    | 9.98          |
| nest-fastify             | 7.4.4   | ✓      | 53601.6    | 1.78    | 9.00          |
| micro                    | 9.3.4   | ✗      | 52828.8    | 1.80    | 9.42          |
| rayo                     | 1.3.5   | ✓      | 52828.8    | 1.81    | 9.42          |
| polka                    | 0.5.2   | ✓      | 52312.8    | 1.83    | 9.33          |
| frourio                  | 0.18.2  | ✓      | 52020.0    | 1.84    | 9.28          |
| connect-router           | 1.3.5   | ✓      | 51034.4    | 1.87    | 9.10          |
| server-base              | 6.1.5   | ✗      | 50473.6    | 1.89    | 9.00          |
| server-base-router       | 6.1.5   | ✓      | 50072.0    | 1.91    | 8.93          |
| yeps                     | 1.1.1   | ✗      | 49969.6    | 1.91    | 8.91          |
| micro-route              | 2.5.0   | ✓      | 47030.4    | 2.04    | 8.39          |
| trek-engine              | 1.0.5   | ✗      | 45121.6    | 2.13    | 7.40          |
| trek-router              | 1.2.0   | ✓      | 44789.6    | 2.15    | 7.35          |
| yeps-router              | 1.2.0   | ✓      | 42760.0    | 2.25    | 7.63          |
| vapr                     | 0.5.5   | ✓      | 40934.4    | 2.35    | 6.71          |
| total.js                 | 3.4.5   | ✓      | 39040.8    | 2.47    | 11.95         |
| koa                      | 2.13.0  | ✗      | 39039.4    | 2.48    | 6.96          |
| spirit-router            | 0.5.0   | ✓      | 38767.2    | 2.00    | 6.91          |
| spirit                   | 0.6.1   | ✗      | 38242.4    | 2.01    | 6.82          |
| koa-router               | 7.4.0   | ✓      | 35441.4    | 2.74    | 6.32          |
| restify                  | 8.5.1   | ✓      | 35390.8    | 2.74    | 6.38          |
| microrouter              | 3.1.3   | ✓      | 27737.6    | 3.51    | 4.95          |
| hapi                     | 18.4.1  | ✓      | 22710.4    | 4.32    | 4.05          |
| egg.js                   | 2.29.1  | ✓      | 19533.3    | 5.04    | 6.87          |
| express                  | 4.17.1  | ✓      | 12327.0    | 7.99    | 2.20          |
| frourio-express          | 0.18.1  | ✓      | 11283.4    | 8.74    | 2.01          |
| express-with-middlewares | 4.17.1  | ✓      | 9990.8     | 9.87    | 3.83          |
| nest                     | 7.4.4   | ✓      | 9659.6     | 10.23   | 2.20          |
| fastify-big-json         | 3.7.0   | ✓      | 9530.1     | 10.35   | 109.64        |
| express-route-prefix     | 4.17.1  | ✓      | 9384.1     | 10.56   | 3.47          |
