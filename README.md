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
* __Machine:__ Linux fv-az91-227 5.11.0-1027-azure #30~20.04.1-Ubuntu SMP Wed Jan 12 20:56:50 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.18.3`
* __Run:__ Tue Feb  1 01:18:13 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 31468.4    | 3.08    | 5.61          |
| bare                     | 14.15.1 | ✗      | 31370.4    | 3.09    | 5.59          |
| fastify                  | 3.27.0  | ✓      | 31018.8    | 3.13    | 5.53          |
| connect                  | 3.7.0   | ✗      | 30201.2    | 3.22    | 5.39          |
| micro                    | 9.3.4   | ✗      | 29896.4    | 3.25    | 5.33          |
| foxify                   | 0.10.20 | ✓      | 29696.0    | 3.27    | 4.87          |
| frourio                  | 0.23.1  | ✓      | 29611.2    | 3.28    | 5.28          |
| nest-fastify             | 7.6.18  | ✓      | 29268.0    | 3.32    | 4.91          |
| rayo                     | 1.3.10  | ✓      | 27459.2    | 3.54    | 4.90          |
| server-base              | 6.1.5   | ✗      | 27423.6    | 3.55    | 4.89          |
| spirit-router            | 0.5.0   | ✓      | 27280.0    | 3.29    | 4.86          |
| polka                    | 0.5.2   | ✓      | 26998.8    | 3.61    | 4.81          |
| server-base-router       | 6.1.5   | ✓      | 26955.2    | 3.61    | 4.81          |
| micro-route              | 2.5.0   | ✓      | 26413.6    | 3.69    | 4.71          |
| connect-router           | 1.3.6   | ✓      | 26376.0    | 3.69    | 4.70          |
| spirit                   | 0.6.1   | ✗      | 26284.4    | 3.40    | 4.69          |
| trek-router              | 1.2.0   | ✓      | 26283.6    | 3.71    | 4.31          |
| koa                      | 2.13.4  | ✗      | 24760.8    | 3.95    | 4.42          |
| yeps                     | 1.1.1   | ✗      | 24368.8    | 4.01    | 4.35          |
| yeps-router              | 1.2.0   | ✓      | 23778.8    | 4.11    | 4.24          |
| trek-engine              | 1.0.5   | ✗      | 22660.0    | 4.32    | 3.72          |
| vapr                     | 0.5.5   | ✓      | 21818.0    | 4.48    | 3.58          |
| koa-router               | 7.4.0   | ✓      | 21582.4    | 4.54    | 3.85          |
| total.js                 | 3.4.13  | ✓      | 20511.2    | 4.77    | 6.28          |
| restify                  | 8.6.0   | ✓      | 19898.7    | 4.93    | 3.59          |
| hapi                     | 20.2.1  | ✓      | 19770.3    | 4.97    | 3.53          |
| microrouter              | 3.1.3   | ✓      | 18407.3    | 5.33    | 3.28          |
| egg.js                   | 2.33.1  | ✓      | 12804.4    | 7.73    | 4.51          |
| frourio-express          | 0.23.0  | ✓      | 8429.6     | 11.71   | 1.50          |
| fastify-big-json         | 3.27.0  | ✓      | 8363.4     | 11.81   | 96.22         |
| express                  | 4.17.2  | ✓      | 7829.9     | 12.62   | 1.40          |
| express-route-prefix     | 4.17.2  | ✓      | 7540.7     | 13.16   | 2.79          |
| nest                     | 7.6.18  | ✓      | 6974.8     | 14.19   | 1.59          |
| express-with-middlewares | 4.17.2  | ✓      | 6866.6     | 14.40   | 2.63          |
