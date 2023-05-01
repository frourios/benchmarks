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
* __Machine:__ Linux fv-az1025-230 5.15.0-1036-azure #43-Ubuntu SMP Wed Mar 29 16:11:05 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.20.0`
* __Run:__ Mon May  1 00:52:57 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 59988.8    | 1.55    | 10.70         |
| bare                     | 14.15.1 | ✗      | 56940.8    | 1.67    | 10.15         |
| frourio                  | 0.31.1  | ✓      | 53959.2    | 1.77    | 9.67          |
| foxify                   | 0.10.20 | ✓      | 53174.4    | 1.79    | 8.72          |
| micro                    | 9.4.1   | ✗      | 53005.6    | 1.80    | 9.45          |
| polka                    | 0.5.2   | ✓      | 52882.4    | 1.81    | 9.43          |
| connect                  | 3.7.0   | ✗      | 52852.0    | 1.81    | 9.42          |
| fastify                  | 4.17.0  | ✓      | 51661.6    | 1.85    | 9.26          |
| nest-fastify             | 7.6.18  | ✓      | 49898.4    | 1.92    | 8.37          |
| yeps                     | 1.1.1   | ✗      | 49676.0    | 1.93    | 8.86          |
| server-base-router       | 6.1.5   | ✓      | 47632.8    | 2.01    | 8.49          |
| server-base              | 6.1.5   | ✗      | 46506.4    | 2.06    | 8.29          |
| micro-route              | 2.5.0   | ✓      | 46406.4    | 2.07    | 8.28          |
| connect-router           | 1.3.8   | ✓      | 45522.8    | 2.11    | 8.12          |
| trek-engine              | 1.0.5   | ✗      | 45148.2    | 2.13    | 7.41          |
| trek-router              | 1.2.0   | ✓      | 43872.8    | 2.20    | 7.20          |
| vapr                     | 0.5.5   | ✓      | 42542.4    | 2.26    | 6.98          |
| yeps-router              | 1.2.0   | ✓      | 39914.2    | 2.42    | 7.12          |
| koa                      | 2.14.2  | ✗      | 38758.4    | 2.50    | 6.91          |
| spirit                   | 0.6.1   | ✗      | 38434.4    | 2.03    | 6.85          |
| restify                  | 8.6.1   | ✓      | 37502.6    | 2.58    | 6.76          |
| spirit-router            | 0.5.0   | ✓      | 37335.2    | 2.11    | 6.66          |
| total.js                 | 3.4.13  | ✓      | 36295.8    | 2.66    | 11.11         |
| koa-router               | 7.4.0   | ✓      | 35173.8    | 2.76    | 6.27          |
| microrouter              | 3.1.3   | ✓      | 30526.0    | 3.18    | 5.44          |
| hapi                     | 20.3.0  | ✓      | 29386.4    | 3.32    | 5.24          |
| egg.js                   | 2.37.0  | ✓      | 14777.0    | 6.69    | 5.20          |
| frourio-express          | 0.31.1  | ✓      | 10598.0    | 9.31    | 1.89          |
| express                  | 4.18.2  | ✓      | 10135.1    | 9.74    | 1.81          |
| fastify-big-json         | 4.17.0  | ✓      | 10049.0    | 9.83    | 115.62        |
| express-route-prefix     | 4.18.2  | ✓      | 9588.4     | 10.34   | 3.55          |
| express-with-middlewares | 4.18.2  | ✓      | 9317.8     | 10.59   | 3.57          |
| nest                     | 7.6.18  | ✓      | 9098.0     | 10.87   | 2.07          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
