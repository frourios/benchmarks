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
* __Machine:__ Linux fv-az68 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Wed Oct 28 01:31:02 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.7.0   | ✓      | 64872.8    | 1.45    | 11.57         |
| frourio                  | 0.19.0  | ✓      | 64456.8    | 1.46    | 11.49         |
| polkadot                 | 1.0.0   | ✗      | 63492.0    | 1.45    | 11.32         |
| bare                     | 10.13.0 | ✗      | 61091.2    | 1.55    | 10.89         |
| rayo                     | 1.3.5   | ✓      | 58188.8    | 1.63    | 10.38         |
| foxify                   | 0.10.20 | ✓      | 57809.6    | 1.64    | 9.48          |
| nest-fastify             | 7.4.4   | ✓      | 57303.2    | 1.65    | 9.62          |
| connect                  | 3.7.0   | ✗      | 55747.2    | 1.71    | 9.94          |
| polka                    | 0.5.2   | ✓      | 55676.8    | 1.71    | 9.93          |
| micro                    | 9.3.4   | ✗      | 55661.6    | 1.71    | 9.93          |
| yeps                     | 1.1.1   | ✗      | 53106.4    | 1.79    | 9.47          |
| connect-router           | 1.3.5   | ✓      | 53069.6    | 1.80    | 9.46          |
| micro-route              | 2.5.0   | ✓      | 51784.8    | 1.84    | 9.23          |
| server-base-router       | 6.1.5   | ✓      | 51101.6    | 1.87    | 9.11          |
| server-base              | 6.1.5   | ✗      | 49782.4    | 1.92    | 8.88          |
| trek-engine              | 1.0.5   | ✗      | 46775.2    | 2.05    | 7.67          |
| trek-router              | 1.2.0   | ✓      | 46432.8    | 2.07    | 7.62          |
| yeps-router              | 1.2.0   | ✓      | 43576.8    | 2.21    | 7.77          |
| vapr                     | 0.5.5   | ✓      | 43160.0    | 2.23    | 7.08          |
| koa                      | 2.13.0  | ✗      | 41591.2    | 2.32    | 7.42          |
| spirit                   | 0.6.1   | ✗      | 41591.2    | 1.89    | 7.42          |
| total.js                 | 3.4.5   | ✓      | 39168.0    | 2.46    | 11.99         |
| spirit-router            | 0.5.0   | ✓      | 38594.4    | 2.06    | 6.88          |
| koa-router               | 7.4.0   | ✓      | 37677.8    | 2.57    | 6.72          |
| restify                  | 8.5.1   | ✓      | 36892.6    | 2.63    | 6.65          |
| microrouter              | 3.1.3   | ✓      | 29209.2    | 3.33    | 5.21          |
| hapi                     | 18.4.1  | ✓      | 24722.0    | 3.96    | 4.41          |
| egg.js                   | 2.29.1  | ✓      | 19216.7    | 5.13    | 6.76          |
| frourio-express          | 0.19.0  | ✓      | 12127.8    | 8.13    | 2.16          |
| express                  | 4.17.1  | ✓      | 11972.4    | 8.24    | 2.13          |
| express-with-middlewares | 4.17.1  | ✓      | 10228.8    | 9.64    | 3.92          |
| nest                     | 7.4.4   | ✓      | 10025.0    | 9.86    | 2.28          |
| express-route-prefix     | 4.17.1  | ✓      | 9795.2     | 10.11   | 3.62          |
| fastify-big-json         | 3.7.0   | ✓      | 9646.4     | 10.23   | 110.97        |
