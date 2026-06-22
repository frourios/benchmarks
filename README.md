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
* __Run:__ Mon Jun 22 2026 01:46:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48510.4    | 20.15        | 8.65          |
| frourio                  | 1.3.1    | ✓      | 47438.4    | 20.56        | 8.51          |
| fastify                  | 5.8.5    | ✓      | 47065.6    | 20.73        | 8.44          |
| connect                  | 3.7.0    | ✗      | 46835.2    | 20.85        | 8.35          |
| micro                    | 10.0.1   | ✗      | 46178.4    | 21.16        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 45724.0    | 21.36        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 45465.6    | 21.52        | 8.11          |
| server-base              | 7.1.32   | ✗      | 45147.2    | 21.66        | 8.05          |
| 0http                    | 4.4.0    | ✓      | 44971.2    | 21.75        | 8.02          |
| polka                    | 0.5.2    | ✓      | 44560.8    | 21.94        | 7.95          |
| h3                       | 1.15.11  | ✗      | 43870.4    | 22.30        | 7.82          |
| restana                  | v5.2.0   | ✓      | 43622.4    | 22.42        | 7.78          |
| h3-router                | 1.15.11  | ✓      | 43397.6    | 22.54        | 7.74          |
| polkadot                 | 1.0.0    | ✗      | 43300.8    | 22.60        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42864.0    | 22.83        | 7.64          |
| adonisjs                 | 7.8.1    | ✓      | 42818.4    | 22.84        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 41803.2    | 23.42        | 7.46          |
| hono                     | 4.12.26  | ✓      | 36724.0    | 26.72        | 6.02          |
| koa                      | 2.16.4   | ✗      | 36687.4    | 26.76        | 6.54          |
| take-five                | 2.0.0    | ✓      | 34897.8    | 28.16        | 12.55         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34855.4    | 28.20        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34745.0    | 28.28        | 6.26          |
| koa-router               | 13.1.1   | ✓      | 33494.0    | 29.35        | 5.97          |
| hapi                     | 21.4.9   | ✓      | 33299.8    | 29.54        | 5.94          |
| microrouter              | 3.1.3    | ✓      | 30765.6    | 31.98        | 5.49          |
| fastify-big-json         | 5.8.5    | ✓      | 12162.0    | 81.67        | 139.93        |
| express                  | 5.2.1    | ✓      | 10127.6    | 98.11        | 1.81          |
| frourio-express          | 1.3.1    | ✓      | 9609.9     | 103.47       | 1.71          |
| express-with-middlewares | 5.2.1    | ✓      | 8886.2     | 111.89       | 3.30          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
