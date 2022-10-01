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
* __Machine:__ Linux fv-az204-790 5.15.0-1020-azure #25~20.04.1-Ubuntu SMP Thu Sep 1 19:20:56 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v14.20.0`
* __Run:__ Sat Oct  1 02:06:01 UTC 2022

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 65499.6    | 1.41    | 11.68         |
| bare                     | 14.15.1 | ✗      | 58092.0    | 1.64    | 10.36         |
| polka                    | 0.5.2   | ✓      | 57967.2    | 1.64    | 10.34         |
| foxify                   | 0.10.20 | ✓      | 57765.6    | 1.65    | 9.48          |
| frourio                  | 0.26.0  | ✓      | 57152.8    | 1.67    | 10.19         |
| connect                  | 3.7.0   | ✗      | 56402.4    | 1.69    | 10.06         |
| fastify                  | 3.29.2  | ✓      | 56084.8    | 1.70    | 10.00         |
| micro                    | 9.4.1   | ✗      | 56072.8    | 1.70    | 10.00         |
| rayo                     | 1.3.10  | ✓      | 55323.2    | 1.72    | 9.87          |
| yeps                     | 1.1.1   | ✗      | 53565.6    | 1.78    | 9.55          |
| nest-fastify             | 7.6.18  | ✓      | 53035.2    | 1.80    | 8.90          |
| server-base-router       | 6.1.5   | ✓      | 52918.4    | 1.80    | 9.44          |
| micro-route              | 2.5.0   | ✓      | 52828.8    | 1.81    | 9.42          |
| server-base              | 6.1.5   | ✗      | 51850.4    | 1.84    | 9.25          |
| connect-router           | 1.3.7   | ✓      | 51420.0    | 1.86    | 9.17          |
| trek-router              | 1.2.0   | ✓      | 47950.4    | 2.01    | 7.87          |
| trek-engine              | 1.0.5   | ✗      | 47786.4    | 2.01    | 7.84          |
| vapr                     | 0.5.5   | ✓      | 46170.4    | 2.08    | 7.57          |
| spirit                   | 0.6.1   | ✗      | 44244.8    | 1.90    | 7.89          |
| yeps-router              | 1.2.0   | ✓      | 44149.6    | 2.18    | 7.87          |
| spirit-router            | 0.5.0   | ✓      | 43096.8    | 1.95    | 7.69          |
| koa                      | 2.13.4  | ✗      | 42936.0    | 2.25    | 7.66          |
| total.js                 | 3.4.13  | ✓      | 41365.6    | 2.33    | 12.66         |
| restify                  | 8.6.1   | ✓      | 39218.4    | 2.47    | 7.07          |
| koa-router               | 7.4.0   | ✓      | 39084.0    | 2.48    | 6.97          |
| hapi                     | 20.2.2  | ✓      | 33797.0    | 2.88    | 6.03          |
| microrouter              | 3.1.3   | ✓      | 33417.0    | 2.90    | 5.96          |
| egg.js                   | 2.37.0  | ✓      | 20266.4    | 4.85    | 7.13          |
| frourio-express          | 0.26.0  | ✓      | 13741.0    | 7.17    | 2.45          |
| express                  | 4.18.1  | ✓      | 13602.0    | 7.24    | 2.43          |
| nest                     | 7.6.18  | ✓      | 12249.4    | 8.06    | 2.79          |
| express-route-prefix     | 4.18.1  | ✓      | 11940.8    | 8.30    | 4.42          |
| express-with-middlewares | 4.18.1  | ✓      | 11874.0    | 8.30    | 4.55          |
| fastify-big-json         | 3.29.2  | ✓      | 11521.2    | 8.56    | 132.54        |
