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
* __Machine:__ Linux fv-az154-142 5.4.0-1039-azure #41~18.04.1-Ubuntu SMP Mon Jan 18 14:00:01 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.4`
* __Run:__ Wed Feb 17 08:49:19 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.23.0  | ✓      | 56341.6    | 1.68    | 10.05         |
| polkadot                 | 1.0.0   | ✗      | 56012.0    | 1.64    | 9.99          |
| bare                     | 14.15.1 | ✗      | 55832.8    | 1.70    | 9.96          |
| fastify                  | 3.12.0  | ✓      | 55560.0    | 1.70    | 9.91          |
| foxify                   | 0.10.20 | ✓      | 54772.8    | 1.73    | 8.98          |
| polka                    | 0.5.2   | ✓      | 53220.0    | 1.79    | 9.49          |
| rayo                     | 1.3.6   | ✓      | 52172.8    | 1.82    | 9.30          |
| nest-fastify             | 7.6.12  | ✓      | 52160.8    | 1.83    | 8.76          |
| connect                  | 3.7.0   | ✗      | 50779.2    | 1.88    | 9.06          |
| micro                    | 9.3.4   | ✗      | 50360.8    | 1.89    | 8.98          |
| yeps                     | 1.1.1   | ✗      | 47562.4    | 2.01    | 8.48          |
| server-base              | 6.1.5   | ✗      | 47479.2    | 2.01    | 8.47          |
| connect-router           | 1.3.5   | ✓      | 47207.2    | 2.03    | 8.42          |
| server-base-router       | 6.1.5   | ✓      | 46933.6    | 2.04    | 8.37          |
| micro-route              | 2.5.0   | ✓      | 44344.8    | 2.16    | 7.91          |
| trek-engine              | 1.0.5   | ✗      | 41997.8    | 2.29    | 6.89          |
| trek-router              | 1.2.0   | ✓      | 41919.0    | 2.30    | 6.88          |
| vapr                     | 0.5.5   | ✓      | 39036.6    | 2.47    | 6.40          |
| yeps-router              | 1.2.0   | ✓      | 38795.2    | 2.49    | 6.92          |
| koa                      | 2.13.1  | ✗      | 38367.0    | 2.52    | 6.84          |
| spirit                   | 0.6.1   | ✗      | 36020.8    | 2.22    | 6.42          |
| spirit-router            | 0.5.0   | ✓      | 35794.4    | 2.28    | 6.38          |
| total.js                 | 3.4.7   | ✓      | 34690.2    | 2.78    | 10.62         |
| restify                  | 8.5.1   | ✓      | 33439.2    | 2.90    | 6.03          |
| koa-router               | 7.4.0   | ✓      | 32946.0    | 2.95    | 5.88          |
| hapi                     | 20.1.0  | ✓      | 28950.0    | 3.37    | 5.16          |
| microrouter              | 3.1.3   | ✓      | 26893.6    | 3.62    | 4.80          |
| egg.js                   | 2.29.1  | ✓      | 17306.6    | 5.71    | 6.09          |
| frourio-express          | 0.23.0  | ✓      | 11231.0    | 8.78    | 2.00          |
| express                  | 4.17.1  | ✓      | 10358.3    | 9.52    | 1.85          |
| nest                     | 7.6.12  | ✓      | 9058.4     | 10.92   | 2.06          |
| express-with-middlewares | 4.17.1  | ✓      | 9011.5     | 10.95   | 3.45          |
| express-route-prefix     | 4.17.1  | ✓      | 8949.1     | 11.07   | 3.31          |
| fastify-big-json         | 3.12.0  | ✓      | 8765.8     | 11.27   | 100.84        |
