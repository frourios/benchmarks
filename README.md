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
* __Run:__ Mon Aug 31 2026 04:57:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.12.1   | ✓      | 47888.0    | 20.38        | 8.59          |
| rayo                     | 1.4.6    | ✓      | 47573.6    | 20.52        | 8.48          |
| server-base              | 7.1.32   | ✗      | 46925.6    | 20.79        | 8.37          |
| frourio                  | 1.3.1    | ✓      | 46851.2    | 20.83        | 8.40          |
| bare                     | v20.20.2 | ✗      | 46771.2    | 20.87        | 8.34          |
| server-base-router       | 7.1.32   | ✓      | 46593.6    | 20.96        | 8.31          |
| polka                    | 0.5.2    | ✓      | 45702.4    | 21.38        | 8.15          |
| micro                    | 10.0.1   | ✗      | 45488.0    | 21.49        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45476.8    | 21.49        | 8.11          |
| restana                  | v5.2.0   | ✓      | 45064.0    | 21.69        | 8.04          |
| 0http                    | 4.4.0    | ✓      | 43561.6    | 22.46        | 7.77          |
| polkadot                 | 1.0.0    | ✗      | 43539.2    | 22.48        | 7.76          |
| adonisjs                 | 7.8.1    | ✓      | 42658.4    | 22.94        | 7.61          |
| connect-router           | 1.3.8    | ✓      | 41871.2    | 23.38        | 7.47          |
| micro-route              | 2.5.0    | ✓      | 40883.2    | 23.95        | 7.29          |
| h3                       | 1.15.11  | ✗      | 39734.4    | 24.67        | 7.09          |
| h3-router                | 1.15.11  | ✓      | 39322.4    | 24.93        | 7.01          |
| hono                     | 4.13.5   | ✓      | 38899.2    | 25.23        | 6.38          |
| koa                      | 2.16.4   | ✗      | 36176.6    | 27.14        | 6.45          |
| take-five                | 2.0.0    | ✓      | 35942.2    | 27.34        | 12.92         |
| restify                  | 11.1.0   | ✓      | 35165.0    | 27.92        | 6.34          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34535.8    | 28.45        | 6.16          |
| koa-router               | 13.1.1   | ✓      | 32114.0    | 30.63        | 5.73          |
| hapi                     | 21.4.10  | ✓      | 31032.8    | 31.71        | 5.53          |
| microrouter              | 3.1.3    | ✓      | 28940.8    | 34.04        | 5.16          |
| fastify-big-json         | 5.12.1   | ✓      | 11806.6    | 84.15        | 135.84        |
| express                  | 5.2.1    | ✓      | 10104.8    | 98.38        | 1.80          |
| frourio-express          | 1.3.1    | ✓      | 9684.9     | 102.63       | 1.73          |
| express-with-middlewares | 5.2.1    | ✓      | 8961.9     | 110.97       | 3.33          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
