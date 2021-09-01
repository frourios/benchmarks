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
* __Machine:__ Linux fv-az202-822 5.8.0-1039-azure #42~20.04.1-Ubuntu SMP Thu Jul 15 14:11:07 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.17.5`
* __Run:__ Wed Sep  1 01:13:52 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.23.1  | ✓      | 58439.2    | 1.62    | 10.42         |
| fastify                  | 3.20.2  | ✓      | 55860.8    | 1.70    | 9.96          |
| polkadot                 | 1.0.0   | ✗      | 55325.6    | 1.69    | 9.87          |
| foxify                   | 0.10.20 | ✓      | 54780.8    | 1.74    | 8.99          |
| bare                     | 14.15.1 | ✗      | 53141.6    | 1.79    | 9.48          |
| rayo                     | 1.3.6   | ✓      | 50777.6    | 1.88    | 9.05          |
| polka                    | 0.5.2   | ✓      | 50540.8    | 1.89    | 9.01          |
| nest-fastify             | 7.6.18  | ✓      | 50312.0    | 1.90    | 8.44          |
| micro                    | 9.3.4   | ✗      | 50306.4    | 1.90    | 8.97          |
| connect                  | 3.7.0   | ✗      | 50298.4    | 1.90    | 8.97          |
| micro-route              | 2.5.0   | ✓      | 49832.8    | 1.92    | 8.89          |
| yeps                     | 1.1.1   | ✗      | 47132.8    | 2.03    | 8.41          |
| server-base-router       | 6.1.5   | ✓      | 45231.2    | 2.12    | 8.07          |
| connect-router           | 1.3.5   | ✓      | 44297.6    | 2.17    | 7.90          |
| server-base              | 6.1.5   | ✗      | 41833.6    | 2.30    | 7.46          |
| spirit                   | 0.6.1   | ✗      | 41630.4    | 1.93    | 7.42          |
| trek-router              | 1.2.0   | ✓      | 41250.6    | 2.34    | 6.77          |
| trek-engine              | 1.0.5   | ✗      | 40196.6    | 2.40    | 6.59          |
| vapr                     | 0.5.5   | ✓      | 40124.6    | 2.40    | 6.58          |
| koa                      | 2.13.1  | ✗      | 39364.8    | 2.45    | 7.02          |
| spirit-router            | 0.5.0   | ✓      | 37836.0    | 2.14    | 6.75          |
| yeps-router              | 1.2.0   | ✓      | 36327.0    | 2.66    | 6.48          |
| koa-router               | 7.4.0   | ✓      | 34586.2    | 2.80    | 6.17          |
| total.js                 | 3.4.10  | ✓      | 34103.0    | 2.83    | 10.44         |
| restify                  | 8.5.1   | ✓      | 31261.2    | 3.11    | 5.63          |
| hapi                     | 20.1.5  | ✓      | 31126.4    | 3.13    | 5.55          |
| microrouter              | 3.1.3   | ✓      | 26535.2    | 3.67    | 4.73          |
| egg.js                   | 2.30.0  | ✓      | 17606.4    | 5.61    | 6.20          |
| frourio-express          | 0.23.0  | ✓      | 11945.8    | 8.25    | 2.13          |
| express                  | 4.17.1  | ✓      | 11054.2    | 8.92    | 1.97          |
| express-route-prefix     | 4.17.1  | ✓      | 9592.5     | 10.32   | 3.55          |
| nest                     | 7.6.18  | ✓      | 9574.3     | 10.33   | 2.18          |
| express-with-middlewares | 4.17.1  | ✓      | 9430.0     | 10.46   | 3.61          |
| fastify-big-json         | 3.20.2  | ✓      | 3367.0     | 29.49   | 38.73         |
