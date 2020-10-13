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
* __Machine:__ Linux fv-az71 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Tue Oct 13 15:54:34 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.17.2  | ✓      | 56554.4    | 1.68    | 8.20          |
| polkadot                 | 1.0.0   | ✗      | 56544.0    | 1.65    | 8.84          |
| fastify                  | 3.6.0   | ✓      | 53755.2    | 1.77    | 8.41          |
| nest-fastify             | 7.4.4   | ✓      | 51738.4    | 1.85    | 7.55          |
| bare                     | 10.13.0 | ✗      | 51168.8    | 1.87    | 8.00          |
| polka                    | 0.5.2   | ✓      | 50876.0    | 1.87    | 7.96          |
| connect                  | 3.7.0   | ✗      | 50289.6    | 1.89    | 7.87          |
| rayo                     | 1.3.5   | ✓      | 50243.2    | 1.90    | 7.86          |
| foxify                   | 0.10.20 | ✓      | 49294.4    | 1.94    | 7.00          |
| micro                    | 9.3.4   | ✗      | 49070.4    | 1.95    | 7.68          |
| yeps                     | 1.1.1   | ✗      | 46816.8    | 2.05    | 7.32          |
| server-base              | 6.1.5   | ✗      | 45775.2    | 2.10    | 7.16          |
| server-base-router       | 6.1.5   | ✓      | 45376.0    | 2.12    | 7.10          |
| micro-route              | 2.5.0   | ✓      | 44919.2    | 2.13    | 7.03          |
| connect-router           | 1.3.5   | ✓      | 44614.4    | 2.15    | 6.98          |
| trek-router              | 1.2.0   | ✓      | 41496.2    | 2.33    | 5.90          |
| trek-engine              | 1.0.5   | ✗      | 40995.8    | 2.36    | 5.83          |
| koa                      | 2.13.0  | ✗      | 38431.4    | 2.52    | 6.01          |
| yeps-router              | 1.2.0   | ✓      | 37524.0    | 2.58    | 5.87          |
| vapr                     | 0.5.5   | ✓      | 37505.0    | 2.57    | 5.33          |
| spirit                   | 0.6.1   | ✗      | 36576.0    | 2.16    | 5.72          |
| spirit-router            | 0.5.0   | ✓      | 35549.8    | 2.24    | 5.56          |
| total.js                 | 3.4.5   | ✓      | 35255.6    | 2.74    | 10.02         |
| koa-router               | 7.4.0   | ✓      | 33999.4    | 2.86    | 5.32          |
| restify                  | 8.5.1   | ✓      | 33460.4    | 2.90    | 5.30          |
| microrouter              | 3.1.3   | ✓      | 25218.8    | 3.86    | 3.94          |
| hapi                     | 18.4.1  | ✓      | 21480.4    | 4.57    | 3.36          |
| egg.js                   | 2.28.0  | ✓      | 18843.3    | 5.23    | 6.22          |
| express                  | 4.17.1  | ✓      | 10425.0    | 9.46    | 1.63          |
| express-route-prefix     | 4.17.1  | ✓      | 9453.5     | 10.48   | 3.29          |
| frourio-express          | 0.17.1  | ✓      | 9191.1     | 10.73   | 1.88          |
| nest                     | 7.4.4   | ✓      | 9079.0     | 10.90   | 1.87          |
| express-with-middlewares | 4.17.1  | ✓      | 8903.2     | 11.08   | 3.22          |
| fastify-big-json         | 3.6.0   | ✓      | 8878.4     | 11.13   | 101.96        |
