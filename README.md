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
* __Node:__ `v20.19.1`
* __Run:__ Mon Jun 02 2025 01:07:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 49148.0    | 19.85        | 8.76          |
| fastify                  | 5.3.3    | ✓      | 48188.8    | 20.27        | 8.64          |
| frourio                  | 1.3.1    | ✓      | 47714.4    | 20.47        | 8.55          |
| connect                  | 3.7.0    | ✗      | 47098.4    | 20.72        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46714.4    | 20.89        | 8.33          |
| 0http                    | 4.2.1    | ✓      | 46292.0    | 21.10        | 8.26          |
| micro                    | 10.0.1   | ✗      | 46045.6    | 21.22        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45984.8    | 21.24        | 8.20          |
| h3                       | 1.15.3   | ✗      | 44776.8    | 21.83        | 7.99          |
| connect-router           | 1.3.8    | ✓      | 44519.2    | 21.98        | 7.94          |
| server-base              | 7.1.32   | ✗      | 44462.4    | 21.99        | 7.93          |
| server-base-router       | 7.1.32   | ✓      | 44085.6    | 22.18        | 7.86          |
| micro-route              | 2.5.0    | ✓      | 43701.6    | 22.39        | 7.79          |
| adonisjs                 | 7.6.1    | ✓      | 43531.2    | 22.48        | 7.76          |
| h3-router                | 1.15.3   | ✓      | 42887.2    | 22.81        | 7.65          |
| polkadot                 | 1.0.0    | ✗      | 42718.4    | 22.91        | 7.62          |
| hono                     | 4.7.11   | ✓      | 40563.2    | 24.15        | 6.65          |
| restana                  | v5.0.0   | ✓      | 38284.6    | 25.62        | 6.83          |
| koa                      | 2.16.1   | ✗      | 36870.6    | 26.62        | 6.58          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35065.8    | 28.03        | 6.25          |
| take-five                | 2.0.0    | ✓      | 34949.4    | 28.11        | 12.56         |
| restify                  | 11.1.0   | ✓      | 33880.4    | 29.01        | 6.11          |
| koa-router               | 13.1.0   | ✓      | 33330.4    | 29.47        | 5.94          |
| hapi                     | 21.4.0   | ✓      | 32264.2    | 30.49        | 5.75          |
| microrouter              | 3.1.3    | ✓      | 30840.4    | 31.93        | 5.50          |
| fastify-big-json         | 5.3.3    | ✓      | 11922.4    | 83.31        | 137.18        |
| express                  | 5.1.0    | ✓      | 10040.0    | 99.01        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9770.8     | 101.74       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 8774.1     | 113.33       | 3.26          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
