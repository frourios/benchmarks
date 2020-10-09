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
* __Machine:__ Linux fv-az71 5.4.0-1026-azure #26~18.04.1-Ubuntu SMP Thu Sep 10 16:19:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Fri Oct  9 11:13:15 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 38329.4    | 2.51    | 6.00          |
| frourio                  | 0.17.0  | ✓      | 36630.2    | 2.64    | 5.31          |
| fastify                  | 3.5.1   | ✓      | 35371.4    | 2.73    | 5.53          |
| bare                     | 10.13.0 | ✗      | 33587.6    | 2.88    | 5.25          |
| micro                    | 9.3.4   | ✗      | 33509.2    | 2.89    | 5.24          |
| foxify                   | 0.10.20 | ✓      | 33178.8    | 2.92    | 4.71          |
| polka                    | 0.5.2   | ✓      | 32897.6    | 2.94    | 5.14          |
| nest-fastify             | 7.4.4   | ✓      | 32503.8    | 2.98    | 4.74          |
| connect                  | 3.7.0   | ✗      | 31911.8    | 3.04    | 4.99          |
| rayo                     | 1.3.5   | ✓      | 31199.2    | 3.11    | 4.88          |
| yeps                     | 1.1.1   | ✗      | 30187.6    | 3.21    | 4.72          |
| connect-router           | 1.3.5   | ✓      | 29034.8    | 3.35    | 4.54          |
| server-base              | 6.1.5   | ✗      | 28780.8    | 3.38    | 4.50          |
| server-base-router       | 6.1.5   | ✓      | 28498.8    | 3.41    | 4.46          |
| spirit                   | 0.6.1   | ✗      | 28388.8    | 3.20    | 4.44          |
| spirit-router            | 0.5.0   | ✓      | 27968.0    | 3.25    | 4.37          |
| micro-route              | 2.5.0   | ✓      | 27383.6    | 3.55    | 4.28          |
| trek-engine              | 1.0.5   | ✗      | 27246.8    | 3.58    | 3.87          |
| yeps-router              | 1.2.0   | ✓      | 26593.6    | 3.66    | 4.16          |
| restify                  | 8.5.1   | ✓      | 23865.6    | 4.10    | 3.78          |
| trek-router              | 1.2.0   | ✓      | 23376.8    | 4.19    | 3.32          |
| vapr                     | 0.5.5   | ✓      | 23154.0    | 4.22    | 3.29          |
| koa-router               | 7.4.0   | ✓      | 22661.6    | 4.32    | 3.54          |
| koa                      | 2.13.0  | ✗      | 21742.0    | 4.51    | 3.40          |
| total.js                 | 3.4.5   | ✓      | 21136.4    | 4.62    | 6.01          |
| microrouter              | 3.1.3   | ✓      | 19361.3    | 5.07    | 3.03          |
| hapi                     | 18.4.1  | ✓      | 18331.9    | 5.38    | 2.87          |
| egg.js                   | 2.28.0  | ✓      | 13787.6    | 7.18    | 4.55          |
| fastify-big-json         | 3.5.1   | ✓      | 8332.5     | 11.84   | 95.69         |
| express                  | 4.17.1  | ✓      | 7824.4     | 12.62   | 1.22          |
| express-route-prefix     | 4.17.1  | ✓      | 7251.1     | 13.67   | 2.52          |
| nest                     | 7.4.4   | ✓      | 6767.6     | 14.62   | 1.39          |
| express-with-middlewares | 4.17.1  | ✓      | 6734.2     | 14.71   | 2.43          |
| frourio-express          | 0.17.0  | ✓      | 6685.3     | 14.81   | 1.37          |
