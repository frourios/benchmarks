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
* __Run:__ Mon Jul 20 2026 04:28:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.10.0   | ✓      | 45576.8    | 21.44        | 8.17          |
| bare                     | v20.20.2 | ✗      | 45209.6    | 21.63        | 8.06          |
| frourio                  | 1.3.1    | ✓      | 44936.0    | 21.75        | 8.06          |
| connect                  | 3.7.0    | ✗      | 44255.2    | 22.09        | 7.89          |
| micro                    | 10.0.1   | ✗      | 43936.0    | 22.25        | 7.84          |
| server-base-router       | 7.1.32   | ✓      | 43384.0    | 22.54        | 7.74          |
| polka                    | 0.5.2    | ✓      | 43256.8    | 22.61        | 7.71          |
| rayo                     | 1.4.6    | ✓      | 42745.6    | 22.89        | 7.62          |
| server-base              | 7.1.32   | ✗      | 42544.0    | 23.00        | 7.59          |
| polkadot                 | 1.0.0    | ✗      | 41341.6    | 23.69        | 7.37          |
| adonisjs                 | 7.8.1    | ✓      | 41158.4    | 23.80        | 7.34          |
| 0http                    | 4.4.0    | ✓      | 41071.2    | 23.85        | 7.32          |
| connect-router           | 1.3.8    | ✓      | 40227.2    | 24.35        | 7.17          |
| micro-route              | 2.5.0    | ✓      | 39594.4    | 24.77        | 7.06          |
| restana                  | v5.2.0   | ✓      | 39394.4    | 24.88        | 7.02          |
| h3                       | 1.15.11  | ✗      | 37720.0    | 26.02        | 6.73          |
| h3-router                | 1.15.11  | ✓      | 37105.6    | 26.45        | 6.62          |
| koa                      | 2.16.4   | ✗      | 34616.0    | 28.39        | 6.17          |
| hono                     | 4.12.31  | ✓      | 34217.0    | 28.72        | 5.61          |
| take-five                | 2.0.0    | ✓      | 33738.2    | 29.13        | 12.13         |
| restify                  | 11.1.0   | ✓      | 33682.4    | 29.18        | 6.07          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32686.0    | 30.10        | 5.83          |
| koa-router               | 13.1.1   | ✓      | 31190.0    | 31.56        | 5.56          |
| hapi                     | 21.4.9   | ✓      | 29789.2    | 33.06        | 5.31          |
| microrouter              | 3.1.3    | ✓      | 28496.8    | 34.58        | 5.08          |
| fastify-big-json         | 5.10.0   | ✓      | 11197.8    | 88.74        | 128.84        |
| express                  | 5.2.1    | ✓      | 9588.5     | 103.66       | 1.71          |
| frourio-express          | 1.3.1    | ✓      | 9331.3     | 106.54       | 1.66          |
| express-with-middlewares | 5.2.1    | ✓      | 8777.8     | 113.29       | 3.26          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
