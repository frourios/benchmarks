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
* __Machine:__ Linux fv-az173-501 5.15.0-1022-azure #27~20.04.1-Ubuntu SMP Mon Oct 17 02:03:50 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.20.1`
* __Run:__ Tue Nov  1 01:58:20 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 57919.2    | 1.62    | 10.33         |
| bare                     | 14.15.1 | ✗      | 55532.8    | 1.71    | 9.90          |
| frourio                  | 0.26.0  | ✓      | 53630.4    | 1.78    | 9.57          |
| micro                    | 9.4.1   | ✗      | 53296.0    | 1.79    | 9.50          |
| fastify                  | 3.29.3  | ✓      | 52849.6    | 1.81    | 9.42          |
| connect                  | 3.7.0   | ✗      | 52284.0    | 1.83    | 9.32          |
| polka                    | 0.5.2   | ✓      | 52161.6    | 1.83    | 9.30          |
| rayo                     | 1.3.10  | ✓      | 52014.4    | 1.84    | 9.28          |
| foxify                   | 0.10.20 | ✓      | 51544.8    | 1.85    | 8.45          |
| nest-fastify             | 7.6.18  | ✓      | 48808.8    | 1.96    | 8.19          |
| yeps                     | 1.1.1   | ✗      | 48481.6    | 1.98    | 8.65          |
| server-base-router       | 6.1.5   | ✓      | 47003.2    | 2.04    | 8.38          |
| micro-route              | 2.5.0   | ✓      | 46808.0    | 2.05    | 8.35          |
| connect-router           | 1.3.7   | ✓      | 46432.8    | 2.06    | 8.28          |
| server-base              | 6.1.5   | ✗      | 46286.4    | 2.07    | 8.25          |
| trek-engine              | 1.0.5   | ✗      | 43837.6    | 2.20    | 7.19          |
| trek-router              | 1.2.0   | ✓      | 42751.2    | 2.26    | 7.01          |
| yeps-router              | 1.2.0   | ✓      | 41430.4    | 2.33    | 7.39          |
| vapr                     | 0.5.5   | ✓      | 40235.8    | 2.40    | 6.60          |
| spirit                   | 0.6.1   | ✗      | 38416.0    | 2.09    | 6.85          |
| koa                      | 2.13.4  | ✗      | 38090.4    | 2.54    | 6.79          |
| spirit-router            | 0.5.0   | ✓      | 36896.0    | 2.19    | 6.58          |
| total.js                 | 3.4.13  | ✓      | 36679.4    | 2.63    | 11.23         |
| koa-router               | 7.4.0   | ✓      | 35738.2    | 2.72    | 6.37          |
| restify                  | 8.6.1   | ✓      | 34674.6    | 2.80    | 6.25          |
| hapi                     | 20.2.2  | ✓      | 29798.0    | 3.27    | 5.31          |
| microrouter              | 3.1.3   | ✓      | 29385.2    | 3.31    | 5.24          |
| egg.js                   | 2.37.0  | ✓      | 18740.9    | 5.27    | 6.59          |
| frourio-express          | 0.26.0  | ✓      | 12226.8    | 8.06    | 2.18          |
| express                  | 4.18.2  | ✓      | 11861.4    | 8.31    | 2.12          |
| express-route-prefix     | 4.18.2  | ✓      | 10309.0    | 9.62    | 3.81          |
| express-with-middlewares | 4.18.2  | ✓      | 10272.5    | 9.60    | 3.94          |
| nest                     | 7.6.18  | ✓      | 10242.1    | 9.65    | 2.33          |
| fastify-big-json         | 3.29.3  | ✓      | 10179.0    | 9.69    | 117.11        |
