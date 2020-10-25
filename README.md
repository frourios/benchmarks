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
* __Machine:__ Linux fv-az70 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sun Oct 25 15:40:38 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 58044.0    | 1.59    | 10.35         |
| fastify                  | 3.7.0   | ✓      | 57462.4    | 1.64    | 10.25         |
| bare                     | 10.13.0 | ✗      | 54740.0    | 1.74    | 9.76          |
| polka                    | 0.5.2   | ✓      | 53489.6    | 1.78    | 9.54          |
| foxify                   | 0.10.20 | ✓      | 53448.0    | 1.78    | 8.77          |
| connect                  | 3.7.0   | ✗      | 52512.8    | 1.82    | 9.37          |
| rayo                     | 1.3.5   | ✓      | 50785.6    | 1.88    | 9.06          |
| nest-fastify             | 7.4.4   | ✓      | 50364.0    | 1.90    | 8.45          |
| micro                    | 9.3.4   | ✗      | 49948.8    | 1.91    | 8.91          |
| frourio                  | 0.18.2  | ✓      | 49896.8    | 1.92    | 8.90          |
| connect-router           | 1.3.5   | ✓      | 48751.2    | 1.96    | 8.69          |
| yeps                     | 1.1.1   | ✗      | 47825.6    | 2.00    | 8.53          |
| server-base-router       | 6.1.5   | ✓      | 47314.4    | 2.02    | 8.44          |
| server-base              | 6.1.5   | ✗      | 46172.8    | 2.08    | 8.23          |
| micro-route              | 2.5.0   | ✓      | 45006.4    | 2.13    | 8.03          |
| trek-engine              | 1.0.5   | ✗      | 42836.2    | 2.25    | 7.03          |
| trek-router              | 1.2.0   | ✓      | 42171.8    | 2.29    | 6.92          |
| yeps-router              | 1.2.0   | ✓      | 39601.8    | 2.44    | 7.06          |
| vapr                     | 0.5.5   | ✓      | 38045.6    | 2.54    | 6.24          |
| koa                      | 2.13.0  | ✗      | 37820.6    | 2.56    | 6.74          |
| spirit                   | 0.6.1   | ✗      | 36142.2    | 2.14    | 6.45          |
| total.js                 | 3.4.5   | ✓      | 35893.0    | 2.69    | 10.99         |
| spirit-router            | 0.5.0   | ✓      | 34193.6    | 2.31    | 6.10          |
| restify                  | 8.5.1   | ✓      | 33892.8    | 2.86    | 6.11          |
| koa-router               | 7.4.0   | ✓      | 33260.4    | 2.92    | 5.93          |
| microrouter              | 3.1.3   | ✓      | 26162.4    | 3.72    | 4.67          |
| hapi                     | 18.4.1  | ✓      | 21644.4    | 4.53    | 3.86          |
| egg.js                   | 2.29.1  | ✓      | 18719.7    | 5.27    | 6.59          |
| express                  | 4.17.1  | ✓      | 11094.0    | 8.89    | 1.98          |
| frourio-express          | 0.18.2  | ✓      | 10909.2    | 9.04    | 1.95          |
| express-with-middlewares | 4.17.1  | ✓      | 9506.8     | 10.38   | 3.64          |
| express-route-prefix     | 4.17.1  | ✓      | 9068.8     | 10.92   | 3.36          |
| nest                     | 7.4.4   | ✓      | 9015.3     | 10.97   | 2.05          |
| fastify-big-json         | 3.7.0   | ✓      | 8870.4     | 11.12   | 102.05        |
