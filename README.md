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
* __Machine:__ Linux fv-az71 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Tue Sep  1 01:15:29 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 56653.6    | 1.64    | 8.86          |
| fastify                  | ✓      | 53741.6    | 1.77    | 8.41          |
| foxify                   | ✓      | 51042.4    | 1.87    | 7.25          |
| nest-fastify             | ✓      | 50017.6    | 1.91    | 7.30          |
| bare                     | ✗      | 49548.8    | 1.92    | 7.75          |
| rayo                     | ✓      | 49104.8    | 1.95    | 7.68          |
| polka                    | ✓      | 48684.0    | 1.96    | 7.61          |
| micro                    | ✗      | 48287.2    | 1.98    | 7.55          |
| connect                  | ✗      | 46386.4    | 2.07    | 7.26          |
| yeps                     | ✗      | 46250.4    | 2.07    | 7.23          |
| micro-route              | ✓      | 44360.0    | 2.16    | 6.94          |
| server-base-router       | ✓      | 44307.2    | 2.17    | 6.93          |
| server-base              | ✗      | 44268.8    | 2.17    | 6.92          |
| connect-router           | ✓      | 41499.0    | 2.31    | 6.49          |
| trek-engine              | ✗      | 40963.2    | 2.35    | 5.82          |
| trek-router              | ✓      | 40680.2    | 2.37    | 5.78          |
| spirit                   | ✗      | 37269.0    | 2.16    | 5.83          |
| koa                      | ✗      | 37267.8    | 2.60    | 5.83          |
| yeps-router              | ✓      | 36850.4    | 2.62    | 5.76          |
| vapr                     | ✓      | 36223.4    | 2.67    | 5.15          |
| spirit-router            | ✓      | 35110.2    | 2.30    | 5.49          |
| total.js                 | ✓      | 34553.2    | 2.80    | 9.82          |
| koa-router               | ✓      | 32559.6    | 2.99    | 5.09          |
| restify                  | ✓      | 32470.2    | 2.99    | 5.14          |
| microrouter              | ✓      | 25488.0    | 3.82    | 3.99          |
| hapi                     | ✓      | 21453.2    | 4.58    | 3.36          |
| egg.js                   | ✓      | 17987.0    | 5.49    | 5.93          |
| express                  | ✓      | 9894.1     | 9.97    | 1.55          |
| nest                     | ✓      | 9099.0     | 10.86   | 1.87          |
| express-route-prefix     | ✓      | 8981.5     | 11.04   | 3.13          |
| fastify-big-json         | ✓      | 8876.6     | 11.13   | 101.93        |
| frourio                  | ✓      | 8721.5     | 11.31   | 1.79          |
| express-with-middlewares | ✓      | 8630.3     | 11.44   | 3.12          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
