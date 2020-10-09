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
* __Machine:__ Linux fv-az18 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Fri Oct  9 12:03:30 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 40722.4    | 2.36    | 6.37          |
| fastify                  | 3.5.1   | ✓      | 38018.4    | 2.54    | 5.95          |
| frourio                  | 0.17.0  | ✓      | 36814.6    | 2.62    | 5.34          |
| bare                     | 10.13.0 | ✗      | 34537.6    | 2.80    | 5.40          |
| foxify                   | 0.10.20 | ✓      | 34137.2    | 2.83    | 4.85          |
| rayo                     | 1.3.5   | ✓      | 33008.4    | 2.94    | 5.16          |
| polka                    | 0.5.2   | ✓      | 32093.0    | 3.02    | 5.02          |
| nest-fastify             | 7.4.4   | ✓      | 31960.4    | 3.04    | 4.66          |
| connect-router           | 1.3.5   | ✓      | 30100.8    | 3.23    | 4.71          |
| yeps                     | 1.1.1   | ✗      | 30029.2    | 3.23    | 4.70          |
| micro                    | 9.3.4   | ✗      | 29671.6    | 3.28    | 4.64          |
| connect                  | 3.7.0   | ✗      | 29550.8    | 3.29    | 4.62          |
| server-base              | 6.1.5   | ✗      | 29202.0    | 3.33    | 4.57          |
| micro-route              | 2.5.0   | ✓      | 28225.6    | 3.45    | 4.41          |
| server-base-router       | 6.1.5   | ✓      | 28016.4    | 3.47    | 4.38          |
| spirit                   | 0.6.1   | ✗      | 27544.8    | 3.23    | 4.31          |
| trek-router              | 1.2.0   | ✓      | 27334.0    | 3.57    | 3.88          |
| yeps-router              | 1.2.0   | ✓      | 26462.4    | 3.68    | 4.14          |
| spirit-router            | 0.5.0   | ✓      | 25542.4    | 3.42    | 3.99          |
| koa                      | 2.13.0  | ✗      | 25075.2    | 3.90    | 3.92          |
| vapr                     | 0.5.5   | ✓      | 25042.0    | 3.89    | 3.56          |
| restify                  | 8.5.1   | ✓      | 24901.6    | 3.92    | 3.94          |
| trek-engine              | 1.0.5   | ✗      | 24840.8    | 3.94    | 3.53          |
| total.js                 | 3.4.5   | ✓      | 23712.8    | 4.11    | 6.74          |
| koa-router               | 7.4.0   | ✓      | 22932.4    | 4.27    | 3.59          |
| microrouter              | 3.1.3   | ✓      | 19033.2    | 5.16    | 2.98          |
| hapi                     | 18.4.1  | ✓      | 18304.5    | 5.39    | 2.86          |
| egg.js                   | 2.28.0  | ✓      | 13894.8    | 7.12    | 4.58          |
| fastify-big-json         | 3.5.1   | ✓      | 8480.9     | 11.64   | 97.38         |
| express                  | 4.17.1  | ✓      | 8239.0     | 11.98   | 1.29          |
| express-route-prefix     | 4.17.1  | ✓      | 7673.9     | 12.91   | 2.67          |
| nest                     | 7.4.4   | ✓      | 7311.3     | 13.54   | 1.51          |
| frourio-express          | 0.17.0  | ✓      | 7234.5     | 13.67   | 1.48          |
| express-with-middlewares | 4.17.1  | ✓      | 7050.3     | 14.02   | 2.55          |
