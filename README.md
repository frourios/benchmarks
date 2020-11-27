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
* __Machine:__ Linux fv-az139-325 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Fri Nov 27 14:22:21 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.8.0   | ✓      | 39104.8    | 2.46    | 6.97          |
| frourio                  | 0.20.0  | ✓      | 38322.2    | 2.51    | 6.83          |
| polkadot                 | 1.0.0   | ✗      | 38000.0    | 2.52    | 6.78          |
| foxify                   | 0.10.20 | ✓      | 37558.6    | 2.57    | 6.16          |
| polka                    | 0.5.2   | ✓      | 37279.8    | 2.58    | 6.65          |
| bare                     | 10.13.0 | ✗      | 36186.6    | 2.67    | 6.45          |
| connect                  | 3.7.0   | ✗      | 35254.2    | 2.74    | 6.29          |
| micro                    | 9.3.4   | ✗      | 34755.2    | 2.78    | 6.20          |
| nest-fastify             | 7.5.5   | ✓      | 34531.0    | 2.80    | 5.80          |
| rayo                     | 1.3.6   | ✓      | 33211.0    | 2.91    | 5.92          |
| yeps                     | 1.1.1   | ✗      | 31896.6    | 3.03    | 5.69          |
| trek-engine              | 1.0.5   | ✗      | 30828.0    | 3.15    | 5.06          |
| connect-router           | 1.3.5   | ✓      | 30618.8    | 3.17    | 5.46          |
| server-base              | 6.1.5   | ✗      | 29945.2    | 3.24    | 5.34          |
| trek-router              | 1.2.0   | ✓      | 29532.8    | 3.29    | 4.84          |
| spirit-router            | 0.5.0   | ✓      | 29159.2    | 3.11    | 5.20          |
| micro-route              | 2.5.0   | ✓      | 29104.0    | 3.34    | 5.19          |
| server-base-router       | 6.1.5   | ✓      | 28045.2    | 3.46    | 5.00          |
| yeps-router              | 1.2.0   | ✓      | 26268.0    | 3.71    | 4.68          |
| koa                      | 2.13.0  | ✗      | 26256.0    | 3.71    | 4.68          |
| spirit                   | 0.6.1   | ✗      | 26206.0    | 3.46    | 4.67          |
| vapr                     | 0.5.5   | ✓      | 25137.6    | 3.87    | 4.12          |
| total.js                 | 3.4.6   | ✓      | 24225.2    | 4.02    | 7.42          |
| koa-router               | 7.4.0   | ✓      | 23732.0    | 4.12    | 4.23          |
| restify                  | 8.5.1   | ✓      | 23641.6    | 4.13    | 4.26          |
| microrouter              | 3.1.3   | ✓      | 19223.6    | 5.10    | 3.43          |
| hapi                     | 18.4.1  | ✓      | 18605.7    | 5.30    | 3.32          |
| egg.js                   | 2.29.1  | ✓      | 13658.8    | 7.24    | 4.81          |
| express                  | 4.17.1  | ✓      | 8671.6     | 11.38   | 1.55          |
| frourio-express          | 0.20.0  | ✓      | 8206.9     | 12.03   | 1.46          |
| fastify-big-json         | 3.8.0   | ✓      | 7623.6     | 12.96   | 87.70         |
| express-with-middlewares | 4.17.1  | ✓      | 7316.3     | 13.50   | 2.80          |
| express-route-prefix     | 4.17.1  | ✓      | 7221.7     | 13.72   | 2.67          |
| nest                     | 7.5.5   | ✓      | 6869.2     | 14.41   | 1.57          |
