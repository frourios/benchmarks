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
* __Machine:__ Linux fv-az91-625 5.4.0-1041-azure #43-Ubuntu SMP Fri Feb 26 10:21:20 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.16.0`
* __Run:__ Thu Apr  1 03:21:56 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 42164.0    | 2.25    | 7.52          |
| bare                     | 14.15.1 | ✗      | 34684.8    | 2.79    | 6.19          |
| micro                    | 9.3.4   | ✗      | 34452.2    | 2.81    | 6.14          |
| connect                  | 3.7.0   | ✗      | 34142.0    | 2.83    | 6.09          |
| fastify                  | 3.14.1  | ✓      | 33534.8    | 2.88    | 5.98          |
| frourio                  | 0.23.1  | ✓      | 33488.0    | 2.89    | 5.97          |
| polka                    | 0.5.2   | ✓      | 33165.0    | 2.92    | 5.91          |
| foxify                   | 0.10.20 | ✓      | 33042.0    | 2.93    | 5.42          |
| nest-fastify             | 7.6.15  | ✓      | 31575.6    | 3.07    | 5.30          |
| rayo                     | 1.3.6   | ✓      | 31350.8    | 3.09    | 5.59          |
| spirit-router            | 0.5.0   | ✓      | 29809.6    | 2.96    | 5.32          |
| server-base              | 6.1.5   | ✗      | 29462.4    | 3.30    | 5.25          |
| connect-router           | 1.3.5   | ✓      | 29296.0    | 3.31    | 5.22          |
| micro-route              | 2.5.0   | ✓      | 29131.6    | 3.33    | 5.20          |
| server-base-router       | 6.1.5   | ✓      | 28702.0    | 3.38    | 5.12          |
| yeps                     | 1.1.1   | ✗      | 28564.4    | 3.40    | 5.09          |
| spirit                   | 0.6.1   | ✗      | 27734.0    | 3.22    | 4.95          |
| trek-engine              | 1.0.5   | ✗      | 27436.8    | 3.55    | 4.50          |
| trek-router              | 1.2.0   | ✓      | 27048.8    | 3.60    | 4.44          |
| yeps-router              | 1.2.0   | ✓      | 26124.8    | 3.73    | 4.66          |
| koa                      | 2.13.1  | ✗      | 25102.8    | 3.89    | 4.48          |
| vapr                     | 0.5.5   | ✓      | 24126.0    | 4.04    | 3.96          |
| total.js                 | 3.4.8   | ✓      | 23012.4    | 4.24    | 7.05          |
| restify                  | 8.5.1   | ✓      | 22712.8    | 4.31    | 4.09          |
| koa-router               | 7.4.0   | ✓      | 22078.0    | 4.44    | 3.94          |
| hapi                     | 20.1.2  | ✓      | 19578.7    | 5.01    | 3.49          |
| microrouter              | 3.1.3   | ✓      | 19444.3    | 5.05    | 3.47          |
| egg.js                   | 2.29.3  | ✓      | 12558.2    | 7.88    | 4.42          |
| frourio-express          | 0.23.0  | ✓      | 8063.8     | 12.24   | 1.44          |
| fastify-big-json         | 3.14.1  | ✓      | 7790.8     | 12.69   | 89.62         |
| express                  | 4.17.1  | ✓      | 7756.4     | 12.73   | 1.38          |
| express-route-prefix     | 4.17.1  | ✓      | 6894.3     | 14.38   | 2.55          |
| nest                     | 7.6.15  | ✓      | 6801.3     | 14.55   | 1.55          |
| express-with-middlewares | 4.17.1  | ✓      | 6481.2     | 15.29   | 2.48          |
