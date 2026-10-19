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
* __Run:__ Mon Oct 19 2026 04:21:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| connect                  | 3.7.0    | ✗      | 83990.4    | 11.42        | 14.98         |
| bare                     | v20.20.2 | ✗      | 83857.6    | 11.44        | 14.95         |
| fastify                  | 5.12.7   | ✓      | 83216.0    | 11.53        | 14.92         |
| frourio                  | 1.3.1    | ✓      | 81396.8    | 11.79        | 14.59         |
| restana                  | v5.2.0   | ✓      | 79433.6    | 12.11        | 14.17         |
| polka                    | 0.5.2    | ✓      | 79224.0    | 12.14        | 14.13         |
| server-base-router       | 7.1.32   | ✓      | 78630.4    | 12.23        | 14.02         |
| rayo                     | 1.4.6    | ✓      | 78529.6    | 12.25        | 14.00         |
| server-base              | 7.1.32   | ✗      | 75496.0    | 12.75        | 13.46         |
| connect-router           | 1.3.8    | ✓      | 74726.4    | 12.90        | 13.33         |
| micro                    | 10.0.1   | ✗      | 74025.2    | 13.02        | 13.20         |
| micro-route              | 2.5.0    | ✓      | 72740.8    | 13.26        | 12.97         |
| 0http                    | 4.4.0    | ✓      | 71506.8    | 13.50        | 12.75         |
| adonisjs                 | 7.8.1    | ✓      | 70594.0    | 13.67        | 12.59         |
| hono                     | 4.13.13  | ✓      | 67228.8    | 14.38        | 11.03         |
| polkadot                 | 1.0.0    | ✗      | 67069.6    | 14.42        | 11.96         |
| h3                       | 1.15.11  | ✗      | 66247.6    | 14.61        | 11.81         |
| h3-router                | 1.15.11  | ✓      | 64409.2    | 15.03        | 11.49         |
| koa                      | 2.16.4   | ✗      | 61332.4    | 15.82        | 10.94         |
| take-five                | 2.0.0    | ✓      | 60777.6    | 15.97        | 21.85         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 58898.8    | 16.49        | 10.50         |
| koa-router               | 13.1.1   | ✓      | 56994.4    | 17.05        | 10.16         |
| restify                  | 11.1.0   | ✓      | 55596.0    | 17.49        | 10.02         |
| hapi                     | 21.4.10  | ✓      | 54048.0    | 18.01        | 9.64          |
| microrouter              | 3.1.3    | ✓      | 49932.0    | 19.53        | 8.91          |
| frourio-express          | 1.3.1    | ✓      | 15934.9    | 62.22        | 2.84          |
| fastify-big-json         | 5.12.7   | ✓      | 15853.8    | 62.58        | 182.41        |
| express                  | 5.3.0    | ✓      | 15801.4    | 62.76        | 2.82          |
| express-with-middlewares | 5.3.0    | ✓      | 14067.0    | 70.55        | 5.23          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
