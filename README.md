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
* __Machine:__ Linux fv-az16 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Mon Aug 10 22:09:53 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 59585.6    | 1.57    | 9.32          |
| fastify                  | ✓      | 58892.8    | 1.61    | 9.21          |
| foxify                   | ✓      | 54066.4    | 1.76    | 7.68          |
| connect                  | ✗      | 53533.6    | 1.78    | 8.37          |
| nest-fastify             | ✓      | 53067.2    | 1.80    | 7.74          |
| bare                     | ✗      | 52772.0    | 1.81    | 8.25          |
| micro                    | ✗      | 52646.4    | 1.81    | 8.23          |
| polka                    | ✓      | 51880.0    | 1.84    | 8.11          |
| rayo                     | ✓      | 50808.8    | 1.88    | 7.95          |
| yeps                     | ✗      | 49904.8    | 1.92    | 7.81          |
| connect-router           | ✓      | 47104.8    | 2.04    | 7.37          |
| server-base-router       | ✓      | 47053.6    | 2.04    | 7.36          |
| server-base              | ✗      | 47000.8    | 2.04    | 7.35          |
| micro-route              | ✓      | 46923.2    | 2.04    | 7.34          |
| trek-engine              | ✗      | 44384.0    | 2.17    | 6.31          |
| trek-router              | ✓      | 42089.6    | 2.30    | 5.98          |
| yeps-router              | ✓      | 40962.4    | 2.36    | 6.41          |
| koa                      | ✗      | 39837.6    | 2.43    | 6.23          |
| vapr                     | ✓      | 39660.8    | 2.43    | 5.64          |
| spirit                   | ✗      | 39100.0    | 2.05    | 6.11          |
| total.js                 | ✓      | 37344.0    | 2.59    | 10.61         |
| spirit-router            | ✓      | 37012.8    | 2.19    | 5.79          |
| koa-router               | ✓      | 36159.8    | 2.68    | 5.66          |
| restify                  | ✓      | 34184.2    | 2.84    | 5.41          |
| microrouter              | ✓      | 27394.0    | 3.55    | 4.28          |
| hapi                     | ✓      | 23323.2    | 4.20    | 3.65          |
| egg.js                   | ✓      | 19659.9    | 5.02    | 6.49          |
| express                  | ✓      | 11243.6    | 8.77    | 1.76          |
| fastify-big-json         | ✓      | 10520.0    | 9.38    | 120.79        |
| express-route-prefix     | ✓      | 9879.1     | 10.03   | 3.44          |
| nest                     | ✓      | 9723.3     | 10.17   | 2.00          |
| express-with-middlewares | ✓      | 9532.3     | 10.35   | 3.45          |
| frourio                  | ✓      | 9315.0     | 10.59   | 1.91          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
