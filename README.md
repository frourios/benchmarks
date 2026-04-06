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
* __Node:__ `v20.20.2`
* __Run:__ Mon Apr 06 2026 01:21:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47496.0    | 20.55        | 8.47          |
| fastify                  | 5.8.4    | ✓      | 47014.4    | 20.76        | 8.43          |
| frourio                  | 1.3.1    | ✓      | 46880.8    | 20.83        | 8.41          |
| micro                    | 10.0.1   | ✗      | 46769.6    | 20.87        | 8.34          |
| connect                  | 3.7.0    | ✗      | 46166.4    | 21.16        | 8.23          |
| polka                    | 0.5.2    | ✓      | 45683.2    | 21.40        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45626.4    | 21.42        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45423.2    | 21.53        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 44990.4    | 21.74        | 8.02          |
| 0http                    | 4.3.0    | ✓      | 44964.8    | 21.74        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 43945.6    | 22.26        | 7.84          |
| connect-router           | 1.3.8    | ✓      | 43479.2    | 22.49        | 7.75          |
| adonisjs                 | 7.8.0    | ✓      | 43407.2    | 22.54        | 7.74          |
| restana                  | v5.1.0   | ✓      | 43048.0    | 22.73        | 7.68          |
| micro-route              | 2.5.0    | ✓      | 41966.4    | 23.33        | 7.48          |
| h3                       | 1.15.11  | ✗      | 41386.4    | 23.66        | 7.38          |
| h3-router                | 1.15.11  | ✓      | 40404.0    | 24.25        | 7.21          |
| koa                      | 2.16.4   | ✗      | 36945.4    | 26.56        | 6.59          |
| hono                     | 4.12.10  | ✓      | 35873.6    | 27.37        | 5.88          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34752.0    | 28.27        | 6.20          |
| restify                  | 11.1.0   | ✓      | 34331.4    | 28.61        | 6.19          |
| take-five                | 2.0.0    | ✓      | 34239.4    | 28.70        | 12.31         |
| koa-router               | 13.1.1   | ✓      | 32344.0    | 30.41        | 5.77          |
| hapi                     | 21.4.8   | ✓      | 32304.2    | 30.45        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 29833.6    | 33.02        | 5.32          |
| fastify-big-json         | 5.8.4    | ✓      | 11020.0    | 90.15        | 126.78        |
| frourio-express          | 1.3.1    | ✓      | 9632.5     | 103.20       | 1.72          |
| express                  | 5.2.1    | ✓      | 9617.4     | 103.38       | 1.71          |
| express-with-middlewares | 5.2.1    | ✓      | 9027.5     | 110.15       | 3.36          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
