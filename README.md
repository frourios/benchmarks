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
* __Machine:__ Linux fv-az68 5.4.0-1025-azure #25~18.04.1-Ubuntu SMP Sat Sep 5 15:28:57 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.18.4`
* __Run:__ Sat Oct  3 09:03:20 UTC 2020

|                          | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:    | :-:        | --:     | --:           |
| polkadot                 | ✗      | 37993.4    | 2.53    | 5.94          |
| fastify                  | ✓      | 35351.4    | 2.73    | 5.53          |
| frourio-fastify          | ✓      | 33902.4    | 2.85    | 4.91          |
| micro                    | ✗      | 32160.2    | 3.01    | 5.03          |
| bare                     | ✗      | 32160.0    | 3.01    | 5.03          |
| nest-fastify             | ✓      | 31166.2    | 3.11    | 4.55          |
| connect                  | ✗      | 30928.6    | 3.14    | 4.84          |
| rayo                     | ✓      | 29931.2    | 3.24    | 4.68          |
| foxify                   | ✓      | 29692.8    | 3.27    | 4.22          |
| yeps                     | ✗      | 28948.0    | 3.36    | 4.53          |
| polka                    | ✓      | 28927.2    | 3.36    | 4.52          |
| server-base              | ✗      | 27648.4    | 3.52    | 4.32          |
| spirit                   | ✗      | 27458.8    | 3.30    | 4.29          |
| trek-engine              | ✗      | 27042.0    | 3.61    | 3.84          |
| connect-router           | ✓      | 26792.0    | 3.63    | 4.19          |
| server-base-router       | ✓      | 26790.0    | 3.63    | 4.19          |
| spirit-router            | ✓      | 26774.0    | 3.35    | 4.19          |
| micro-route              | ✓      | 26712.4    | 3.64    | 4.18          |
| trek-router              | ✓      | 25663.6    | 3.80    | 3.65          |
| koa                      | ✗      | 24727.6    | 3.95    | 3.87          |
| vapr                     | ✓      | 23705.6    | 4.11    | 3.37          |
| yeps-router              | ✓      | 23531.6    | 4.15    | 3.68          |
| koa-router               | ✓      | 21290.7    | 4.61    | 3.33          |
| total.js                 | ✓      | 21037.2    | 4.64    | 5.98          |
| restify                  | ✓      | 20602.4    | 4.76    | 3.26          |
| microrouter              | ✓      | 19482.1    | 5.03    | 3.05          |
| hapi                     | ✓      | 17357.3    | 5.69    | 2.71          |
| egg.js                   | ✓      | 12842.6    | 7.71    | 4.24          |
| fastify-big-json         | ✓      | 8347.0     | 11.82   | 95.84         |
| express                  | ✓      | 7595.6     | 13.00   | 1.19          |
| express-route-prefix     | ✓      | 7191.9     | 13.78   | 2.50          |
| nest                     | ✓      | 6729.7     | 14.71   | 1.39          |
| express-with-middlewares | ✓      | 6486.9     | 15.27   | 2.34          |
| frourio                  | ✓      | 6302.5     | 15.73   | 1.29          |
| take-five                | ✓      | N/A        | N/A     | N/A           |
