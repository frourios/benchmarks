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
* __Machine:__ Linux fv-az92 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Mon Oct  5 13:20:28 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 38535.4    | 2.49    | 6.03          |
| frourio-fastify          | ✓      | 36442.2    | 2.65    | 5.28          |
| fastify                  | ✓      | 36075.8    | 2.68    | 5.64          |
| bare                     | ✗      | 35493.0    | 2.72    | 5.55          |
| micro                    | ✗      | 33879.0    | 2.86    | 5.30          |
| connect                  | ✗      | 33423.2    | 2.90    | 5.23          |
| foxify                   | ✓      | 32529.2    | 2.98    | 4.62          |
| rayo                     | ✓      | 32207.0    | 3.01    | 5.04          |
| nest-fastify             | ✓      | 30986.8    | 3.13    | 4.52          |
| polka                    | ✓      | 30652.4    | 3.17    | 4.79          |
| yeps                     | ✗      | 29009.2    | 3.35    | 4.54          |
| server-base-router       | ✓      | 28562.0    | 3.40    | 4.47          |
| connect-router           | ✓      | 28124.4    | 3.46    | 4.40          |
| micro-route              | ✓      | 28062.0    | 3.47    | 4.39          |
| server-base              | ✗      | 27760.8    | 3.50    | 4.34          |
| spirit                   | ✗      | 27524.8    | 3.31    | 4.30          |
| trek-engine              | ✗      | 26145.6    | 3.73    | 3.72          |
| spirit-router            | ✓      | 26012.4    | 3.49    | 4.07          |
| trek-router              | ✓      | 25631.6    | 3.81    | 3.64          |
| koa                      | ✗      | 25049.2    | 3.90    | 3.92          |
| yeps-router              | ✓      | 24409.6    | 4.00    | 3.82          |
| vapr                     | ✓      | 22884.0    | 4.27    | 3.25          |
| restify                  | ✓      | 22594.4    | 4.33    | 3.58          |
| total.js                 | ✓      | 21703.2    | 4.50    | 6.17          |
| koa-router               | ✓      | 21200.8    | 4.63    | 3.32          |
| microrouter              | ✓      | 19371.6    | 5.06    | 3.03          |
| hapi                     | ✓      | 17812.3    | 5.54    | 2.79          |
| egg.js                   | ✓      | 13197.6    | 7.50    | 4.35          |
| fastify-big-json         | ✓      | 7985.0     | 12.36   | 91.69         |
| express                  | ✓      | 7251.3     | 13.62   | 1.13          |
| express-route-prefix     | ✓      | 7184.1     | 13.80   | 2.50          |
| nest                     | ✓      | 6549.0     | 15.11   | 1.35          |
| express-with-middlewares | ✓      | 6476.9     | 15.28   | 2.34          |
| frourio                  | ✓      | 6168.7     | 16.05   | 1.26          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
