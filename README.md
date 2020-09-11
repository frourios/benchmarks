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
* __Machine:__ Linux fv-az71 5.4.0-1023-azure #23~18.04.1-Ubuntu SMP Thu Aug 20 14:46:48 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.3`
* __Run:__ Fri Sep 11 00:57:26 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 35959.8    | 2.69    | 5.62          |
| bare                     | ✗      | 34308.6    | 2.82    | 5.37          |
| fastify                  | ✓      | 34235.4    | 2.83    | 5.35          |
| connect                  | ✗      | 32592.8    | 2.97    | 5.10          |
| polka                    | ✓      | 32516.0    | 2.98    | 5.09          |
| foxify                   | ✓      | 32063.0    | 3.02    | 4.56          |
| micro                    | ✗      | 31033.6    | 3.13    | 4.85          |
| rayo                     | ✓      | 29758.4    | 3.26    | 4.65          |
| yeps                     | ✗      | 29578.4    | 3.28    | 4.63          |
| nest-fastify             | ✓      | 28939.6    | 3.36    | 4.22          |
| server-base              | ✗      | 28699.6    | 3.39    | 4.49          |
| micro-route              | ✓      | 28387.2    | 3.42    | 4.44          |
| connect-router           | ✓      | 28222.4    | 3.44    | 4.41          |
| trek-engine              | ✗      | 27496.4    | 3.54    | 3.91          |
| server-base-router       | ✓      | 26835.2    | 3.63    | 4.20          |
| spirit-router            | ✓      | 26304.4    | 3.36    | 4.11          |
| yeps-router              | ✓      | 26195.2    | 3.72    | 4.10          |
| spirit                   | ✗      | 26124.8    | 3.37    | 4.09          |
| trek-router              | ✓      | 25951.6    | 3.76    | 3.69          |
| koa                      | ✗      | 24748.4    | 3.95    | 3.87          |
| vapr                     | ✓      | 24647.6    | 3.95    | 3.50          |
| restify                  | ✓      | 22736.4    | 4.31    | 3.60          |
| total.js                 | ✓      | 22160.0    | 4.40    | 6.30          |
| koa-router               | ✓      | 21934.0    | 4.47    | 3.43          |
| microrouter              | ✓      | 19229.6    | 5.10    | 3.01          |
| hapi                     | ✓      | 17931.5    | 5.51    | 2.80          |
| egg.js                   | ✓      | 14885.8    | 6.64    | 5.15          |
| express                  | ✓      | 7895.2     | 12.50   | 1.23          |
| fastify-big-json         | ✓      | 7801.9     | 12.67   | 89.58         |
| express-route-prefix     | ✓      | 7601.6     | 13.06   | 2.65          |
| nest                     | ✓      | 7072.4     | 13.99   | 1.46          |
| express-with-middlewares | ✓      | 6743.3     | 14.69   | 2.44          |
| frourio                  | ✓      | 6485.4     | 15.29   | 1.33          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
