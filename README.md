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
* __Machine:__ Linux fv-az40 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Thu Oct  1 06:28:53 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 56463.2    | 1.65    | 8.83          |
| fastify                  | ✓      | 53374.4    | 1.79    | 8.35          |
| bare                     | ✗      | 51281.6    | 1.86    | 8.02          |
| foxify                   | ✓      | 50305.6    | 1.90    | 7.15          |
| micro                    | ✗      | 49544.0    | 1.93    | 7.75          |
| connect                  | ✗      | 49485.6    | 1.93    | 7.74          |
| polka                    | ✓      | 49356.8    | 1.94    | 7.72          |
| nest-fastify             | ✓      | 48402.4    | 1.98    | 7.06          |
| rayo                     | ✓      | 48205.6    | 1.98    | 7.54          |
| yeps                     | ✗      | 45208.0    | 2.12    | 7.07          |
| micro-route              | ✓      | 44299.2    | 2.17    | 6.93          |
| connect-router           | ✓      | 44089.6    | 2.18    | 6.90          |
| server-base-router       | ✓      | 44073.6    | 2.18    | 6.89          |
| server-base              | ✗      | 43448.8    | 2.21    | 6.80          |
| trek-engine              | ✗      | 40543.0    | 2.39    | 5.76          |
| trek-router              | ✓      | 40216.2    | 2.41    | 5.71          |
| yeps-router              | ✓      | 38947.8    | 2.48    | 6.09          |
| vapr                     | ✓      | 37942.4    | 2.54    | 5.39          |
| koa                      | ✗      | 37150.2    | 2.61    | 5.81          |
| spirit                   | ✗      | 35929.8    | 2.21    | 5.62          |
| total.js                 | ✓      | 34677.0    | 2.79    | 9.86          |
| spirit-router            | ✓      | 34118.8    | 2.32    | 5.34          |
| restify                  | ✓      | 33528.6    | 2.90    | 5.31          |
| koa-router               | ✓      | 33282.2    | 2.92    | 5.21          |
| microrouter              | ✓      | 26263.2    | 3.71    | 4.11          |
| hapi                     | ✓      | 20669.6    | 4.75    | 3.23          |
| egg.js                   | ✓      | 18727.3    | 5.26    | 6.18          |
| express                  | ✓      | 10711.2    | 9.21    | 1.68          |
| express-with-middlewares | ✓      | 9283.1     | 10.63   | 3.36          |
| nest                     | ✓      | 9210.0     | 10.74   | 1.90          |
| express-route-prefix     | ✓      | 9131.0     | 10.85   | 3.18          |
| fastify-big-json         | ✓      | 9059.1     | 10.90   | 104.03        |
| frourio                  | ✓      | 8980.4     | 10.99   | 1.84          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
