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
* __Machine:__ Linux fv-az91-531 5.11.0-1028-azure #31~20.04.2-Ubuntu SMP Tue Jan 18 08:46:15 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.19.0`
* __Run:__ Fri Apr  1 01:32:41 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 61184.8    | 1.52    | 10.91         |
| frourio                  | 0.26.0  | ✓      | 54679.2    | 1.75    | 9.75          |
| fastify                  | 3.27.4  | ✓      | 54408.8    | 1.75    | 9.70          |
| foxify                   | 0.10.20 | ✓      | 53632.0    | 1.78    | 8.80          |
| bare                     | 14.15.1 | ✗      | 53396.0    | 1.79    | 9.52          |
| polka                    | 0.5.2   | ✓      | 53148.8    | 1.80    | 9.48          |
| connect                  | 3.7.0   | ✗      | 52336.0    | 1.83    | 9.33          |
| rayo                     | 1.3.10  | ✓      | 51012.8    | 1.88    | 9.10          |
| micro                    | 9.3.4   | ✗      | 50960.8    | 1.88    | 9.09          |
| yeps                     | 1.1.1   | ✗      | 50712.0    | 1.89    | 9.04          |
| nest-fastify             | 7.6.18  | ✓      | 50120.8    | 1.91    | 8.41          |
| server-base-router       | 6.1.5   | ✓      | 49388.0    | 1.94    | 8.81          |
| micro-route              | 2.5.0   | ✓      | 48636.0    | 1.97    | 8.67          |
| connect-router           | 1.3.6   | ✓      | 48285.2    | 1.99    | 8.61          |
| server-base              | 6.1.5   | ✗      | 48131.2    | 1.99    | 8.58          |
| trek-router              | 1.2.0   | ✓      | 45244.8    | 2.13    | 7.42          |
| trek-engine              | 1.0.5   | ✗      | 44776.0    | 2.15    | 7.34          |
| vapr                     | 0.5.5   | ✓      | 42931.2    | 2.24    | 7.04          |
| yeps-router              | 1.2.0   | ✓      | 42353.6    | 2.28    | 7.55          |
| koa                      | 2.13.4  | ✗      | 40678.4    | 2.38    | 7.25          |
| spirit                   | 0.6.1   | ✗      | 39932.8    | 2.00    | 7.12          |
| total.js                 | 3.4.13  | ✓      | 38837.6    | 2.49    | 11.89         |
| spirit-router            | 0.5.0   | ✓      | 38506.4    | 2.08    | 6.87          |
| restify                  | 8.6.1   | ✓      | 36572.2    | 2.65    | 6.59          |
| koa-router               | 7.4.0   | ✓      | 36489.6    | 2.66    | 6.51          |
| hapi                     | 20.2.1  | ✓      | 31963.4    | 3.05    | 5.70          |
| microrouter              | 3.1.3   | ✓      | 30158.8    | 3.22    | 5.38          |
| egg.js                   | 2.34.0  | ✓      | 19755.2    | 4.98    | 6.95          |
| frourio-express          | 0.26.0  | ✓      | 13316.2    | 7.40    | 2.37          |
| express                  | 4.17.3  | ✓      | 12924.2    | 7.62    | 2.30          |
| express-route-prefix     | 4.17.3  | ✓      | 11677.8    | 8.48    | 4.32          |
| express-with-middlewares | 4.17.3  | ✓      | 11632.6    | 8.47    | 4.46          |
| fastify-big-json         | 3.27.4  | ✓      | 11572.8    | 8.52    | 133.15        |
| nest                     | 7.6.18  | ✓      | 11529.8    | 8.57    | 2.63          |
