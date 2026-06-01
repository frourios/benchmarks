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
* __Run:__ Mon Jun 01 2026 01:43:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47565.6    | 20.52        | 8.48          |
| connect                  | 3.7.0    | ✗      | 46112.8    | 21.19        | 8.22          |
| fastify                  | 5.8.5    | ✓      | 45970.4    | 21.25        | 8.24          |
| polka                    | 0.5.2    | ✓      | 45860.8    | 21.31        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45547.2    | 21.47        | 8.12          |
| micro                    | 10.0.1   | ✗      | 45500.8    | 21.47        | 8.11          |
| frourio                  | 1.3.1    | ✓      | 45108.0    | 21.67        | 8.09          |
| server-base              | 7.1.32   | ✗      | 44753.6    | 21.85        | 7.98          |
| 0http                    | 4.4.0    | ✓      | 44344.0    | 22.05        | 7.91          |
| server-base-router       | 7.1.32   | ✓      | 42995.2    | 22.76        | 7.67          |
| adonisjs                 | 7.8.1    | ✓      | 42650.4    | 22.94        | 7.61          |
| h3                       | 1.15.11  | ✗      | 42203.2    | 23.20        | 7.53          |
| h3-router                | 1.15.11  | ✓      | 42140.8    | 23.23        | 7.52          |
| connect-router           | 1.3.8    | ✓      | 42106.4    | 23.25        | 7.51          |
| restana                  | v5.2.0   | ✓      | 41658.4    | 23.50        | 7.43          |
| polkadot                 | 1.0.0    | ✗      | 41531.2    | 23.57        | 7.41          |
| micro-route              | 2.5.0    | ✓      | 41440.8    | 23.63        | 7.39          |
| hono                     | 4.12.23  | ✓      | 36375.0    | 26.97        | 5.97          |
| koa                      | 2.16.4   | ✗      | 36302.6    | 27.06        | 6.47          |
| restify                  | 11.1.0   | ✓      | 34255.0    | 28.69        | 6.17          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33728.0    | 29.14        | 6.02          |
| koa-router               | 13.1.1   | ✓      | 32808.8    | 29.98        | 5.85          |
| hapi                     | 21.4.9   | ✓      | 32544.6    | 30.21        | 5.80          |
| take-five                | 2.0.0    | ✓      | 32447.6    | 30.31        | 11.67         |
| microrouter              | 3.1.3    | ✓      | 29639.6    | 33.23        | 5.29          |
| fastify-big-json         | 5.8.5    | ✓      | 11866.8    | 83.71        | 136.53        |
| express                  | 5.2.1    | ✓      | 9661.5     | 102.89       | 1.72          |
| frourio-express          | 1.3.1    | ✓      | 9640.0     | 103.10       | 1.72          |
| express-with-middlewares | 5.2.1    | ✓      | 9009.0     | 110.38       | 3.35          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
