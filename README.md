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
* __Machine:__ Linux fv-az365-424 5.15.0-1022-azure #27~20.04.1-Ubuntu SMP Mon Oct 17 02:03:50 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 16GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.18.0`
* __Run:__ Thu Nov 17 20:42:54 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 89492.8    | 1.02    | 15.96         |
| fastify                  | 3.29.3  | ✓      | 72212.8    | 1.30    | 12.88         |
| frourio                  | 0.30.1  | ✓      | 72211.2    | 1.31    | 12.88         |
| bare                     | 14.15.1 | ✗      | 71030.8    | 1.33    | 12.67         |
| foxify                   | 0.10.20 | ✓      | 70042.0    | 1.34    | 11.49         |
| polka                    | 0.5.2   | ✓      | 69363.6    | 1.36    | 12.37         |
| connect                  | 3.7.0   | ✗      | 67819.6    | 1.39    | 12.10         |
| micro                    | 9.4.1   | ✗      | 67402.8    | 1.40    | 12.02         |
| yeps                     | 1.1.1   | ✗      | 65412.4    | 1.45    | 11.67         |
| nest-fastify             | 7.6.18  | ✓      | 64066.4    | 1.48    | 10.75         |
| micro-route              | 2.5.0   | ✓      | 62860.8    | 1.51    | 11.21         |
| server-base              | 6.1.5   | ✗      | 62858.8    | 1.51    | 11.21         |
| connect-router           | 1.3.7   | ✓      | 62530.4    | 1.52    | 11.15         |
| server-base-router       | 6.1.5   | ✓      | 61923.2    | 1.53    | 11.04         |
| spirit-router            | 0.5.0   | ✓      | 58439.2    | 1.04    | 10.42         |
| trek-router              | 1.2.0   | ✓      | 58271.2    | 1.64    | 9.56          |
| trek-engine              | 1.0.5   | ✗      | 58246.4    | 1.64    | 9.55          |
| spirit                   | 0.6.1   | ✗      | 54507.2    | 1.58    | 9.72          |
| vapr                     | 0.5.5   | ✓      | 54482.4    | 1.75    | 8.94          |
| yeps-router              | 1.2.0   | ✓      | 51281.6    | 1.87    | 9.15          |
| koa                      | 2.13.4  | ✗      | 51219.2    | 1.87    | 9.13          |
| restify                  | 8.6.1   | ✓      | 48807.2    | 1.97    | 8.80          |
| total.js                 | 3.4.13  | ✓      | 47238.4    | 2.03    | 14.46         |
| koa-router               | 7.4.0   | ✓      | 47152.0    | 2.04    | 8.41          |
| hapi                     | 20.2.2  | ✓      | 41012.0    | 2.36    | 7.31          |
| microrouter              | 3.1.3   | ✓      | 38328.8    | 2.52    | 6.83          |
| egg.js                   | 2.37.0  | ✓      | 22588.4    | 4.35    | 7.95          |
| frourio-express          | 0.30.0  | ✓      | 14140.4    | 6.97    | 2.52          |
| fastify-big-json         | 3.29.3  | ✓      | 13887.0    | 7.09    | 159.76        |
| express-route-prefix     | 4.18.2  | ✓      | 13585.4    | 7.29    | 5.03          |
| express                  | 4.18.2  | ✓      | 13218.4    | 7.46    | 2.36          |
| nest                     | 7.6.18  | ✓      | 12845.6    | 7.69    | 2.93          |
| express-with-middlewares | 4.18.2  | ✓      | 12124.8    | 8.13    | 4.65          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
