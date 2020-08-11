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
* __Run:__ Tue Aug 11 03:44:04 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 42967.2    | 2.19    | 6.72          |
| bare                     | ✗      | 38821.2    | 2.48    | 6.07          |
| fastify                  | ✓      | 38366.2    | 2.51    | 6.00          |
| nest-fastify             | ✓      | 37523.2    | 2.57    | 5.47          |
| polka                    | ✓      | 36771.6    | 2.62    | 5.75          |
| micro                    | ✗      | 35639.6    | 2.71    | 5.57          |
| foxify                   | ✓      | 35061.8    | 2.76    | 4.98          |
| rayo                     | ✓      | 34424.8    | 2.81    | 5.38          |
| spirit                   | ✗      | 32196.4    | 2.66    | 5.04          |
| spirit-router            | ✓      | 32182.6    | 2.67    | 5.03          |
| yeps                     | ✗      | 31807.4    | 3.05    | 4.97          |
| trek-engine              | ✗      | 30675.2    | 3.17    | 4.36          |
| server-base              | ✗      | 30221.4    | 3.21    | 4.73          |
| yeps-router              | ✓      | 28914.0    | 3.36    | 4.52          |
| server-base-router       | ✓      | 27700.0    | 3.51    | 4.33          |
| connect                  | ✗      | 27683.6    | 3.51    | 4.33          |
| micro-route              | ✓      | 27666.0    | 3.52    | 4.33          |
| trek-router              | ✓      | 27094.4    | 3.60    | 3.85          |
| connect-router           | ✓      | 26990.0    | 3.60    | 4.22          |
| koa                      | ✗      | 26371.2    | 3.70    | 4.12          |
| total.js                 | ✓      | 25323.2    | 3.85    | 7.20          |
| vapr                     | ✓      | 24905.2    | 3.91    | 3.54          |
| restify                  | ✓      | 24525.2    | 3.98    | 3.88          |
| koa-router               | ✓      | 22710.8    | 4.31    | 3.55          |
| microrouter              | ✓      | 18790.1    | 5.21    | 2.94          |
| hapi                     | ✓      | 18503.5    | 5.33    | 2.89          |
| egg.js                   | ✓      | 14250.6    | 6.94    | 4.70          |
| fastify-big-json         | ✓      | 8732.8     | 11.30   | 100.27        |
| express                  | ✓      | 8514.8     | 11.59   | 1.33          |
| express-route-prefix     | ✓      | 7697.4     | 12.89   | 2.68          |
| nest                     | ✓      | 7511.8     | 13.17   | 1.55          |
| express-with-middlewares | ✓      | 7196.8     | 13.74   | 2.60          |
| frourio                  | ✓      | 6377.9     | 15.53   | 1.31          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
