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
* __Machine:__ Linux fv-az220-178 5.15.0-1017-azure #20~20.04.1-Ubuntu SMP Fri Aug 5 12:16:53 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.20.0`
* __Run:__ Thu Sep  1 01:41:46 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 39539.4    | 2.43    | 7.05          |
| micro                    | 9.4.1   | ✗      | 32509.0    | 2.98    | 5.80          |
| frourio                  | 0.26.0  | ✓      | 31855.0    | 3.04    | 5.68          |
| foxify                   | 0.10.20 | ✓      | 31506.6    | 3.08    | 5.17          |
| connect                  | 3.7.0   | ✗      | 31062.8    | 3.12    | 5.54          |
| polka                    | 0.5.2   | ✓      | 30515.8    | 3.18    | 5.44          |
| fastify                  | 3.29.2  | ✓      | 30240.6    | 3.21    | 5.39          |
| bare                     | 14.15.1 | ✗      | 30128.0    | 3.22    | 5.37          |
| nest-fastify             | 7.6.18  | ✓      | 30031.0    | 3.23    | 5.04          |
| rayo                     | 1.3.10  | ✓      | 29027.8    | 3.35    | 5.18          |
| connect-router           | 1.3.7   | ✓      | 28844.8    | 3.37    | 5.14          |
| spirit-router            | 0.5.0   | ✓      | 28358.4    | 3.07    | 5.06          |
| yeps                     | 1.1.1   | ✗      | 28200.4    | 3.45    | 5.03          |
| micro-route              | 2.5.0   | ✓      | 27666.4    | 3.51    | 4.93          |
| spirit                   | 0.6.1   | ✗      | 27506.4    | 3.17    | 4.90          |
| server-base-router       | 6.1.5   | ✓      | 27010.4    | 3.60    | 4.82          |
| server-base              | 6.1.5   | ✗      | 26359.2    | 3.69    | 4.70          |
| trek-engine              | 1.0.5   | ✗      | 26037.2    | 3.75    | 4.27          |
| yeps-router              | 1.2.0   | ✓      | 25515.2    | 3.82    | 4.55          |
| trek-router              | 1.2.0   | ✓      | 24518.4    | 3.98    | 4.02          |
| koa                      | 2.13.4  | ✗      | 24256.4    | 4.03    | 4.33          |
| vapr                     | 0.5.5   | ✓      | 23811.1    | 4.10    | 3.91          |
| restify                  | 8.6.1   | ✓      | 23809.6    | 4.11    | 4.29          |
| koa-router               | 7.4.0   | ✓      | 22098.4    | 4.43    | 3.94          |
| total.js                 | 3.4.13  | ✓      | 20534.0    | 4.76    | 6.29          |
| hapi                     | 20.2.2  | ✓      | 19547.9    | 5.03    | 3.49          |
| microrouter              | 3.1.3   | ✓      | 18873.7    | 5.20    | 3.37          |
| egg.js                   | 2.36.0  | ✓      | 12118.2    | 8.17    | 4.26          |
| frourio-express          | 0.26.0  | ✓      | 8232.8     | 11.99   | 1.47          |
| express                  | 4.18.1  | ✓      | 8074.1     | 12.23   | 1.44          |
| fastify-big-json         | 3.29.2  | ✓      | 7693.1     | 12.85   | 88.50         |
| express-route-prefix     | 4.18.1  | ✓      | 7501.9     | 13.22   | 2.78          |
| express-with-middlewares | 4.18.1  | ✓      | 7006.0     | 14.12   | 2.69          |
| nest                     | 7.6.18  | ✓      | 6749.4     | 14.66   | 1.54          |
