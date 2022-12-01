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
* __Machine:__ Linux fv-az298-905 5.15.0-1023-azure #29-Ubuntu SMP Wed Oct 19 22:37:08 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.18.1`
* __Run:__ Thu Dec  1 01:42:14 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 35421.4    | 2.71    | 6.32          |
| bare                     | 14.15.1 | ✗      | 30649.2    | 3.16    | 5.47          |
| micro                    | 9.4.1   | ✗      | 29773.6    | 3.26    | 5.31          |
| connect                  | 3.7.0   | ✗      | 28830.8    | 3.37    | 5.14          |
| foxify                   | 0.10.20 | ✓      | 28345.2    | 3.43    | 4.65          |
| fastify                  | 4.10.2  | ✓      | 27126.0    | 3.59    | 4.86          |
| nest-fastify             | 7.6.18  | ✓      | 26914.8    | 3.62    | 4.52          |
| polka                    | 0.5.2   | ✓      | 26694.4    | 3.64    | 4.76          |
| yeps                     | 1.1.1   | ✗      | 26552.8    | 3.66    | 4.74          |
| spirit-router            | 0.5.0   | ✓      | 26384.4    | 3.36    | 4.71          |
| server-base              | 6.1.5   | ✗      | 26340.8    | 3.69    | 4.70          |
| frourio                  | 0.31.0  | ✓      | 25882.8    | 3.76    | 4.64          |
| micro-route              | 2.5.0   | ✓      | 25533.6    | 3.81    | 4.55          |
| spirit                   | 0.6.1   | ✗      | 25179.2    | 3.52    | 4.49          |
| connect-router           | 1.3.7   | ✓      | 25158.4    | 3.87    | 4.49          |
| trek-engine              | 1.0.5   | ✗      | 24430.7    | 4.00    | 4.01          |
| server-base-router       | 6.1.5   | ✓      | 24412.0    | 3.99    | 4.35          |
| trek-router              | 1.2.0   | ✓      | 24192.0    | 4.04    | 3.97          |
| yeps-router              | 1.2.0   | ✓      | 22888.8    | 4.26    | 4.08          |
| vapr                     | 0.5.5   | ✓      | 21557.6    | 4.53    | 3.54          |
| koa                      | 2.13.4  | ✗      | 21285.1    | 4.60    | 3.80          |
| restify                  | 8.6.1   | ✓      | 21105.7    | 4.64    | 3.80          |
| koa-router               | 7.4.0   | ✓      | 19833.6    | 4.94    | 3.54          |
| total.js                 | 3.4.13  | ✓      | 19488.9    | 5.02    | 5.97          |
| hapi                     | 20.2.2  | ✓      | 19053.7    | 5.17    | 3.40          |
| microrouter              | 3.1.3   | ✓      | 18386.9    | 5.34    | 3.28          |
| egg.js                   | 2.37.0  | ✓      | 10125.5    | 9.79    | 3.56          |
| fastify-big-json         | 4.10.2  | ✓      | 7050.6     | 14.05   | 81.12         |
| frourio-express          | 0.31.0  | ✓      | 6383.6     | 15.50   | 1.14          |
| express                  | 4.18.2  | ✓      | 6325.0     | 15.65   | 1.13          |
| express-route-prefix     | 4.18.2  | ✓      | 6072.3     | 16.34   | 2.25          |
| express-with-middlewares | 4.18.2  | ✓      | 5641.5     | 17.60   | 2.16          |
| nest                     | 7.6.18  | ✓      | 5408.9     | 18.30   | 1.23          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
