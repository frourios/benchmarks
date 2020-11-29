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
* __Machine:__ Linux fv-az139-325 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sun Nov 29 17:18:50 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.8.0   | ✓      | 63772.0    | 1.48    | 11.37         |
| frourio                  | 0.21.1  | ✓      | 62624.4    | 1.51    | 11.17         |
| polkadot                 | 1.0.0   | ✗      | 62623.2    | 1.48    | 11.17         |
| bare                     | 10.13.0 | ✗      | 61069.2    | 1.55    | 10.89         |
| foxify                   | 0.10.20 | ✓      | 59875.2    | 1.58    | 9.82          |
| polka                    | 0.5.2   | ✓      | 58822.4    | 1.61    | 10.49         |
| connect                  | 3.7.0   | ✗      | 56924.8    | 1.67    | 10.15         |
| micro                    | 9.3.4   | ✗      | 55168.0    | 1.73    | 9.84          |
| rayo                     | 1.3.6   | ✓      | 53862.4    | 1.77    | 9.61          |
| nest-fastify             | 7.5.5   | ✓      | 53787.2    | 1.78    | 9.03          |
| server-base              | 6.1.5   | ✗      | 53551.2    | 1.78    | 9.55          |
| yeps                     | 1.1.1   | ✗      | 53415.2    | 1.79    | 9.53          |
| connect-router           | 1.3.5   | ✓      | 53068.0    | 1.80    | 9.46          |
| server-base-router       | 6.1.5   | ✓      | 50437.6    | 1.90    | 8.99          |
| micro-route              | 2.5.0   | ✓      | 50268.0    | 1.90    | 8.96          |
| trek-router              | 1.2.0   | ✓      | 46563.2    | 2.07    | 7.64          |
| trek-engine              | 1.0.5   | ✗      | 45589.4    | 2.11    | 7.48          |
| vapr                     | 0.5.5   | ✓      | 43982.4    | 2.19    | 7.21          |
| koa                      | 2.13.0  | ✗      | 41859.0    | 2.31    | 7.47          |
| yeps-router              | 1.2.0   | ✓      | 41585.6    | 2.32    | 7.42          |
| spirit                   | 0.6.1   | ✗      | 39226.2    | 2.00    | 7.00          |
| spirit-router            | 0.5.0   | ✓      | 39167.2    | 2.04    | 6.99          |
| total.js                 | 3.4.6   | ✓      | 38974.4    | 2.47    | 11.93         |
| restify                  | 8.5.1   | ✓      | 37088.8    | 2.61    | 6.69          |
| koa-router               | 7.4.0   | ✓      | 36739.0    | 2.64    | 6.55          |
| microrouter              | 3.1.3   | ✓      | 29124.0    | 3.34    | 5.19          |
| hapi                     | 18.4.1  | ✓      | 25494.0    | 3.84    | 4.55          |
| egg.js                   | 2.29.1  | ✓      | 19503.1    | 5.06    | 6.86          |
| express                  | 4.17.1  | ✓      | 12232.6    | 8.06    | 2.18          |
| frourio-express          | 0.21.0  | ✓      | 12135.0    | 8.12    | 2.16          |
| express-with-middlewares | 4.17.1  | ✓      | 10531.8    | 9.36    | 4.04          |
| nest                     | 7.5.5   | ✓      | 10033.4    | 9.85    | 2.29          |
| fastify-big-json         | 3.8.0   | ✓      | 9940.0     | 9.93    | 114.36        |
| express-route-prefix     | 4.17.1  | ✓      | 9707.0     | 10.20   | 3.59          |
