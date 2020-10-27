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
* __Machine:__ Linux fv-az67 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Tue Oct 27 21:00:32 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.7.0   | ✓      | 43496.0    | 2.20    | 7.76          |
| polkadot                 | 1.0.0   | ✗      | 42492.0    | 2.25    | 7.58          |
| frourio                  | 0.19.0  | ✓      | 39728.0    | 2.42    | 7.09          |
| polka                    | 0.5.2   | ✓      | 38320.8    | 2.52    | 6.83          |
| connect                  | 3.7.0   | ✗      | 38268.6    | 2.52    | 6.82          |
| nest-fastify             | 7.4.4   | ✓      | 38196.0    | 2.52    | 6.41          |
| bare                     | 10.13.0 | ✗      | 37258.2    | 2.59    | 6.64          |
| micro                    | 9.3.4   | ✗      | 36147.0    | 2.67    | 6.45          |
| yeps                     | 1.1.1   | ✗      | 36065.8    | 2.68    | 6.43          |
| rayo                     | 1.3.5   | ✓      | 35698.6    | 2.71    | 6.37          |
| foxify                   | 0.10.20 | ✓      | 35223.0    | 2.74    | 5.78          |
| trek-engine              | 1.0.5   | ✗      | 32718.4    | 2.97    | 5.37          |
| trek-router              | 1.2.0   | ✓      | 32087.2    | 3.03    | 5.26          |
| connect-router           | 1.3.5   | ✓      | 31807.2    | 3.05    | 5.67          |
| server-base-router       | 6.1.5   | ✓      | 31648.2    | 3.06    | 5.64          |
| spirit                   | 0.6.1   | ✗      | 31462.6    | 2.60    | 5.61          |
| spirit-router            | 0.5.0   | ✓      | 31118.2    | 2.70    | 5.55          |
| micro-route              | 2.5.0   | ✓      | 30414.8    | 3.19    | 5.42          |
| server-base              | 6.1.5   | ✗      | 30020.4    | 3.23    | 5.35          |
| yeps-router              | 1.2.0   | ✓      | 28743.6    | 3.38    | 5.13          |
| koa                      | 2.13.0  | ✗      | 28019.6    | 3.48    | 5.00          |
| vapr                     | 0.5.5   | ✓      | 26493.2    | 3.67    | 4.35          |
| restify                  | 8.5.1   | ✓      | 25046.0    | 3.90    | 4.51          |
| koa-router               | 7.4.0   | ✓      | 24186.8    | 4.04    | 4.31          |
| total.js                 | 3.4.5   | ✓      | 23789.6    | 4.10    | 7.28          |
| microrouter              | 3.1.3   | ✓      | 19009.4    | 5.15    | 3.39          |
| hapi                     | 18.4.1  | ✓      | 18853.7    | 5.23    | 3.36          |
| egg.js                   | 2.29.1  | ✓      | 14551.2    | 6.80    | 5.12          |
| express                  | 4.17.1  | ✓      | 9062.4     | 10.88   | 1.62          |
| fastify-big-json         | 3.7.0   | ✓      | 8891.5     | 11.10   | 102.29        |
| frourio-express          | 0.18.2  | ✓      | 8272.0     | 11.93   | 1.48          |
| express-route-prefix     | 4.17.1  | ✓      | 7846.8     | 12.63   | 2.90          |
| express-with-middlewares | 4.17.1  | ✓      | 7830.8     | 12.60   | 3.00          |
| nest                     | 7.4.4   | ✓      | 7228.4     | 13.69   | 1.65          |
