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
* __Machine:__ Linux fv-az18 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Tue Oct 13 20:00:07 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 58880.0    | 1.58    | 9.21          |
| frourio                  | 0.17.2  | ✓      | 58653.6    | 1.62    | 8.50          |
| fastify                  | 3.6.0   | ✓      | 57867.2    | 1.64    | 9.05          |
| bare                     | 10.13.0 | ✗      | 53559.2    | 1.78    | 8.38          |
| polka                    | 0.5.2   | ✓      | 52884.8    | 1.80    | 8.27          |
| foxify                   | 0.10.20 | ✓      | 51316.8    | 1.86    | 7.29          |
| connect                  | 3.7.0   | ✗      | 51284.8    | 1.86    | 8.02          |
| nest-fastify             | 7.4.4   | ✓      | 51190.4    | 1.87    | 7.47          |
| micro                    | 9.3.4   | ✗      | 50117.6    | 1.91    | 7.84          |
| rayo                     | 1.3.5   | ✓      | 49911.2    | 1.92    | 7.81          |
| yeps                     | 1.1.1   | ✗      | 47358.4    | 2.03    | 7.41          |
| server-base              | 6.1.5   | ✗      | 46834.4    | 2.05    | 7.32          |
| server-base-router       | 6.1.5   | ✓      | 46603.2    | 2.06    | 7.29          |
| micro-route              | 2.5.0   | ✓      | 45868.8    | 2.09    | 7.17          |
| connect-router           | 1.3.5   | ✓      | 44706.4    | 2.15    | 6.99          |
| trek-engine              | 1.0.5   | ✗      | 42349.8    | 2.28    | 6.02          |
| trek-router              | 1.2.0   | ✓      | 41641.8    | 2.32    | 5.92          |
| yeps-router              | 1.2.0   | ✓      | 39686.4    | 2.43    | 6.21          |
| koa                      | 2.13.0  | ✗      | 39444.2    | 2.45    | 6.17          |
| spirit                   | 0.6.1   | ✗      | 38014.4    | 2.08    | 5.94          |
| vapr                     | 0.5.5   | ✓      | 38008.6    | 2.54    | 5.40          |
| spirit-router            | 0.5.0   | ✓      | 37032.8    | 2.13    | 5.79          |
| total.js                 | 3.4.5   | ✓      | 36110.6    | 2.68    | 10.26         |
| koa-router               | 7.4.0   | ✓      | 34788.6    | 2.79    | 5.44          |
| restify                  | 8.5.1   | ✓      | 34348.6    | 2.83    | 5.44          |
| microrouter              | 3.1.3   | ✓      | 27951.2    | 3.48    | 4.37          |
| hapi                     | 18.4.1  | ✓      | 23072.8    | 4.25    | 3.61          |
| egg.js                   | 2.28.0  | ✓      | 18951.5    | 5.21    | 6.25          |
| frourio-express          | 0.17.1  | ✓      | 11466.2    | 8.60    | 1.65          |
| express                  | 4.17.1  | ✓      | 10898.6    | 9.04    | 1.70          |
| express-route-prefix     | 4.17.1  | ✓      | 9800.1     | 10.10   | 3.41          |
| nest                     | 7.4.4   | ✓      | 9587.0     | 10.31   | 1.97          |
| express-with-middlewares | 4.17.1  | ✓      | 9514.8     | 10.37   | 3.44          |
| fastify-big-json         | 3.6.0   | ✓      | 9512.5     | 10.37   | 109.22        |
