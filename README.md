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
* __Machine:__ Linux fv-az70 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Thu Oct  1 01:19:19 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 58262.4    | 1.61    | 9.11          |
| fastify                  | ✓      | 55472.0    | 1.72    | 8.68          |
| foxify                   | ✓      | 53600.0    | 1.78    | 7.62          |
| micro                    | ✗      | 53184.0    | 1.80    | 8.32          |
| polka                    | ✓      | 52745.6    | 1.81    | 8.25          |
| bare                     | ✗      | 52735.2    | 1.81    | 8.25          |
| connect                  | ✗      | 52441.6    | 1.82    | 8.20          |
| rayo                     | ✓      | 49772.0    | 1.92    | 7.78          |
| nest-fastify             | ✓      | 49307.2    | 1.95    | 7.19          |
| yeps                     | ✗      | 49185.6    | 1.95    | 7.69          |
| server-base-router       | ✓      | 47652.8    | 2.01    | 7.45          |
| connect-router           | ✓      | 47126.4    | 2.03    | 7.37          |
| server-base              | ✗      | 46832.8    | 2.05    | 7.32          |
| micro-route              | ✓      | 46575.2    | 2.06    | 7.28          |
| trek-router              | ✓      | 43566.4    | 2.22    | 6.19          |
| trek-engine              | ✗      | 43281.4    | 2.23    | 6.15          |
| vapr                     | ✓      | 40245.6    | 2.40    | 5.72          |
| yeps-router              | ✓      | 39580.8    | 2.44    | 6.19          |
| koa                      | ✗      | 38605.8    | 2.51    | 6.04          |
| spirit                   | ✗      | 38260.0    | 2.07    | 5.98          |
| spirit-router            | ✓      | 38194.4    | 2.10    | 5.97          |
| total.js                 | ✓      | 37320.0    | 2.59    | 10.61         |
| koa-router               | ✓      | 36351.8    | 2.67    | 5.69          |
| restify                  | ✓      | 34403.0    | 2.82    | 5.45          |
| microrouter              | ✓      | 28506.4    | 3.41    | 4.46          |
| hapi                     | ✓      | 24086.8    | 4.07    | 3.77          |
| egg.js                   | ✓      | 19553.4    | 5.04    | 6.45          |
| express                  | ✓      | 11116.6    | 8.87    | 1.74          |
| nest                     | ✓      | 10016.0    | 9.87    | 2.06          |
| express-with-middlewares | ✓      | 9720.6     | 10.15   | 3.51          |
| express-route-prefix     | ✓      | 9653.9     | 10.26   | 3.36          |
| fastify-big-json         | ✓      | 9518.3     | 10.37   | 109.29        |
| frourio                  | ✓      | 9384.8     | 10.51   | 1.92          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
