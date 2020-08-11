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
* __Machine:__ Linux fv-az18 5.3.0-1034-azure #35~18.04.1-Ubuntu SMP Mon Jul 13 12:54:45 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Tue Aug 11 09:58:34 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 45826.4    | 2.09    | 7.17          |
| fastify                  | ✓      | 41525.6    | 2.32    | 6.49          |
| rayo                     | ✓      | 39183.2    | 2.46    | 6.13          |
| polka                    | ✓      | 38569.6    | 2.50    | 6.03          |
| micro                    | ✗      | 38030.4    | 2.54    | 5.95          |
| foxify                   | ✓      | 37261.8    | 2.59    | 5.29          |
| nest-fastify             | ✓      | 35224.0    | 2.75    | 5.14          |
| bare                     | ✗      | 34740.0    | 2.79    | 5.43          |
| connect                  | ✗      | 34558.0    | 2.80    | 5.41          |
| yeps                     | ✗      | 34156.6    | 2.83    | 5.34          |
| server-base-router       | ✓      | 32723.6    | 2.96    | 5.12          |
| trek-engine              | ✗      | 32412.6    | 3.00    | 4.61          |
| server-base              | ✗      | 32283.0    | 3.00    | 5.05          |
| connect-router           | ✓      | 31760.8    | 3.05    | 4.97          |
| spirit                   | ✗      | 31665.8    | 2.64    | 4.95          |
| micro-route              | ✓      | 31048.6    | 3.12    | 4.86          |
| spirit-router            | ✓      | 31013.0    | 2.73    | 4.85          |
| trek-router              | ✓      | 30919.6    | 3.15    | 4.39          |
| yeps-router              | ✓      | 28956.0    | 3.36    | 4.53          |
| koa                      | ✗      | 27256.4    | 3.58    | 4.26          |
| restify                  | ✓      | 26896.4    | 3.63    | 4.26          |
| vapr                     | ✓      | 26426.8    | 3.68    | 3.76          |
| koa-router               | ✓      | 25112.4    | 3.89    | 3.93          |
| total.js                 | ✓      | 24796.8    | 3.93    | 7.05          |
| microrouter              | ✓      | 19909.6    | 4.91    | 3.11          |
| hapi                     | ✓      | 19216.8    | 5.13    | 3.01          |
| egg.js                   | ✓      | 14444.2    | 6.85    | 4.77          |
| fastify-big-json         | ✓      | 9118.5     | 10.82   | 104.71        |
| express                  | ✓      | 8489.0     | 11.63   | 1.33          |
| express-route-prefix     | ✓      | 7866.9     | 12.61   | 2.74          |
| nest                     | ✓      | 7691.6     | 12.86   | 1.58          |
| express-with-middlewares | ✓      | 7394.6     | 13.36   | 2.67          |
| frourio                  | ✓      | 7351.2     | 13.45   | 1.51          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
