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
* __Machine:__ Linux fv-az202-983 5.8.0-1036-azure #38~20.04.1-Ubuntu SMP Thu Jun 17 14:14:18 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.17.1`
* __Run:__ Thu Jul  1 01:03:37 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 36950.8    | 2.59    | 6.59          |
| frourio                  | 0.23.1  | ✓      | 33623.2    | 2.87    | 6.00          |
| bare                     | 14.15.1 | ✗      | 33170.2    | 2.92    | 5.92          |
| micro                    | 9.3.4   | ✗      | 32854.0    | 2.94    | 5.86          |
| foxify                   | 0.10.20 | ✓      | 32052.0    | 3.02    | 5.26          |
| connect                  | 3.7.0   | ✗      | 31895.8    | 3.04    | 5.69          |
| polka                    | 0.5.2   | ✓      | 31441.4    | 3.08    | 5.61          |
| fastify                  | 3.18.1  | ✓      | 30217.2    | 3.21    | 5.39          |
| nest-fastify             | 7.6.18  | ✓      | 30181.0    | 3.22    | 5.07          |
| rayo                     | 1.3.6   | ✓      | 29986.6    | 3.24    | 5.35          |
| server-base-router       | 6.1.5   | ✓      | 29005.2    | 3.35    | 5.17          |
| yeps                     | 1.1.1   | ✗      | 28990.8    | 3.35    | 5.17          |
| micro-route              | 2.5.0   | ✓      | 28228.8    | 3.44    | 5.03          |
| spirit-router            | 0.5.0   | ✓      | 27894.0    | 3.23    | 4.97          |
| server-base              | 6.1.5   | ✗      | 27195.6    | 3.57    | 4.85          |
| spirit                   | 0.6.1   | ✗      | 26859.6    | 3.36    | 4.79          |
| connect-router           | 1.3.5   | ✓      | 26765.6    | 3.63    | 4.77          |
| trek-engine              | 1.0.5   | ✗      | 26404.8    | 3.69    | 4.33          |
| yeps-router              | 1.2.0   | ✓      | 25020.4    | 3.90    | 4.46          |
| trek-router              | 1.2.0   | ✓      | 24814.8    | 3.94    | 4.07          |
| koa                      | 2.13.1  | ✗      | 24480.4    | 3.99    | 4.37          |
| vapr                     | 0.5.5   | ✓      | 22855.2    | 4.27    | 3.75          |
| koa-router               | 7.4.0   | ✓      | 21880.4    | 4.48    | 3.90          |
| total.js                 | 3.4.9   | ✓      | 21683.6    | 4.50    | 6.64          |
| restify                  | 8.5.1   | ✓      | 21232.4    | 4.62    | 3.83          |
| hapi                     | 20.1.5  | ✓      | 19344.3    | 5.08    | 3.45          |
| microrouter              | 3.1.3   | ✓      | 18640.1    | 5.27    | 3.32          |
| egg.js                   | 2.29.4  | ✓      | 12376.6    | 8.00    | 4.35          |
| fastify-big-json         | 3.18.1  | ✓      | 7683.7     | 12.85   | 88.39         |
| frourio-express          | 0.23.0  | ✓      | 7552.3     | 13.08   | 1.35          |
| express                  | 4.17.1  | ✓      | 7472.7     | 13.22   | 1.33          |
| express-route-prefix     | 4.17.1  | ✓      | 6964.4     | 14.24   | 2.58          |
| nest                     | 7.6.18  | ✓      | 6658.9     | 14.86   | 1.52          |
| express-with-middlewares | 4.17.1  | ✓      | 6470.3     | 15.30   | 2.48          |
