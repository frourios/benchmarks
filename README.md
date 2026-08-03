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
* __Run:__ Mon Aug 03 2026 03:34:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 49834.4    | 19.58        | 8.93          |
| bare                     | v20.20.2 | ✗      | 49068.0    | 19.89        | 8.75          |
| fastify                  | 5.11.0   | ✓      | 48910.4    | 19.95        | 8.77          |
| connect                  | 3.7.0    | ✗      | 47779.2    | 20.42        | 8.52          |
| micro                    | 10.0.1   | ✗      | 47606.4    | 20.50        | 8.49          |
| server-base              | 7.1.32   | ✗      | 47104.8    | 20.73        | 8.40          |
| server-base-router       | 7.1.32   | ✓      | 46977.6    | 20.78        | 8.38          |
| polka                    | 0.5.2    | ✓      | 46744.8    | 20.88        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46556.8    | 20.97        | 8.30          |
| polkadot                 | 1.0.0    | ✗      | 45085.6    | 21.69        | 8.04          |
| adonisjs                 | 7.8.1    | ✓      | 44527.2    | 21.95        | 7.94          |
| 0http                    | 4.4.0    | ✓      | 44504.0    | 21.97        | 7.94          |
| restana                  | v5.2.0   | ✓      | 43884.8    | 22.28        | 7.83          |
| connect-router           | 1.3.8    | ✓      | 43308.8    | 22.58        | 7.72          |
| micro-route              | 2.5.0    | ✓      | 43001.6    | 22.74        | 7.67          |
| h3                       | 1.15.11  | ✗      | 42936.8    | 22.79        | 7.66          |
| h3-router                | 1.15.11  | ✓      | 40335.2    | 24.30        | 7.19          |
| koa                      | 2.16.4   | ✗      | 36973.4    | 26.55        | 6.59          |
| hono                     | 4.12.34  | ✓      | 36024.2    | 27.25        | 5.91          |
| restify                  | 11.1.0   | ✓      | 36004.6    | 27.27        | 6.49          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35697.4    | 27.51        | 6.37          |
| take-five                | 2.0.0    | ✓      | 35410.6    | 27.75        | 12.73         |
| koa-router               | 13.1.1   | ✓      | 33490.6    | 29.36        | 5.97          |
| hapi                     | 21.4.10  | ✓      | 32646.2    | 30.13        | 5.82          |
| microrouter              | 3.1.3    | ✓      | 31057.2    | 31.68        | 5.54          |
| fastify-big-json         | 5.11.0   | ✓      | 11797.4    | 84.21        | 135.73        |
| express                  | 5.2.1    | ✓      | 9947.8     | 99.93        | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9888.4     | 100.52       | 1.76          |
| express-with-middlewares | 5.2.1    | ✓      | 9044.3     | 109.90       | 3.36          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
