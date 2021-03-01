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
* __Machine:__ Linux fv-az208-584 5.4.0-1039-azure #41-Ubuntu SMP Mon Jan 18 13:22:11 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.5`
* __Run:__ Mon Mar  1 01:02:24 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.12.0  | ✓      | 58750.4    | 1.60    | 10.48         |
| frourio                  | 0.23.1  | ✓      | 58535.2    | 1.61    | 10.44         |
| polkadot                 | 1.0.0   | ✗      | 57044.8    | 1.62    | 10.17         |
| bare                     | 14.15.1 | ✗      | 54963.2    | 1.73    | 9.80          |
| foxify                   | 0.10.20 | ✓      | 53780.0    | 1.77    | 8.82          |
| polka                    | 0.5.2   | ✓      | 53117.6    | 1.80    | 9.47          |
| connect                  | 3.7.0   | ✗      | 52864.8    | 1.80    | 9.43          |
| micro                    | 9.3.4   | ✗      | 51284.8    | 1.86    | 9.15          |
| nest-fastify             | 7.6.13  | ✓      | 51187.2    | 1.87    | 8.59          |
| rayo                     | 1.3.6   | ✓      | 50944.8    | 1.87    | 9.09          |
| yeps                     | 1.1.1   | ✗      | 49080.8    | 1.95    | 8.75          |
| connect-router           | 1.3.5   | ✓      | 47898.4    | 2.00    | 8.54          |
| server-base-router       | 6.1.5   | ✓      | 46940.8    | 2.04    | 8.37          |
| micro-route              | 2.5.0   | ✓      | 46555.2    | 2.06    | 8.30          |
| server-base              | 6.1.5   | ✗      | 46332.8    | 2.07    | 8.26          |
| trek-engine              | 1.0.5   | ✗      | 43839.0    | 2.19    | 7.19          |
| trek-router              | 1.2.0   | ✓      | 43222.4    | 2.23    | 7.09          |
| vapr                     | 0.5.5   | ✓      | 40038.6    | 2.41    | 6.57          |
| yeps-router              | 1.2.0   | ✓      | 39887.2    | 2.42    | 7.11          |
| koa                      | 2.13.1  | ✗      | 38700.2    | 2.50    | 6.90          |
| spirit                   | 0.6.1   | ✗      | 37073.8    | 2.17    | 6.61          |
| spirit-router            | 0.5.0   | ✓      | 36694.4    | 2.15    | 6.54          |
| total.js                 | 3.4.8   | ✓      | 35456.2    | 2.72    | 10.85         |
| koa-router               | 7.4.0   | ✓      | 34108.4    | 2.84    | 6.08          |
| restify                  | 8.5.1   | ✓      | 33893.6    | 2.86    | 6.11          |
| hapi                     | 20.1.0  | ✓      | 29255.6    | 3.33    | 5.22          |
| microrouter              | 3.1.3   | ✓      | 27514.4    | 3.53    | 4.91          |
| egg.js                   | 2.29.3  | ✓      | 17936.9    | 5.50    | 6.31          |
| frourio-express          | 0.23.0  | ✓      | 10952.4    | 9.00    | 1.95          |
| express                  | 4.17.1  | ✓      | 10588.4    | 9.32    | 1.89          |
| express-route-prefix     | 4.17.1  | ✓      | 9290.9     | 10.66   | 3.44          |
| nest                     | 7.6.13  | ✓      | 9276.0     | 10.66   | 2.11          |
| express-with-middlewares | 4.17.1  | ✓      | 9247.0     | 10.67   | 3.55          |
| fastify-big-json         | 3.12.0  | ✓      | 9181.6     | 10.75   | 105.64        |
