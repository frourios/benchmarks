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
* __Run:__ Mon Oct  5 23:35:21 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| fastify                  | ✓      | 35729.8    | 2.70    | 5.59          |
| polkadot                 | ✗      | 34106.0    | 2.84    | 5.33          |
| bare                     | ✗      | 33874.2    | 2.86    | 5.30          |
| frourio-fastify          | ✓      | 33528.2    | 2.89    | 4.86          |
| micro                    | ✗      | 32709.2    | 2.96    | 5.12          |
| foxify                   | ✓      | 32471.4    | 2.98    | 4.61          |
| rayo                     | ✓      | 31003.6    | 3.13    | 4.85          |
| connect                  | ✗      | 30923.6    | 3.14    | 4.84          |
| polka                    | ✓      | 30669.6    | 3.16    | 4.80          |
| connect-router           | ✓      | 30122.8    | 3.22    | 4.71          |
| yeps                     | ✗      | 30108.4    | 3.22    | 4.71          |
| nest-fastify             | ✓      | 30081.2    | 3.23    | 4.39          |
| server-base              | ✗      | 29489.2    | 3.29    | 4.61          |
| server-base-router       | ✓      | 29031.6    | 3.35    | 4.54          |
| spirit                   | ✗      | 27353.6    | 3.28    | 4.28          |
| micro-route              | ✓      | 27194.0    | 3.58    | 4.25          |
| trek-router              | ✓      | 26465.2    | 3.69    | 3.76          |
| trek-engine              | ✗      | 26273.6    | 3.72    | 3.73          |
| spirit-router            | ✓      | 26197.2    | 3.41    | 4.10          |
| yeps-router              | ✓      | 25765.2    | 3.78    | 4.03          |
| koa                      | ✗      | 25464.0    | 3.83    | 3.98          |
| vapr                     | ✓      | 24573.2    | 3.96    | 3.49          |
| restify                  | ✓      | 23421.2    | 4.17    | 3.71          |
| koa-router               | ✓      | 22014.8    | 4.45    | 3.44          |
| total.js                 | ✓      | 21785.2    | 4.48    | 6.19          |
| microrouter              | ✓      | 19520.5    | 5.03    | 3.05          |
| hapi                     | ✓      | 17114.1    | 5.77    | 2.68          |
| egg.js                   | ✓      | 12827.8    | 7.72    | 4.23          |
| express                  | ✓      | 7725.4     | 12.78   | 1.21          |
| fastify-big-json         | ✓      | 7576.8     | 13.05   | 86.99         |
| express-route-prefix     | ✓      | 7169.3     | 13.83   | 2.50          |
| nest                     | ✓      | 7094.5     | 13.95   | 1.46          |
| frourio                  | ✓      | 6630.2     | 14.95   | 1.36          |
| express-with-middlewares | ✓      | 6564.9     | 15.11   | 2.37          |
