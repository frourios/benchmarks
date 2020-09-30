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
* __Machine:__ Linux fv-az67 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Wed Sep 30 21:47:51 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 34414.4    | 2.80    | 5.38          |
| bare                     | ✗      | 32232.0    | 3.00    | 5.04          |
| fastify                  | ✓      | 31481.6    | 3.08    | 4.92          |
| micro                    | ✗      | 31181.0    | 3.11    | 4.88          |
| connect                  | ✗      | 31103.2    | 3.11    | 4.86          |
| nest-fastify             | ✓      | 30523.8    | 3.18    | 4.45          |
| polka                    | ✓      | 30400.8    | 3.19    | 4.75          |
| foxify                   | ✓      | 29838.8    | 3.25    | 4.24          |
| server-base              | ✗      | 28070.8    | 3.46    | 4.39          |
| connect-router           | ✓      | 27092.4    | 3.59    | 4.24          |
| yeps                     | ✗      | 26238.4    | 3.71    | 4.10          |
| spirit                   | ✗      | 25968.4    | 3.43    | 4.06          |
| rayo                     | ✓      | 25943.6    | 3.75    | 4.06          |
| trek-router              | ✓      | 25836.8    | 3.78    | 3.67          |
| spirit-router            | ✓      | 25404.0    | 3.49    | 3.97          |
| micro-route              | ✓      | 25165.2    | 3.87    | 3.94          |
| server-base-router       | ✓      | 25019.2    | 3.89    | 3.91          |
| trek-engine              | ✗      | 24378.4    | 4.01    | 3.46          |
| yeps-router              | ✓      | 23830.4    | 4.10    | 3.73          |
| koa                      | ✗      | 21641.7    | 4.52    | 3.38          |
| vapr                     | ✓      | 21471.6    | 4.55    | 3.05          |
| restify                  | ✓      | 21072.8    | 4.65    | 3.34          |
| koa-router               | ✓      | 20667.7    | 4.74    | 3.23          |
| total.js                 | ✓      | 19818.0    | 4.93    | 5.63          |
| microrouter              | ✓      | 18044.9    | 5.44    | 2.82          |
| hapi                     | ✓      | 16002.2    | 6.18    | 2.50          |
| egg.js                   | ✓      | 12487.8    | 7.93    | 4.12          |
| express                  | ✓      | 7290.9     | 13.56   | 1.14          |
| fastify-big-json         | ✓      | 7277.8     | 13.59   | 83.57         |
| express-route-prefix     | ✓      | 6665.4     | 14.87   | 2.32          |
| nest                     | ✓      | 6338.7     | 15.62   | 1.31          |
| express-with-middlewares | ✓      | 6158.3     | 16.10   | 2.23          |
| frourio                  | ✓      | 5810.6     | 17.08   | 1.19          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
