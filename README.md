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
* __Machine:__ Linux fv-az191-368 5.8.0-1042-azure #45~20.04.1-Ubuntu SMP Wed Sep 15 14:24:15 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.18.1`
* __Run:__ Mon Nov  1 01:16:33 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 34680.6    | 2.78    | 6.19          |
| bare                     | 14.15.1 | ✗      | 30047.2    | 3.23    | 5.36          |
| fastify                  | 3.22.1  | ✓      | 28533.6    | 3.40    | 5.09          |
| polka                    | 0.5.2   | ✓      | 28493.2    | 3.41    | 5.08          |
| connect                  | 3.7.0   | ✗      | 28346.0    | 3.43    | 5.06          |
| foxify                   | 0.10.20 | ✓      | 27673.6    | 3.51    | 4.54          |
| frourio                  | 0.23.1  | ✓      | 27662.0    | 3.52    | 4.93          |
| micro                    | 9.3.4   | ✗      | 27634.0    | 3.52    | 4.93          |
| nest-fastify             | 7.6.18  | ✓      | 27581.6    | 3.53    | 4.63          |
| rayo                     | 1.3.6   | ✓      | 27254.0    | 3.57    | 4.86          |
| yeps                     | 1.1.1   | ✗      | 26464.8    | 3.68    | 4.72          |
| connect-router           | 1.3.5   | ✓      | 24860.8    | 3.92    | 4.43          |
| spirit                   | 0.6.1   | ✗      | 24640.8    | 3.66    | 4.39          |
| trek-engine              | 1.0.5   | ✗      | 24603.2    | 3.97    | 4.04          |
| micro-route              | 2.5.0   | ✓      | 24506.4    | 3.98    | 4.37          |
| spirit-router            | 0.5.0   | ✓      | 24500.8    | 3.68    | 4.37          |
| server-base              | 6.1.5   | ✗      | 24372.0    | 4.00    | 4.35          |
| trek-router              | 1.2.0   | ✓      | 23378.4    | 4.19    | 3.83          |
| server-base-router       | 6.1.5   | ✓      | 22921.6    | 4.26    | 4.09          |
| koa                      | 2.13.4  | ✗      | 22422.0    | 4.36    | 4.00          |
| yeps-router              | 1.2.0   | ✓      | 21780.0    | 4.49    | 3.88          |
| restify                  | 8.6.0   | ✓      | 20798.9    | 4.71    | 3.75          |
| koa-router               | 7.4.0   | ✓      | 20228.3    | 4.85    | 3.61          |
| vapr                     | 0.5.5   | ✓      | 20110.3    | 4.86    | 3.30          |
| total.js                 | 3.4.12  | ✓      | 19435.3    | 5.03    | 5.95          |
| hapi                     | 20.2.1  | ✓      | 18959.5    | 5.20    | 3.38          |
| microrouter              | 3.1.3   | ✓      | 17013.2    | 5.78    | 3.03          |
| egg.js                   | 2.31.0  | ✓      | 11535.4    | 8.58    | 4.06          |
| express                  | 4.17.1  | ✓      | 7614.2     | 12.98   | 1.36          |
| frourio-express          | 0.23.0  | ✓      | 7504.4     | 13.16   | 1.34          |
| fastify-big-json         | 3.22.1  | ✓      | 6963.5     | 14.21   | 80.11         |
| express-with-middlewares | 4.17.1  | ✓      | 6430.5     | 15.41   | 2.46          |
| express-route-prefix     | 4.17.1  | ✓      | 6389.9     | 15.51   | 2.36          |
| nest                     | 7.6.18  | ✓      | 6283.4     | 15.77   | 1.43          |
