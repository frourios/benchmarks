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
* __Machine:__ Linux fv-az208-413 5.4.0-1046-azure #48-Ubuntu SMP Tue Apr 13 07:18:42 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.16.1`
* __Run:__ Sat May  1 01:14:53 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65455.6    | 1.40    | 11.67         |
| bare                     | 14.15.1 | ✗      | 61392.8    | 1.54    | 10.95         |
| fastify                  | 3.15.1  | ✓      | 61281.6    | 1.55    | 10.93         |
| frourio                  | 0.23.1  | ✓      | 60781.6    | 1.56    | 10.84         |
| foxify                   | 0.10.20 | ✓      | 59813.6    | 1.59    | 9.81          |
| polka                    | 0.5.2   | ✓      | 57144.0    | 1.66    | 10.19         |
| micro                    | 9.3.4   | ✗      | 57124.8    | 1.67    | 10.19         |
| connect                  | 3.7.0   | ✗      | 56757.6    | 1.68    | 10.12         |
| rayo                     | 1.3.6   | ✓      | 56313.6    | 1.69    | 10.04         |
| nest-fastify             | 7.6.15  | ✓      | 56064.0    | 1.70    | 9.41          |
| yeps                     | 1.1.1   | ✗      | 54333.6    | 1.75    | 9.69          |
| connect-router           | 1.3.5   | ✓      | 52441.6    | 1.82    | 9.35          |
| server-base              | 6.1.5   | ✗      | 52232.0    | 1.83    | 9.31          |
| trek-engine              | 1.0.5   | ✗      | 50664.8    | 1.89    | 8.31          |
| micro-route              | 2.5.0   | ✓      | 50599.2    | 1.89    | 9.02          |
| server-base-router       | 6.1.5   | ✓      | 49879.2    | 1.92    | 8.90          |
| trek-router              | 1.2.0   | ✓      | 49262.4    | 1.95    | 8.08          |
| koa                      | 2.13.1  | ✗      | 46084.8    | 2.09    | 8.22          |
| yeps-router              | 1.2.0   | ✓      | 43633.6    | 2.20    | 7.78          |
| spirit-router            | 0.5.0   | ✓      | 43046.4    | 1.86    | 7.68          |
| vapr                     | 0.5.5   | ✓      | 41854.4    | 2.30    | 6.86          |
| spirit                   | 0.6.1   | ✗      | 41648.8    | 1.90    | 7.43          |
| total.js                 | 3.4.8   | ✓      | 40218.4    | 2.39    | 12.31         |
| koa-router               | 7.4.0   | ✓      | 38789.8    | 2.49    | 6.92          |
| restify                  | 8.5.1   | ✓      | 37065.8    | 2.61    | 6.68          |
| hapi                     | 20.1.2  | ✓      | 31385.2    | 3.10    | 5.60          |
| microrouter              | 3.1.3   | ✓      | 31001.6    | 3.13    | 5.53          |
| egg.js                   | 2.29.4  | ✓      | 19061.7    | 5.17    | 6.71          |
| frourio-express          | 0.23.0  | ✓      | 12112.4    | 8.14    | 2.16          |
| express                  | 4.17.1  | ✓      | 11489.4    | 8.58    | 2.05          |
| nest                     | 7.6.15  | ✓      | 10863.4    | 9.10    | 2.48          |
| express-with-middlewares | 4.17.1  | ✓      | 10230.5    | 9.64    | 3.92          |
| fastify-big-json         | 3.15.1  | ✓      | 9979.4     | 9.89    | 114.80        |
| express-route-prefix     | 4.17.1  | ✓      | 9820.5     | 10.09   | 3.63          |
