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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 23 2025 01:08:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 48707.2    | 20.05        | 8.69          |
| rayo                     | 1.4.6    | ✓      | 48296.8    | 20.22        | 8.61          |
| fastify                  | 5.4.0    | ✓      | 47853.6    | 20.39        | 8.58          |
| polka                    | 0.5.2    | ✓      | 47769.6    | 20.44        | 8.52          |
| connect                  | 3.7.0    | ✗      | 47727.2    | 20.47        | 8.51          |
| frourio                  | 1.3.1    | ✓      | 47705.6    | 20.49        | 8.55          |
| polkadot                 | 1.0.0    | ✗      | 46822.4    | 20.86        | 8.35          |
| 0http                    | 4.2.1    | ✓      | 46510.4    | 21.01        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46504.0    | 20.99        | 8.29          |
| micro                    | 10.0.1   | ✗      | 46288.8    | 21.11        | 8.26          |
| server-base              | 7.1.32   | ✗      | 46256.8    | 21.10        | 8.25          |
| connect-router           | 1.3.8    | ✓      | 44723.2    | 21.86        | 7.98          |
| h3                       | 1.15.3   | ✗      | 44608.8    | 21.92        | 7.96          |
| micro-route              | 2.5.0    | ✓      | 43832.0    | 22.31        | 7.82          |
| adonisjs                 | 7.7.0    | ✓      | 43527.2    | 22.47        | 7.76          |
| h3-router                | 1.15.3   | ✓      | 43476.0    | 22.50        | 7.75          |
| restana                  | v5.0.0   | ✓      | 42201.6    | 23.20        | 7.53          |
| koa                      | 2.16.1   | ✗      | 38720.8    | 25.33        | 6.91          |
| hono                     | 4.8.2    | ✓      | 38216.0    | 25.63        | 6.27          |
| restify                  | 11.1.0   | ✓      | 36067.8    | 27.22        | 6.50          |
| take-five                | 2.0.0    | ✓      | 36057.4    | 27.19        | 12.96         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35527.8    | 27.63        | 6.34          |
| koa-router               | 13.1.0   | ✓      | 34107.8    | 28.82        | 6.08          |
| hapi                     | 21.4.0   | ✓      | 33067.4    | 29.73        | 5.90          |
| microrouter              | 3.1.3    | ✓      | 31879.2    | 30.87        | 5.69          |
| fastify-big-json         | 5.4.0    | ✓      | 12211.2    | 81.34        | 140.49        |
| express                  | 5.1.0    | ✓      | 10375.8    | 95.79        | 1.85          |
| frourio-express          | 1.3.1    | ✓      | 9956.6     | 99.84        | 1.78          |
| express-with-middlewares | 5.1.0    | ✓      | 9076.8     | 109.55       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
