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
* __Machine:__ Linux fv-az92-61 5.4.0-1032-azure #33~18.04.1-Ubuntu SMP Tue Nov 17 11:40:52 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.1`
* __Run:__ Sat Jan 23 22:40:04 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.22.2  | ✓      | 63741.6    | 1.48    | 11.37         |
| polkadot                 | 1.0.0   | ✗      | 62805.2    | 1.46    | 11.20         |
| fastify                  | 3.10.1  | ✓      | 61449.6    | 1.54    | 10.96         |
| foxify                   | 0.10.20 | ✓      | 60325.6    | 1.57    | 9.90          |
| bare                     | 10.13.0 | ✗      | 58797.6    | 1.61    | 10.49         |
| connect                  | 3.7.0   | ✗      | 58148.0    | 1.63    | 10.37         |
| polka                    | 0.5.2   | ✓      | 58052.8    | 1.63    | 10.35         |
| rayo                     | 1.3.6   | ✓      | 57991.2    | 1.64    | 10.34         |
| nest-fastify             | 7.6.5   | ✓      | 57333.6    | 1.66    | 9.62          |
| micro                    | 9.3.4   | ✗      | 57136.8    | 1.66    | 10.19         |
| yeps                     | 1.1.1   | ✗      | 53126.4    | 1.79    | 9.47          |
| connect-router           | 1.3.5   | ✓      | 53123.2    | 1.79    | 9.47          |
| server-base              | 6.1.5   | ✗      | 52402.4    | 1.82    | 9.35          |
| micro-route              | 2.5.0   | ✓      | 51228.8    | 1.86    | 9.14          |
| server-base-router       | 6.1.5   | ✓      | 49740.8    | 1.92    | 8.87          |
| trek-engine              | 1.0.5   | ✗      | 47924.8    | 2.00    | 7.86          |
| trek-router              | 1.2.0   | ✓      | 46696.8    | 2.06    | 7.66          |
| vapr                     | 0.5.5   | ✓      | 44145.6    | 2.18    | 7.24          |
| yeps-router              | 1.2.0   | ✓      | 43370.4    | 2.22    | 7.73          |
| koa                      | 2.13.1  | ✗      | 43219.2    | 2.23    | 7.71          |
| spirit-router            | 0.5.0   | ✓      | 41254.4    | 1.92    | 7.36          |
| spirit                   | 0.6.1   | ✗      | 41011.2    | 1.92    | 7.31          |
| koa-router               | 7.4.0   | ✓      | 38499.2    | 2.51    | 6.87          |
| total.js                 | 3.4.6   | ✓      | 38259.8    | 2.52    | 11.71         |
| restify                  | 8.5.1   | ✓      | 36205.8    | 2.67    | 6.53          |
| hapi                     | 20.0.3  | ✓      | 31819.0    | 3.06    | 5.67          |
| microrouter              | 3.1.3   | ✓      | 30452.4    | 3.19    | 5.43          |
| egg.js                   | 2.29.1  | ✓      | 19097.3    | 5.15    | 6.72          |
| frourio-express          | 0.22.2  | ✓      | 12005.2    | 8.21    | 2.14          |
| express                  | 4.17.1  | ✓      | 11927.4    | 8.26    | 2.13          |
| nest                     | 7.6.5   | ✓      | 10372.6    | 9.53    | 2.36          |
| fastify-big-json         | 3.10.1  | ✓      | 10287.5    | 9.59    | 118.35        |
| express-with-middlewares | 4.17.1  | ✓      | 10061.0    | 9.80    | 3.86          |
| express-route-prefix     | 4.17.1  | ✓      | 10031.9    | 9.87    | 3.71          |
