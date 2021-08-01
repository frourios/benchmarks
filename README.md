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
* __Machine:__ Linux fv-az214-980 5.8.0-1039-azure #42~20.04.1-Ubuntu SMP Thu Jul 15 14:11:07 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.17.3`
* __Run:__ Sun Aug  1 01:15:02 UTC 2021

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 49597.6    | 1.88    | 8.85          |
| frourio                  | 0.23.1  | ✓      | 48660.8    | 1.95    | 8.68          |
| polka                    | 0.5.2   | ✓      | 48017.6    | 1.98    | 8.56          |
| bare                     | 14.15.1 | ✗      | 47265.6    | 2.01    | 8.43          |
| fastify                  | 3.19.2  | ✓      | 46868.0    | 2.02    | 8.36          |
| foxify                   | 0.10.20 | ✓      | 46856.8    | 2.03    | 7.69          |
| connect                  | 3.7.0   | ✗      | 46211.2    | 2.06    | 8.24          |
| rayo                     | 1.3.6   | ✓      | 45423.2    | 2.10    | 8.10          |
| nest-fastify             | 7.6.18  | ✓      | 43466.4    | 2.20    | 7.30          |
| micro                    | 9.3.4   | ✗      | 43418.4    | 2.20    | 7.74          |
| yeps                     | 1.1.1   | ✗      | 42907.2    | 2.23    | 7.65          |
| server-base-router       | 6.1.5   | ✓      | 42040.0    | 2.28    | 7.50          |
| connect-router           | 1.3.5   | ✓      | 41938.4    | 2.29    | 7.48          |
| server-base              | 6.1.5   | ✗      | 40727.2    | 2.35    | 7.26          |
| micro-route              | 2.5.0   | ✓      | 40009.6    | 2.40    | 7.14          |
| trek-engine              | 1.0.5   | ✗      | 38324.8    | 2.52    | 6.29          |
| trek-router              | 1.2.0   | ✓      | 37232.4    | 2.59    | 6.11          |
| koa                      | 2.13.1  | ✗      | 35171.8    | 2.75    | 6.27          |
| vapr                     | 0.5.5   | ✓      | 34757.8    | 2.78    | 5.70          |
| yeps-router              | 1.2.0   | ✓      | 34386.4    | 2.81    | 6.13          |
| spirit                   | 0.6.1   | ✗      | 34331.0    | 2.37    | 6.12          |
| spirit-router            | 0.5.0   | ✓      | 33713.6    | 2.41    | 6.01          |
| total.js                 | 3.4.9   | ✓      | 31258.6    | 3.10    | 9.57          |
| koa-router               | 7.4.0   | ✓      | 31230.8    | 3.11    | 5.57          |
| restify                  | 8.5.1   | ✓      | 28040.4    | 3.47    | 5.05          |
| hapi                     | 20.1.5  | ✓      | 25072.8    | 3.90    | 4.47          |
| microrouter              | 3.1.3   | ✓      | 23642.8    | 4.12    | 4.22          |
| egg.js                   | 2.29.4  | ✓      | 15987.5    | 6.18    | 5.63          |
| frourio-express          | 0.23.0  | ✓      | 9871.4     | 10.00   | 1.76          |
| express                  | 4.17.1  | ✓      | 9479.5     | 10.41   | 1.69          |
| nest                     | 7.6.18  | ✓      | 8157.6     | 12.13   | 1.86          |
| express-with-middlewares | 4.17.1  | ✓      | 8111.6     | 12.18   | 3.11          |
| express-route-prefix     | 4.17.1  | ✓      | 7941.9     | 12.49   | 2.94          |
| fastify-big-json         | 3.19.2  | ✓      | 2503.8     | 39.66   | 28.80         |
