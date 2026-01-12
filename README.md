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
* __Node:__ `v20.19.6`
* __Run:__ Mon Jan 12 2026 01:10:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48077.6    | 20.31        | 8.57          |
| polka                    | 0.5.2    | ✓      | 47100.0    | 20.73        | 8.40          |
| fastify                  | 5.6.2    | ✓      | 47012.0    | 20.77        | 8.43          |
| rayo                     | 1.4.6    | ✓      | 46425.6    | 21.03        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 46420.8    | 21.05        | 8.28          |
| server-base              | 7.1.32   | ✗      | 46333.6    | 21.07        | 8.26          |
| frourio                  | 1.3.1    | ✓      | 46330.4    | 21.09        | 8.31          |
| 0http                    | 4.3.0    | ✓      | 46286.4    | 21.12        | 8.25          |
| connect                  | 3.7.0    | ✗      | 46237.6    | 21.13        | 8.25          |
| micro                    | 10.0.1   | ✗      | 45676.0    | 21.39        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45259.2    | 21.60        | 8.07          |
| h3                       | 1.15.4   | ✗      | 43944.0    | 22.26        | 7.84          |
| restana                  | v5.1.0   | ✓      | 43447.2    | 22.52        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42961.6    | 22.77        | 7.66          |
| micro-route              | 2.5.0    | ✓      | 42784.0    | 22.89        | 7.63          |
| adonisjs                 | 7.8.0    | ✓      | 42220.0    | 23.18        | 7.53          |
| h3-router                | 1.15.4   | ✓      | 41781.6    | 23.43        | 7.45          |
| koa                      | 2.16.3   | ✗      | 37639.0    | 26.06        | 6.71          |
| hono                     | 4.11.3   | ✓      | 37366.2    | 26.26        | 6.13          |
| restify                  | 11.1.0   | ✓      | 35623.0    | 27.56        | 6.42          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35612.2    | 27.57        | 6.35          |
| take-five                | 2.0.0    | ✓      | 35551.0    | 27.65        | 12.78         |
| koa-router               | 13.1.1   | ✓      | 33747.0    | 29.12        | 6.02          |
| hapi                     | 21.4.4   | ✓      | 31339.4    | 31.40        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 30116.4    | 32.70        | 5.37          |
| fastify-big-json         | 5.6.2    | ✓      | 11618.2    | 85.52        | 133.68        |
| express                  | 5.2.1    | ✓      | 9959.6     | 99.82        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9841.8     | 101.02       | 1.76          |
| express-with-middlewares | 5.2.1    | ✓      | 9049.3     | 109.88       | 3.37          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
