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
* __Machine:__ Linux fv-az247-222 5.15.0-1041-azure #48-Ubuntu SMP Tue Jun 20 20:34:08 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.20.1`
* __Run:__ Tue Aug  1 00:53:59 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 53054.4    | 1.77    | 9.46          |
| bare                     | 14.15.1 | ✗      | 47542.6    | 2.01    | 8.48          |
| foxify                   | 0.10.20 | ✓      | 46836.0    | 2.04    | 7.68          |
| polka                    | 0.5.2   | ✓      | 46416.0    | 2.06    | 8.28          |
| fastify                  | 4.21.0  | ✓      | 46240.8    | 2.07    | 8.29          |
| connect                  | 3.7.0   | ✗      | 45983.2    | 2.08    | 8.20          |
| micro                    | 9.4.1   | ✗      | 44586.4    | 2.15    | 7.95          |
| frourio                  | 0.31.1  | ✓      | 44305.6    | 2.17    | 7.94          |
| nest-fastify             | 7.6.18  | ✓      | 42994.4    | 2.24    | 7.22          |
| yeps                     | 1.1.1   | ✗      | 42394.4    | 2.27    | 7.56          |
| micro-route              | 2.5.0   | ✓      | 41104.0    | 2.34    | 7.33          |
| server-base-router       | 6.1.5   | ✓      | 40669.4    | 2.37    | 7.25          |
| server-base              | 6.1.5   | ✗      | 40534.4    | 2.37    | 7.23          |
| connect-router           | 1.3.8   | ✓      | 40020.1    | 2.41    | 7.14          |
| trek-router              | 1.2.0   | ✓      | 39589.8    | 2.44    | 6.49          |
| trek-engine              | 1.0.5   | ✗      | 39210.2    | 2.47    | 6.43          |
| vapr                     | 0.5.5   | ✓      | 36137.8    | 2.67    | 5.93          |
| spirit-router            | 0.5.0   | ✓      | 33869.6    | 2.36    | 6.04          |
| koa                      | 2.14.2  | ✗      | 33596.4    | 2.89    | 5.99          |
| spirit                   | 0.6.1   | ✗      | 33446.6    | 2.39    | 5.96          |
| yeps-router              | 1.2.0   | ✓      | 33385.6    | 2.90    | 5.95          |
| total.js                 | 3.4.13  | ✓      | 32359.0    | 2.99    | 9.91          |
| restify                  | 8.6.1   | ✓      | 32180.6    | 3.02    | 5.80          |
| koa-router               | 7.4.0   | ✓      | 31378.8    | 3.10    | 5.60          |
| microrouter              | 3.1.3   | ✓      | 26799.6    | 3.63    | 4.78          |
| hapi                     | 20.3.0  | ✓      | 25882.8    | 3.78    | 4.62          |
| egg.js                   | 2.37.0  | ✓      | 12455.2    | 7.95    | 4.38          |
| frourio-express          | 0.31.1  | ✓      | 9338.5     | 10.57   | 1.67          |
| express                  | 4.18.2  | ✓      | 8996.5     | 10.97   | 1.60          |
| fastify-big-json         | 4.21.0  | ✓      | 8240.9     | 11.99   | 94.82         |
| express-route-prefix     | 4.18.2  | ✓      | 8097.6     | 12.24   | 3.00          |
| express-with-middlewares | 4.18.2  | ✓      | 7905.0     | 12.49   | 3.03          |
| nest                     | 7.6.18  | ✓      | 7744.4     | 12.77   | 1.77          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
