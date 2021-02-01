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
* __Machine:__ Linux fv-az71-614 5.4.0-1036-azure #38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.15.4`
* __Run:__ Mon Feb  1 01:06:13 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 44000.0    | 2.16    | 7.85          |
| fastify                  | 3.11.0  | ✓      | 38488.8    | 2.50    | 6.86          |
| foxify                   | 0.10.20 | ✓      | 36808.0    | 2.62    | 6.04          |
| frourio                  | 0.22.2  | ✓      | 36698.2    | 2.63    | 6.54          |
| bare                     | 10.13.0 | ✗      | 36366.6    | 2.66    | 6.49          |
| micro                    | 9.3.4   | ✗      | 35136.2    | 2.75    | 6.27          |
| rayo                     | 1.3.6   | ✓      | 33944.2    | 2.85    | 6.05          |
| nest-fastify             | 7.6.7   | ✓      | 33549.6    | 2.88    | 5.63          |
| polka                    | 0.5.2   | ✓      | 32896.4    | 2.94    | 5.87          |
| server-base              | 6.1.5   | ✗      | 31844.6    | 3.04    | 5.68          |
| spirit-router            | 0.5.0   | ✓      | 31573.8    | 2.68    | 5.63          |
| connect                  | 3.7.0   | ✗      | 31352.8    | 3.09    | 5.59          |
| connect-router           | 1.3.5   | ✓      | 30774.6    | 3.15    | 5.49          |
| server-base-router       | 6.1.5   | ✓      | 30604.6    | 3.17    | 5.46          |
| yeps                     | 1.1.1   | ✗      | 30175.2    | 3.22    | 5.38          |
| spirit                   | 0.6.1   | ✗      | 29820.4    | 2.87    | 5.32          |
| trek-engine              | 1.0.5   | ✗      | 29640.0    | 3.28    | 4.86          |
| micro-route              | 2.5.0   | ✓      | 28983.2    | 3.35    | 5.17          |
| trek-router              | 1.2.0   | ✓      | 28606.0    | 3.41    | 4.69          |
| koa                      | 2.13.1  | ✗      | 27713.6    | 3.52    | 4.94          |
| yeps-router              | 1.2.0   | ✓      | 26654.0    | 3.65    | 4.75          |
| restify                  | 8.5.1   | ✓      | 24776.0    | 3.94    | 4.47          |
| koa-router               | 7.4.0   | ✓      | 23671.2    | 4.13    | 4.22          |
| total.js                 | 3.4.7   | ✓      | 23322.0    | 4.18    | 7.14          |
| vapr                     | 0.5.5   | ✓      | 22704.0    | 4.30    | 3.72          |
| hapi                     | 20.1.0  | ✓      | 20371.1    | 4.81    | 3.63          |
| microrouter              | 3.1.3   | ✓      | 19062.5    | 5.15    | 3.40          |
| egg.js                   | 2.29.1  | ✓      | 13011.6    | 7.61    | 4.58          |
| frourio-express          | 0.22.2  | ✓      | 8740.1     | 11.29   | 1.56          |
| fastify-big-json         | 3.11.0  | ✓      | 8517.4     | 11.60   | 98.00         |
| express                  | 4.17.1  | ✓      | 8401.1     | 11.75   | 1.50          |
| express-route-prefix     | 4.17.1  | ✓      | 7770.2     | 12.75   | 2.88          |
| nest                     | 7.6.7   | ✓      | 7579.8     | 13.06   | 1.73          |
| express-with-middlewares | 4.17.1  | ✓      | 7395.6     | 13.36   | 2.84          |
