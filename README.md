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
* __Machine:__ Linux fv-az561-368 5.15.0-1034-azure #41-Ubuntu SMP Fri Feb 10 19:59:45 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v16.19.1`
* __Run:__ Sat Apr  1 00:52:51 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 48614.4    | 1.94    | 8.67          |
| bare                     | 14.15.1 | ✗      | 46240.8    | 2.07    | 8.25          |
| fastify                  | 4.15.0  | ✓      | 43804.8    | 2.19    | 7.85          |
| polka                    | 0.5.2   | ✓      | 43058.4    | 2.23    | 7.68          |
| frourio                  | 0.31.1  | ✓      | 42430.4    | 2.26    | 7.61          |
| foxify                   | 0.10.20 | ✓      | 42268.2    | 2.27    | 6.93          |
| micro                    | 9.4.1   | ✗      | 42082.4    | 2.29    | 7.51          |
| connect                  | 3.7.0   | ✗      | 41037.6    | 2.34    | 7.32          |
| nest-fastify             | 7.6.18  | ✓      | 40129.8    | 2.40    | 6.74          |
| yeps                     | 1.1.1   | ✗      | 38899.2    | 2.48    | 6.94          |
| micro-route              | 2.5.0   | ✓      | 38848.6    | 2.48    | 6.93          |
| trek-engine              | 1.0.5   | ✗      | 37106.6    | 2.60    | 6.09          |
| server-base              | 6.1.5   | ✗      | 36988.6    | 2.61    | 6.60          |
| trek-router              | 1.2.0   | ✓      | 36569.0    | 2.65    | 6.00          |
| connect-router           | 1.3.8   | ✓      | 36334.5    | 2.65    | 6.48          |
| server-base-router       | 6.1.5   | ✓      | 36242.6    | 2.66    | 6.46          |
| vapr                     | 0.5.5   | ✓      | 33952.0    | 2.85    | 5.57          |
| koa                      | 2.14.1  | ✗      | 32743.6    | 2.97    | 5.84          |
| yeps-router              | 1.2.0   | ✓      | 30940.6    | 3.14    | 5.52          |
| restify                  | 8.6.1   | ✓      | 30579.2    | 3.18    | 5.51          |
| total.js                 | 3.4.13  | ✓      | 29816.0    | 3.25    | 9.13          |
| koa-router               | 7.4.0   | ✓      | 29568.0    | 3.29    | 5.27          |
| spirit-router            | 0.5.0   | ✓      | 29272.0    | 2.89    | 5.22          |
| spirit                   | 0.6.1   | ✗      | 28952.4    | 2.99    | 5.16          |
| microrouter              | 3.1.3   | ✓      | 25307.2    | 3.85    | 4.51          |
| hapi                     | 20.3.0  | ✓      | 24126.4    | 4.06    | 4.30          |
| egg.js                   | 2.37.0  | ✓      | 11942.8    | 8.30    | 4.20          |
| frourio-express          | 0.31.1  | ✓      | 8673.6     | 11.39   | 1.55          |
| express                  | 4.18.2  | ✓      | 8508.9     | 11.60   | 1.52          |
| fastify-big-json         | 4.15.0  | ✓      | 8122.1     | 12.17   | 93.44         |
| express-route-prefix     | 4.18.2  | ✓      | 7654.1     | 12.96   | 2.83          |
| nest                     | 7.6.18  | ✓      | 7461.1     | 13.27   | 1.70          |
| express-with-middlewares | 4.18.2  | ✓      | 7456.6     | 13.25   | 2.86          |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
