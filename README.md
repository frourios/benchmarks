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
* __Run:__ Tue Aug 11 02:39:32 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 41855.8    | 2.29    | 6.55          |
| fastify                  | ✓      | 39555.2    | 2.44    | 6.19          |
| bare                     | ✗      | 37215.8    | 2.60    | 5.82          |
| nest-fastify             | ✓      | 35841.0    | 2.70    | 5.23          |
| connect                  | ✗      | 34833.4    | 2.78    | 5.45          |
| polka                    | ✓      | 34251.8    | 2.83    | 5.36          |
| micro                    | ✗      | 32667.0    | 2.97    | 5.11          |
| yeps                     | ✗      | 31638.6    | 3.07    | 4.95          |
| rayo                     | ✓      | 31408.6    | 3.09    | 4.91          |
| connect-router           | ✓      | 31206.4    | 3.11    | 4.88          |
| spirit                   | ✗      | 30770.4    | 2.74    | 4.81          |
| server-base-router       | ✓      | 30608.4    | 3.17    | 4.79          |
| spirit-router            | ✓      | 30605.2    | 2.91    | 4.79          |
| server-base              | ✗      | 30134.0    | 3.22    | 4.71          |
| trek-engine              | ✗      | 29876.8    | 3.26    | 4.25          |
| micro-route              | ✓      | 29231.6    | 3.32    | 4.57          |
| trek-router              | ✓      | 28222.4    | 3.45    | 4.01          |
| yeps-router              | ✓      | 27528.4    | 3.54    | 4.31          |
| koa                      | ✗      | 26794.8    | 3.64    | 4.19          |
| foxify                   | ✓      | 24683.6    | 3.96    | 3.51          |
| vapr                     | ✓      | 24682.8    | 3.95    | 3.51          |
| restify                  | ✓      | 24468.0    | 3.99    | 3.87          |
| koa-router               | ✓      | 23296.8    | 4.20    | 3.64          |
| total.js                 | ✓      | 22938.8    | 4.26    | 6.52          |
| microrouter              | ✓      | 19624.8    | 5.00    | 3.07          |
| hapi                     | ✓      | 18264.1    | 5.40    | 2.86          |
| egg.js                   | ✓      | 13736.2    | 7.20    | 4.53          |
| fastify-big-json         | ✓      | 8398.0     | 11.75   | 96.42         |
| express-route-prefix     | ✓      | 7745.7     | 12.80   | 2.70          |
| express                  | ✓      | 7686.6     | 12.84   | 1.20          |
| nest                     | ✓      | 6743.0     | 14.67   | 1.39          |
| express-with-middlewares | ✓      | 6680.6     | 14.79   | 2.41          |
| frourio                  | ✓      | 5851.1     | 16.97   | 1.20          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
