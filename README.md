<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 22 2025 01:07:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 46665.6    | 20.93        | 8.32          |
| frourio                  | 1.3.1    | ✓      | 45765.6    | 21.35        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45551.2    | 21.44        | 8.12          |
| polka                    | 0.5.2    | ✓      | 45481.6    | 21.50        | 8.11          |
| 0http                    | 4.3.0    | ✓      | 44921.6    | 21.77        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44799.2    | 21.83        | 7.99          |
| fastify                  | 5.6.0    | ✓      | 44523.2    | 21.96        | 7.98          |
| server-base-router       | 7.1.32   | ✓      | 44209.6    | 22.13        | 7.88          |
| polkadot                 | 1.0.0    | ✗      | 44098.4    | 22.18        | 7.86          |
| micro                    | 10.0.1   | ✗      | 43192.8    | 22.65        | 7.70          |
| server-base              | 7.1.32   | ✗      | 42902.4    | 22.80        | 7.65          |
| restana                  | v5.1.0   | ✓      | 41902.4    | 23.36        | 7.47          |
| connect-router           | 1.3.8    | ✓      | 41108.0    | 23.83        | 7.33          |
| h3-router                | 1.15.4   | ✓      | 40794.4    | 24.01        | 7.28          |
| adonisjs                 | 7.7.0    | ✓      | 40733.6    | 24.05        | 7.26          |
| micro-route              | 2.5.0    | ✓      | 40327.2    | 24.29        | 7.19          |
| h3                       | 1.15.4   | ✗      | 39079.2    | 25.10        | 6.97          |
| hono                     | 4.9.8    | ✓      | 36328.8    | 27.02        | 5.96          |
| koa                      | 2.16.2   | ✗      | 35534.2    | 27.63        | 6.34          |
| take-five                | 2.0.0    | ✓      | 35254.6    | 27.85        | 12.68         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34527.8    | 28.46        | 6.16          |
| restify                  | 11.1.0   | ✓      | 33447.2    | 29.39        | 6.03          |
| koa-router               | 13.1.1   | ✓      | 32970.6    | 29.83        | 5.88          |
| hapi                     | 21.4.3   | ✓      | 30486.8    | 32.29        | 5.44          |
| microrouter              | 3.1.3    | ✓      | 29026.0    | 33.94        | 5.18          |
| fastify-big-json         | 5.6.0    | ✓      | 11691.4    | 84.98        | 134.51        |
| express                  | 5.1.0    | ✓      | 9667.4     | 102.80       | 1.72          |
| frourio-express          | 1.3.1    | ✓      | 9419.8     | 105.51       | 1.68          |
| express-with-middlewares | 5.1.0    | ✓      | 9014.6     | 110.32       | 3.35          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
