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
* __Node:__ `v20.20.0`
* __Run:__ Mon Mar 16 2026 01:19:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 45854.4    | 21.31        | 8.18          |
| frourio                  | 1.3.1    | ✓      | 45408.8    | 21.52        | 8.14          |
| polka                    | 0.5.2    | ✓      | 45325.6    | 21.57        | 8.08          |
| fastify                  | 5.8.2    | ✓      | 45297.6    | 21.58        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 45240.8    | 21.61        | 8.07          |
| connect                  | 3.7.0    | ✗      | 44792.0    | 21.83        | 7.99          |
| rayo                     | 1.4.6    | ✓      | 44730.4    | 21.86        | 7.98          |
| server-base              | 7.1.32   | ✗      | 44611.2    | 21.93        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 43269.6    | 22.62        | 7.72          |
| micro                    | 10.0.1   | ✗      | 43105.6    | 22.70        | 7.69          |
| 0http                    | 4.3.0    | ✓      | 42727.2    | 22.91        | 7.62          |
| restana                  | v5.1.0   | ✓      | 42228.0    | 23.18        | 7.53          |
| connect-router           | 1.3.8    | ✓      | 42188.8    | 23.20        | 7.52          |
| adonisjs                 | 7.8.0    | ✓      | 41193.6    | 23.78        | 7.35          |
| micro-route              | 2.5.0    | ✓      | 40373.6    | 24.26        | 7.20          |
| h3                       | 1.15.6   | ✗      | 39944.8    | 24.54        | 7.12          |
| h3-router                | 1.15.6   | ✓      | 39434.4    | 24.86        | 7.03          |
| koa                      | 2.16.4   | ✗      | 36111.0    | 27.19        | 6.44          |
| hono                     | 4.12.8   | ✓      | 34755.0    | 28.27        | 5.70          |
| restify                  | 11.1.0   | ✓      | 34433.4    | 28.54        | 6.21          |
| koa-router               | 13.1.1   | ✓      | 33649.6    | 29.21        | 6.00          |
| take-five                | 2.0.0    | ✓      | 33603.6    | 29.25        | 12.08         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33577.4    | 29.28        | 5.99          |
| hapi                     | 21.4.7   | ✓      | 30816.8    | 31.94        | 5.50          |
| microrouter              | 3.1.3    | ✓      | 29401.2    | 33.50        | 5.24          |
| fastify-big-json         | 5.8.2    | ✓      | 11317.6    | 87.76        | 130.21        |
| express                  | 5.2.1    | ✓      | 10433.0    | 95.27        | 1.86          |
| frourio-express          | 1.3.1    | ✓      | 9838.4     | 101.03       | 1.75          |
| express-with-middlewares | 5.2.1    | ✓      | 9162.5     | 108.51       | 3.41          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
