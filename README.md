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
* __Machine:__ Linux fv-az70 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Tue Oct 13 14:52:52 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.17.2  | ✓      | 44376.0    | 2.16    | 6.43          |
| polkadot                 | 1.0.0   | ✗      | 44085.6    | 2.17    | 6.89          |
| bare                     | 10.13.0 | ✗      | 38537.6    | 2.51    | 6.03          |
| fastify                  | 3.6.0   | ✓      | 38485.8    | 2.51    | 6.02          |
| connect                  | 3.7.0   | ✗      | 37562.6    | 2.57    | 5.87          |
| rayo                     | 1.3.5   | ✓      | 37555.4    | 2.57    | 5.87          |
| polka                    | 0.5.2   | ✓      | 37243.4    | 2.59    | 5.83          |
| nest-fastify             | 7.4.4   | ✓      | 37076.8    | 2.61    | 5.41          |
| micro                    | 9.3.4   | ✗      | 36554.4    | 2.64    | 5.72          |
| foxify                   | 0.10.20 | ✓      | 32429.0    | 2.99    | 4.61          |
| micro-route              | 2.5.0   | ✓      | 31274.2    | 3.10    | 4.89          |
| connect-router           | 1.3.5   | ✓      | 31090.2    | 3.12    | 4.86          |
| server-base-router       | 6.1.5   | ✓      | 30170.6    | 3.22    | 4.72          |
| yeps                     | 1.1.1   | ✗      | 28850.8    | 3.37    | 4.51          |
| koa                      | 2.13.0  | ✗      | 28104.0    | 3.47    | 4.40          |
| server-base              | 6.1.5   | ✗      | 27947.2    | 3.48    | 4.37          |
| spirit                   | 0.6.1   | ✗      | 27225.6    | 3.31    | 4.26          |
| spirit-router            | 0.5.0   | ✓      | 27072.0    | 3.34    | 4.23          |
| trek-engine              | 1.0.5   | ✗      | 26164.4    | 3.73    | 3.72          |
| koa-router               | 7.4.0   | ✓      | 25887.6    | 3.77    | 4.05          |
| trek-router              | 1.2.0   | ✓      | 25547.6    | 3.83    | 3.63          |
| restify                  | 8.5.1   | ✓      | 24687.2    | 3.96    | 3.91          |
| yeps-router              | 1.2.0   | ✓      | 24489.2    | 3.99    | 3.83          |
| total.js                 | 3.4.5   | ✓      | 24365.2    | 4.00    | 6.92          |
| vapr                     | 0.5.5   | ✓      | 23789.6    | 4.10    | 3.38          |
| microrouter              | 3.1.3   | ✓      | 19672.0    | 4.98    | 3.08          |
| hapi                     | 18.4.1  | ✓      | 19361.6    | 5.08    | 3.03          |
| egg.js                   | 2.28.0  | ✓      | 15406.3    | 6.42    | 5.08          |
| fastify-big-json         | 3.6.0   | ✓      | 9615.0     | 10.26   | 110.40        |
| express                  | 4.17.1  | ✓      | 9184.0     | 10.75   | 1.44          |
| express-route-prefix     | 4.17.1  | ✓      | 8495.2     | 11.67   | 2.96          |
| nest                     | 7.4.4   | ✓      | 8200.3     | 12.06   | 1.69          |
| frourio-express          | 0.17.1  | ✓      | 7945.0     | 12.43   | 1.63          |
| express-with-middlewares | 4.17.1  | ✓      | 7933.1     | 12.45   | 2.87          |
