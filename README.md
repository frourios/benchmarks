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
* __Node:__ `v20.19.5`
* __Run:__ Mon Oct 13 2025 01:06:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 47264.0    | 20.66        | 8.43          |
| fastify                  | 5.6.1    | ✓      | 47143.2    | 20.71        | 8.45          |
| frourio                  | 1.3.1    | ✓      | 46369.6    | 21.06        | 8.31          |
| connect                  | 3.7.0    | ✗      | 45746.4    | 21.36        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 44940.8    | 21.74        | 8.01          |
| 0http                    | 4.3.0    | ✓      | 44706.4    | 21.87        | 7.97          |
| polka                    | 0.5.2    | ✓      | 44655.2    | 21.90        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 44228.8    | 22.11        | 7.89          |
| server-base              | 7.1.32   | ✗      | 43840.0    | 22.30        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 43637.6    | 22.41        | 7.78          |
| micro                    | 10.0.1   | ✗      | 43348.0    | 22.57        | 7.73          |
| polkadot                 | 1.0.0    | ✗      | 42881.6    | 22.82        | 7.65          |
| h3-router                | 1.15.4   | ✓      | 41720.8    | 23.48        | 7.44          |
| adonisjs                 | 7.7.0    | ✓      | 41521.6    | 23.59        | 7.40          |
| h3                       | 1.15.4   | ✗      | 41456.8    | 23.62        | 7.39          |
| micro-route              | 2.5.0    | ✓      | 40176.0    | 24.39        | 7.16          |
| restana                  | v5.1.0   | ✓      | 39520.0    | 24.81        | 7.05          |
| koa                      | 2.16.2   | ✗      | 36874.6    | 26.61        | 6.58          |
| hono                     | 4.9.11   | ✓      | 36481.4    | 26.92        | 5.98          |
| take-five                | 2.0.0    | ✓      | 34796.2    | 28.23        | 12.51         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34128.8    | 28.79        | 6.09          |
| restify                  | 11.1.0   | ✓      | 33835.6    | 29.04        | 6.10          |
| koa-router               | 13.1.1   | ✓      | 33103.6    | 29.71        | 5.90          |
| hapi                     | 21.4.3   | ✓      | 31056.4    | 31.69        | 5.54          |
| microrouter              | 3.1.3    | ✓      | 29359.6    | 33.56        | 5.24          |
| fastify-big-json         | 5.6.1    | ✓      | 11586.0    | 85.75        | 133.31        |
| express                  | 5.1.0    | ✓      | 10028.2    | 99.13        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9548.0     | 104.12       | 1.70          |
| express-with-middlewares | 5.1.0    | ✓      | 9195.0     | 108.14       | 3.42          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
