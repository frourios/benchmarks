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
* __Machine:__ Linux fv-az67 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Tue Oct 13 11:54:18 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 38500.0    | 2.49    | 6.02          |
| frourio                  | 0.17.2  | ✓      | 35674.4    | 2.71    | 5.17          |
| polka                    | 0.5.2   | ✓      | 33423.2    | 2.90    | 5.23          |
| fastify                  | 3.6.0   | ✓      | 33200.8    | 2.92    | 5.19          |
| bare                     | 10.13.0 | ✗      | 31801.8    | 3.05    | 4.97          |
| micro                    | 9.3.4   | ✗      | 30849.2    | 3.14    | 4.82          |
| nest-fastify             | 7.4.4   | ✓      | 30787.4    | 3.15    | 4.49          |
| rayo                     | 1.3.5   | ✓      | 30470.4    | 3.19    | 4.77          |
| connect                  | 3.7.0   | ✗      | 30340.4    | 3.20    | 4.75          |
| foxify                   | 0.10.20 | ✓      | 29384.8    | 3.30    | 4.18          |
| trek-router              | 1.2.0   | ✓      | 28659.2    | 3.40    | 4.07          |
| yeps                     | 1.1.1   | ✗      | 28553.2    | 3.40    | 4.47          |
| spirit-router            | 0.5.0   | ✓      | 27403.2    | 3.29    | 4.29          |
| micro-route              | 2.5.0   | ✓      | 27184.4    | 3.58    | 4.25          |
| yeps-router              | 1.2.0   | ✓      | 27038.0    | 3.60    | 4.23          |
| server-base-router       | 6.1.5   | ✓      | 26240.0    | 3.71    | 4.10          |
| server-base              | 6.1.5   | ✗      | 26098.0    | 3.73    | 4.08          |
| connect-router           | 1.3.5   | ✓      | 26054.4    | 3.73    | 4.07          |
| spirit                   | 0.6.1   | ✗      | 26041.6    | 3.48    | 4.07          |
| trek-engine              | 1.0.5   | ✗      | 26031.6    | 3.75    | 3.70          |
| vapr                     | 0.5.5   | ✓      | 22709.6    | 4.30    | 3.23          |
| koa                      | 2.13.0  | ✗      | 22244.8    | 4.40    | 3.48          |
| restify                  | 8.5.1   | ✓      | 21901.2    | 4.47    | 3.47          |
| total.js                 | 3.4.5   | ✓      | 21074.8    | 4.64    | 5.99          |
| koa-router               | 7.4.0   | ✓      | 20294.8    | 4.83    | 3.17          |
| microrouter              | 3.1.3   | ✓      | 18849.3    | 5.21    | 2.95          |
| hapi                     | 18.4.1  | ✓      | 17322.0    | 5.70    | 2.71          |
| egg.js                   | 2.28.0  | ✓      | 12441.4    | 7.96    | 4.10          |
| fastify-big-json         | 3.6.0   | ✓      | 8351.3     | 11.82   | 95.90         |
| express-route-prefix     | 4.17.1  | ✓      | 7347.8     | 13.49   | 2.56          |
| express                  | 4.17.1  | ✓      | 7260.9     | 13.60   | 1.14          |
| nest                     | 7.4.4   | ✓      | 6683.2     | 14.81   | 1.38          |
| frourio-express          | 0.17.1  | ✓      | 6618.3     | 14.95   | 1.36          |
| express-with-middlewares | 4.17.1  | ✓      | 6499.9     | 15.24   | 2.35          |
