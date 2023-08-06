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
* __Machine:__ Linux fv-az803-855 5.15.0-1042-azure #49-Ubuntu SMP Tue Jul 11 17:28:46 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v18.17.0`
* __Run:__ Sun Aug  6 10:43:29 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 14.15.1 | ✗      | 42146.4    | 2.28    | 7.52          |
| frourio                  | 0.34.1  | ✓      | 41287.2    | 2.33    | 7.40          |
| polka                    | 0.5.2   | ✓      | 41213.6    | 2.34    | 7.35          |
| nest-fastify             | 7.6.18  | ✓      | 40596.6    | 2.38    | 6.81          |
| fastify                  | 4.21.0  | ✓      | 40243.4    | 2.39    | 7.22          |
| micro                    | 9.4.1   | ✗      | 39761.4    | 2.43    | 7.09          |
| foxify                   | 0.10.20 | ✓      | 39551.4    | 2.44    | 6.49          |
| connect                  | 3.7.0   | ✗      | 39262.4    | 2.46    | 7.00          |
| yeps                     | 1.1.1   | ✗      | 38133.8    | 2.53    | 6.80          |
| server-base              | 6.1.5   | ✗      | 37323.0    | 2.59    | 6.66          |
| server-base-router       | 6.1.5   | ✓      | 37276.6    | 2.59    | 6.65          |
| micro-route              | 2.5.0   | ✓      | 36922.2    | 2.61    | 6.58          |
| connect-router           | 1.3.8   | ✓      | 36377.4    | 2.66    | 6.49          |
| spirit                   | 0.6.1   | ✗      | 35206.2    | 2.33    | 6.28          |
| vapr                     | 0.5.5   | ✓      | 33990.8    | 2.85    | 5.58          |
| spirit-router            | 0.5.0   | ✓      | 32461.6    | 2.56    | 5.79          |
| trek-router              | 1.2.0   | ✓      | 32241.4    | 3.02    | 5.29          |
| trek-engine              | 1.0.5   | ✗      | 32175.8    | 3.03    | 5.28          |
| koa                      | 2.14.2  | ✗      | 31933.6    | 3.05    | 5.69          |
| yeps-router              | 1.2.0   | ✓      | 30748.0    | 3.16    | 5.48          |
| polkadot                 | 1.0.0   | ✗      | 30242.4    | 3.23    | 5.39          |
| koa-router               | 7.4.0   | ✓      | 29559.2    | 3.30    | 5.27          |
| microrouter              | 3.1.3   | ✓      | 24923.2    | 3.91    | 4.44          |
| egg.js                   | 2.37.0  | ✓      | 11372.6    | 8.72    | 4.00          |
| frourio-express          | 0.34.0  | ✓      | 8424.8     | 11.72   | 1.50          |
| express                  | 4.18.2  | ✓      | 8392.5     | 11.77   | 1.50          |
| fastify-big-json         | 4.21.0  | ✓      | 8254.8     | 11.98   | 94.97         |
| express-route-prefix     | 4.18.2  | ✓      | 7374.2     | 13.45   | 2.73          |
| express-with-middlewares | 4.18.2  | ✓      | 7318.9     | 13.50   | 2.81          |
| nest                     | 7.6.18  | ✓      | 7226.0     | 13.70   | 1.65          |
| hapi                     | 20.3.0  | ✓      | N/A        | N/A     | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A     | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A     | N/A           |
