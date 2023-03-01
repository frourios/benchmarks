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
* __Machine:__ Linux fv-az987-762 5.15.0-1033-azure #40-Ubuntu SMP Mon Jan 23 20:36:59 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.19.1`
* __Run:__ Wed Mar  1 00:53:44 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 66890.8    | 1.37    | 11.93         |
| bare                     | 14.15.1 | ✗      | 61063.2    | 1.55    | 10.89         |
| frourio                  | 0.31.1  | ✓      | 58824.8    | 1.61    | 10.55         |
| foxify                   | 0.10.20 | ✓      | 58332.8    | 1.63    | 9.57          |
| polka                    | 0.5.2   | ✓      | 57951.2    | 1.64    | 10.33         |
| fastify                  | 4.13.0  | ✓      | 57867.4    | 1.64    | 10.37         |
| micro                    | 9.4.1   | ✗      | 57212.8    | 1.66    | 10.20         |
| connect                  | 3.7.0   | ✗      | 57100.0    | 1.67    | 10.18         |
| nest-fastify             | 7.6.18  | ✓      | 55769.6    | 1.71    | 9.36          |
| yeps                     | 1.1.1   | ✗      | 54746.4    | 1.74    | 9.76          |
| server-base-router       | 6.1.5   | ✓      | 53662.4    | 1.78    | 9.57          |
| server-base              | 6.1.5   | ✗      | 52929.6    | 1.80    | 9.44          |
| connect-router           | 1.3.8   | ✓      | 52758.6    | 1.81    | 9.41          |
| micro-route              | 2.5.0   | ✓      | 52637.6    | 1.81    | 9.39          |
| trek-engine              | 1.0.5   | ✗      | 50426.4    | 1.90    | 8.27          |
| trek-router              | 1.2.0   | ✓      | 50281.6    | 1.91    | 8.25          |
| vapr                     | 0.5.5   | ✓      | 47592.8    | 2.01    | 7.81          |
| koa                      | 2.14.1  | ✗      | 44600.0    | 2.16    | 7.95          |
| spirit                   | 0.6.1   | ✗      | 44455.2    | 1.79    | 7.93          |
| spirit-router            | 0.5.0   | ✓      | 43965.6    | 1.82    | 7.84          |
| yeps-router              | 1.2.0   | ✓      | 42655.2    | 2.26    | 7.61          |
| restify                  | 8.6.1   | ✓      | 42442.6    | 2.27    | 7.65          |
| total.js                 | 3.4.13  | ✓      | 40208.8    | 2.39    | 12.31         |
| koa-router               | 7.4.0   | ✓      | 39698.4    | 2.44    | 7.08          |
| microrouter              | 3.1.3   | ✓      | 35132.6    | 2.75    | 6.27          |
| hapi                     | 20.3.0  | ✓      | 33846.6    | 2.87    | 6.04          |
| egg.js                   | 2.37.0  | ✓      | 16272.9    | 6.07    | 5.73          |
| frourio-express          | 0.31.1  | ✓      | 12194.8    | 8.08    | 2.17          |
| express                  | 4.18.2  | ✓      | 11625.2    | 8.48    | 2.07          |
| fastify-big-json         | 4.13.0  | ✓      | 11506.4    | 8.57    | 132.39        |
| express-route-prefix     | 4.18.2  | ✓      | 10925.8    | 9.07    | 4.04          |
| nest                     | 7.6.18  | ✓      | 10799.4    | 9.15    | 2.46          |
| express-with-middlewares | 4.18.2  | ✓      | 10535.8    | 9.36    | 4.04          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
