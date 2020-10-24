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
* __Machine:__ Linux fv-az18 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sat Oct 24 06:24:33 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.18.1  | ✓      | 59672.0    | 1.58    | 9.96          |
| bare                     | 10.13.0 | ✗      | 56086.4    | 1.69    | 10.00         |
| fastify                  | 3.7.0   | ✓      | 55584.8    | 1.71    | 9.91          |
| polkadot                 | 1.0.0   | ✗      | 55479.2    | 1.67    | 9.89          |
| foxify                   | 0.10.20 | ✓      | 53728.0    | 1.77    | 8.81          |
| polka                    | 0.5.2   | ✓      | 52902.4    | 1.80    | 9.43          |
| nest-fastify             | 7.4.4   | ✓      | 52412.8    | 1.82    | 8.80          |
| micro                    | 9.3.4   | ✗      | 51605.6    | 1.85    | 9.20          |
| connect                  | 3.7.0   | ✗      | 51354.4    | 1.86    | 9.16          |
| rayo                     | 1.3.5   | ✓      | 51147.2    | 1.86    | 9.12          |
| yeps                     | 1.1.1   | ✗      | 49857.6    | 1.91    | 8.89          |
| connect-router           | 1.3.5   | ✓      | 47864.8    | 1.99    | 8.54          |
| server-base-router       | 6.1.5   | ✓      | 47793.6    | 2.00    | 8.52          |
| server-base              | 6.1.5   | ✗      | 47757.6    | 2.00    | 8.52          |
| micro-route              | 2.5.0   | ✓      | 47488.8    | 2.01    | 8.47          |
| trek-engine              | 1.0.5   | ✗      | 43564.8    | 2.21    | 7.15          |
| trek-router              | 1.2.0   | ✓      | 42867.4    | 2.24    | 7.03          |
| yeps-router              | 1.2.0   | ✓      | 40618.4    | 2.37    | 7.24          |
| vapr                     | 0.5.5   | ✓      | 39740.0    | 2.42    | 6.52          |
| koa                      | 2.13.0  | ✗      | 39357.4    | 2.45    | 7.02          |
| spirit                   | 0.6.1   | ✗      | 39016.0    | 2.06    | 6.96          |
| spirit-router            | 0.5.0   | ✓      | 37041.6    | 2.19    | 6.61          |
| total.js                 | 3.4.5   | ✓      | 36992.0    | 2.60    | 11.32         |
| koa-router               | 7.4.0   | ✓      | 35352.2    | 2.74    | 6.30          |
| restify                  | 8.5.1   | ✓      | 34992.2    | 2.77    | 6.31          |
| microrouter              | 3.1.3   | ✓      | 27784.8    | 3.49    | 4.96          |
| hapi                     | 18.4.1  | ✓      | 23297.6    | 4.20    | 4.16          |
| egg.js                   | 2.29.1  | ✓      | 18768.7    | 5.25    | 6.60          |
| frourio-express          | 0.18.1  | ✓      | 11706.6    | 8.43    | 1.94          |
| express                  | 4.17.1  | ✓      | 11476.2    | 8.59    | 2.05          |
| express-with-middlewares | 4.17.1  | ✓      | 9858.5     | 10.01   | 3.78          |
| nest                     | 7.4.4   | ✓      | 9446.1     | 10.47   | 2.15          |
| fastify-big-json         | 3.7.0   | ✓      | 9028.4     | 10.94   | 103.86        |
| express-route-prefix     | 4.17.1  | ✓      | 8496.1     | 11.67   | 3.14          |
