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
* __Machine:__ Linux fv-az67-871 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Tue Dec  1 01:02:06 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| frourio                  | 0.21.1  | ✓      | 65653.6    | 1.43    | 11.71         |
| polkadot                 | 1.0.0   | ✗      | 64551.6    | 1.43    | 11.51         |
| fastify                  | 3.8.0   | ✓      | 64354.4    | 1.46    | 11.48         |
| bare                     | 10.13.0 | ✗      | 60705.6    | 1.56    | 10.83         |
| foxify                   | 0.10.20 | ✓      | 60485.6    | 1.57    | 9.92          |
| polka                    | 0.5.2   | ✓      | 59438.4    | 1.60    | 10.60         |
| rayo                     | 1.3.6   | ✓      | 57753.6    | 1.65    | 10.30         |
| connect                  | 3.7.0   | ✗      | 57688.8    | 1.65    | 10.29         |
| micro                    | 9.3.4   | ✗      | 57168.0    | 1.67    | 10.19         |
| nest-fastify             | 7.5.5   | ✓      | 56323.2    | 1.69    | 9.45          |
| yeps                     | 1.1.1   | ✗      | 52828.8    | 1.81    | 9.42          |
| server-base              | 6.1.5   | ✗      | 52731.2    | 1.81    | 9.40          |
| connect-router           | 1.3.5   | ✓      | 51563.2    | 1.85    | 9.20          |
| server-base-router       | 6.1.5   | ✓      | 51468.8    | 1.86    | 9.18          |
| micro-route              | 2.5.0   | ✓      | 49340.0    | 1.94    | 8.80          |
| trek-engine              | 1.0.5   | ✗      | 46698.4    | 2.06    | 7.66          |
| trek-router              | 1.2.0   | ✓      | 46180.0    | 2.08    | 7.57          |
| vapr                     | 0.5.5   | ✓      | 43211.2    | 2.23    | 7.09          |
| yeps-router              | 1.2.0   | ✓      | 41937.6    | 2.30    | 7.48          |
| koa                      | 2.13.0  | ✗      | 41755.2    | 2.31    | 7.45          |
| spirit                   | 0.6.1   | ✗      | 39545.6    | 1.95    | 7.05          |
| total.js                 | 3.4.6   | ✓      | 39380.8    | 2.45    | 12.06         |
| restify                  | 8.5.1   | ✓      | 38193.0    | 2.54    | 6.88          |
| spirit-router            | 0.5.0   | ✓      | 37904.0    | 2.05    | 6.76          |
| microrouter              | 3.1.3   | ✓      | 30533.2    | 3.18    | 5.44          |
| koa-router               | 7.4.0   | ✓      | 27109.2    | 3.62    | 4.83          |
| hapi                     | 18.4.1  | ✓      | 25040.0    | 3.91    | 4.47          |
| express                  | 4.17.1  | ✓      | 12749.2    | 7.73    | 2.27          |
| frourio-express          | 0.21.0  | ✓      | 12699.0    | 7.76    | 2.26          |
| express-with-middlewares | 4.17.1  | ✓      | 11226.2    | 8.78    | 4.30          |
| nest                     | 7.5.5   | ✓      | 10521.6    | 9.39    | 2.40          |
| fastify-big-json         | 3.8.0   | ✓      | 10502.8    | 9.39    | 120.83        |
| express-route-prefix     | 4.17.1  | ✓      | 10421.4    | 9.50    | 3.86          |
| egg.js                   | 2.29.1  | ✓      | 6760.3     | 14.68   | 2.38          |
