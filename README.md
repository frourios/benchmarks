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
* __Machine:__ Linux fv-az1109-104 6.2.0-1012-azure #12~22.04.1-Ubuntu SMP Thu Sep  7 14:07:14 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v18.18.0`
* __Run:__ Sun Oct  1 01:06:02 UTC 2023

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.4.1   | ✗      | 26952.4    | 3.62    | 4.81          |
| fastify                  | 4.23.2  | ✓      | 26233.2    | 3.71    | 4.70          |
| polka                    | 0.5.2   | ✓      | 26048.8    | 3.74    | 4.65          |
| nest-fastify             | 7.6.18  | ✓      | 25605.2    | 3.82    | 4.30          |
| foxify                   | 0.10.20 | ✓      | 25558.4    | 3.82    | 4.19          |
| spirit                   | 0.6.1   | ✗      | 25165.2    | 3.61    | 4.49          |
| bare                     | 14.15.1 | ✗      | 24767.2    | 3.94    | 4.42          |
| spirit-router            | 0.5.0   | ✓      | 24440.0    | 3.71    | 4.36          |
| yeps                     | 1.1.1   | ✗      | 23641.2    | 4.13    | 4.22          |
| frourio                  | 0.34.1  | ✓      | 23218.9    | 4.21    | 4.16          |
| connect-router           | 1.3.8   | ✓      | 23218.0    | 4.21    | 4.14          |
| micro-route              | 2.5.0   | ✓      | 22986.4    | 4.25    | 4.10          |
| server-base-router       | 6.1.5   | ✓      | 22744.0    | 4.30    | 4.06          |
| server-base              | 6.1.5   | ✗      | 22518.8    | 4.34    | 4.02          |
| connect                  | 3.7.0   | ✗      | 22511.6    | 4.35    | 4.01          |
| trek-engine              | 1.0.5   | ✗      | 21330.1    | 4.60    | 3.50          |
| polkadot                 | 1.0.0   | ✗      | 21074.0    | 4.66    | 3.76          |
| trek-router              | 1.2.0   | ✓      | 20879.9    | 4.70    | 3.42          |
| vapr                     | 0.5.5   | ✓      | 20776.9    | 4.71    | 3.41          |
| yeps-router              | 1.2.0   | ✓      | 20543.9    | 4.77    | 3.66          |
| koa                      | 2.14.2  | ✗      | 20253.5    | 4.85    | 3.61          |
| koa-router               | 7.4.0   | ✓      | 19017.1    | 5.18    | 3.39          |
| microrouter              | 3.1.3   | ✓      | 15636.8    | 6.29    | 2.79          |
| egg.js                   | 2.37.0  | ✓      | 7737.7     | 12.83   | 2.72          |
| fastify-big-json         | 4.23.2  | ✓      | 6020.9     | 16.47   | 69.28         |
| frourio-express          | 0.34.0  | ✓      | 5945.1     | 16.65   | 1.06          |
| express                  | 4.18.2  | ✓      | 5737.8     | 17.27   | 1.02          |
| express-route-prefix     | 4.18.2  | ✓      | 5513.8     | 18.01   | 2.04          |
| nest                     | 7.6.18  | ✓      | 5100.8     | 19.43   | 1.16          |
| express-with-middlewares | 4.18.2  | ✓      | 5008.8     | 19.80   | 1.92          |
| hapi                     | 20.3.0  | ✓      | N/A        | N/A     | N/A           |
| rayo                     | 1.4.0   | ✓      | N/A        | N/A     | N/A           |
| restify                  | 8.6.1   | ✓      | N/A        | N/A     | N/A           |
| total.js                 | 3.4.13  | ✓      | N/A        | N/A     | N/A           |
