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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 24 2025 01:03:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 46706.4    | 20.90        | 8.37          |
| server-base-router       | 7.1.32   | ✓      | 46254.4    | 21.12        | 8.25          |
| fastify                  | 5.2.1    | ✓      | 46076.0    | 21.20        | 8.26          |
| polka                    | 0.5.2    | ✓      | 45974.4    | 21.24        | 8.20          |
| bare                     | v20.18.2 | ✗      | 45939.4    | 21.25        | 8.19          |
| server-base              | 7.1.32   | ✗      | 45932.8    | 21.27        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45352.8    | 21.55        | 8.09          |
| micro                    | 10.0.1   | ✗      | 44977.6    | 21.73        | 8.02          |
| 0http                    | 4.1.0    | ✓      | 44652.8    | 21.90        | 7.96          |
| connect                  | 3.7.0    | ✗      | 44589.6    | 21.94        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 44528.8    | 21.96        | 7.94          |
| h3                       | 1.15.1   | ✗      | 42916.8    | 22.80        | 7.65          |
| micro-route              | 2.5.0    | ✓      | 42157.6    | 23.22        | 7.52          |
| connect-router           | 1.3.8    | ✓      | 42119.2    | 23.24        | 7.51          |
| adonisjs                 | 7.4.0    | ✓      | 41577.6    | 23.55        | 7.41          |
| h3-router                | 1.15.1   | ✓      | 40744.8    | 24.05        | 7.27          |
| hono                     | 4.7.2    | ✓      | 39187.2    | 25.02        | 6.43          |
| restana                  | v5.0.0   | ✓      | 37735.2    | 26.01        | 6.73          |
| koa                      | 2.15.4   | ✗      | 36651.0    | 26.78        | 6.54          |
| take-five                | 2.0.0    | ✓      | 35364.0    | 27.77        | 12.71         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34886.6    | 28.16        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34874.2    | 28.17        | 6.29          |
| koa-router               | 13.1.0   | ✓      | 33661.2    | 29.21        | 6.00          |
| hapi                     | 21.3.12  | ✓      | 31786.2    | 30.96        | 5.67          |
| microrouter              | 3.1.3    | ✓      | 29982.8    | 32.85        | 5.35          |
| fastify-big-json         | 5.2.1    | ✓      | 11993.8    | 82.82        | 138.00        |
| express                  | 5.0.1    | ✓      | 10034.0    | 99.07        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9976.0     | 99.63        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 8906.5     | 111.66       | 3.31          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
