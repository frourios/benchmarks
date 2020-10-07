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
* __Run:__ Wed Oct  7 11:18:48 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.5.1   | ✓      | 57196.8    | 1.65    | 8.95          |
| frourio                  | 0.16.0  | ✓      | 55240.0    | 1.71    | 8.01          |
| polkadot                 | 1.0.0   | ✗      | 54700.0    | 1.70    | 8.55          |
| bare                     | 10.13.0 | ✗      | 53177.6    | 1.79    | 8.32          |
| polka                    | 0.5.2   | ✓      | 51530.4    | 1.85    | 8.06          |
| foxify                   | 0.10.20 | ✓      | 50538.4    | 1.88    | 7.18          |
| nest-fastify             | 7.4.4   | ✓      | 50156.0    | 1.90    | 7.32          |
| micro                    | 9.3.4   | ✗      | 49824.0    | 1.91    | 7.79          |
| connect                  | 3.7.0   | ✗      | 49270.4    | 1.94    | 7.71          |
| rayo                     | 1.3.5   | ✓      | 48692.8    | 1.96    | 7.62          |
| yeps                     | 1.1.1   | ✗      | 46371.2    | 2.07    | 7.25          |
| server-base              | 6.1.5   | ✗      | 45712.8    | 2.09    | 7.15          |
| server-base-router       | 6.1.5   | ✓      | 45368.8    | 2.11    | 7.10          |
| connect-router           | 1.3.5   | ✓      | 44188.0    | 2.17    | 6.91          |
| micro-route              | 2.5.0   | ✓      | 43227.2    | 2.22    | 6.76          |
| trek-engine              | 1.0.5   | ✗      | 41985.0    | 2.30    | 5.97          |
| trek-router              | 1.2.0   | ✓      | 39955.4    | 2.42    | 5.68          |
| yeps-router              | 1.2.0   | ✓      | 38632.6    | 2.50    | 6.04          |
| koa                      | 2.13.0  | ✗      | 37945.8    | 2.55    | 5.93          |
| vapr                     | 0.5.5   | ✓      | 37553.6    | 2.57    | 5.34          |
| spirit                   | 0.6.1   | ✗      | 35090.4    | 2.28    | 5.49          |
| total.js                 | 3.4.5   | ✓      | 35058.6    | 2.75    | 9.96          |
| spirit-router            | 0.5.0   | ✓      | 34762.2    | 2.31    | 5.44          |
| koa-router               | 7.4.0   | ✓      | 33889.6    | 2.86    | 5.30          |
| restify                  | 8.5.1   | ✓      | 32500.0    | 2.99    | 5.14          |
| microrouter              | 3.1.3   | ✓      | 25757.2    | 3.78    | 4.03          |
| hapi                     | 18.4.1  | ✓      | 21922.4    | 4.47    | 3.43          |
| egg.js                   | 2.28.0  | ✓      | 18903.9    | 5.22    | 6.24          |
| express                  | 4.17.1  | ✓      | 10361.0    | 9.52    | 1.62          |
| nest                     | 7.4.4   | ✓      | 9267.5     | 10.67   | 1.91          |
| express-with-middlewares | 4.17.1  | ✓      | 9255.1     | 10.66   | 3.35          |
| frourio-express          | 0.16.0  | ✓      | 9160.4     | 10.77   | 1.88          |
| express-route-prefix     | 4.17.1  | ✓      | 8955.5     | 11.06   | 3.12          |
| fastify-big-json         | 3.5.1   | ✓      | 8788.0     | 11.24   | 100.90        |
