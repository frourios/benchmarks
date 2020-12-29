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
* __Machine:__ Linux fv-az67-942 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.1`
* __Run:__ Tue Dec 29 23:41:04 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.9.2   | ✓      | 59500.8    | 1.59    | 10.61         |
| polkadot                 | 1.0.0   | ✗      | 59166.4    | 1.57    | 10.55         |
| frourio                  | 0.22.0  | ✓      | 58692.0    | 1.61    | 10.47         |
| bare                     | 10.13.0 | ✗      | 57516.8    | 1.65    | 10.26         |
| micro                    | 9.3.4   | ✗      | 55875.2    | 1.70    | 9.96          |
| nest-fastify             | 7.6.4   | ✓      | 55287.2    | 1.72    | 9.28          |
| foxify                   | 0.10.20 | ✓      | 54084.8    | 1.76    | 8.87          |
| polka                    | 0.5.2   | ✓      | 53456.0    | 1.78    | 9.53          |
| connect                  | 3.7.0   | ✗      | 53348.0    | 1.79    | 9.51          |
| rayo                     | 1.3.6   | ✓      | 51448.8    | 1.86    | 9.17          |
| yeps                     | 1.1.1   | ✗      | 49716.0    | 1.92    | 8.87          |
| connect-router           | 1.3.5   | ✓      | 48884.8    | 1.96    | 8.72          |
| server-base-router       | 6.1.5   | ✓      | 48730.4    | 1.96    | 8.69          |
| micro-route              | 2.5.0   | ✓      | 48386.4    | 1.98    | 8.63          |
| server-base              | 6.1.5   | ✗      | 47428.0    | 2.02    | 8.46          |
| trek-engine              | 1.0.5   | ✗      | 44788.6    | 2.15    | 7.35          |
| trek-router              | 1.2.0   | ✓      | 44633.6    | 2.16    | 7.32          |
| koa                      | 2.13.0  | ✗      | 41237.8    | 2.34    | 7.35          |
| vapr                     | 0.5.5   | ✓      | 40660.0    | 2.37    | 6.67          |
| yeps-router              | 1.2.0   | ✓      | 40508.8    | 2.38    | 7.22          |
| spirit                   | 0.6.1   | ✗      | 40133.6    | 1.94    | 7.16          |
| spirit-router            | 0.5.0   | ✓      | 39644.0    | 1.98    | 7.07          |
| total.js                 | 3.4.6   | ✓      | 37918.6    | 2.54    | 11.61         |
| koa-router               | 7.4.0   | ✓      | 36284.6    | 2.67    | 6.47          |
| restify                  | 8.5.1   | ✓      | 34977.0    | 2.77    | 6.30          |
| microrouter              | 3.1.3   | ✓      | 30066.8    | 3.23    | 5.36          |
| hapi                     | 18.4.1  | ✓      | 23168.8    | 4.23    | 4.13          |
| egg.js                   | 2.29.1  | ✓      | 18641.1    | 5.29    | 6.56          |
| frourio-express          | 0.22.0  | ✓      | 11434.0    | 8.62    | 2.04          |
| express                  | 4.17.1  | ✓      | 11213.2    | 8.79    | 2.00          |
| nest                     | 7.6.4   | ✓      | 10306.1    | 9.59    | 2.35          |
| fastify-big-json         | 3.9.2   | ✓      | 9527.8     | 10.36   | 109.60        |
| express-with-middlewares | 4.17.1  | ✓      | 9465.5     | 10.42   | 3.63          |
| express-route-prefix     | 4.17.1  | ✓      | 9426.2     | 10.51   | 3.49          |
