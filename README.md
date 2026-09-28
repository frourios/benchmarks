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
* __Run:__ Mon Sep 28 2026 04:53:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.12.5   | ✓      | 46063.2    | 21.21        | 8.26          |
| bare                     | v20.20.2 | ✗      | 45896.8    | 21.29        | 8.19          |
| frourio                  | 1.3.1    | ✓      | 45273.6    | 21.59        | 8.12          |
| polka                    | 0.5.2    | ✓      | 44848.8    | 21.81        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 44020.8    | 22.22        | 7.85          |
| server-base              | 7.1.32   | ✗      | 43876.0    | 22.29        | 7.82          |
| connect                  | 3.7.0    | ✗      | 43684.0    | 22.39        | 7.79          |
| micro                    | 10.0.1   | ✗      | 43596.8    | 22.44        | 7.78          |
| rayo                     | 1.4.6    | ✓      | 43264.8    | 22.61        | 7.72          |
| polkadot                 | 1.0.0    | ✗      | 42447.2    | 23.07        | 7.57          |
| 0http                    | 4.4.0    | ✓      | 41345.6    | 23.69        | 7.37          |
| connect-router           | 1.3.8    | ✓      | 40967.2    | 23.91        | 7.31          |
| micro-route              | 2.5.0    | ✓      | 39980.8    | 24.51        | 7.13          |
| adonisjs                 | 7.8.1    | ✓      | 39928.8    | 24.54        | 7.12          |
| restana                  | v5.2.0   | ✓      | 39582.4    | 24.77        | 7.06          |
| h3                       | 1.15.11  | ✗      | 38995.2    | 25.15        | 6.95          |
| h3-router                | 1.15.11  | ✓      | 38105.6    | 25.74        | 6.80          |
| hono                     | 4.13.9   | ✓      | 37050.4    | 26.49        | 6.08          |
| koa                      | 2.16.4   | ✗      | 35424.6    | 27.73        | 6.32          |
| take-five                | 2.0.0    | ✓      | 33071.8    | 29.74        | 11.89         |
| restify                  | 11.1.0   | ✓      | 32789.0    | 29.99        | 5.91          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32479.4    | 30.29        | 5.79          |
| koa-router               | 13.1.1   | ✓      | 31451.6    | 31.29        | 5.61          |
| hapi                     | 21.4.10  | ✓      | 30084.0    | 32.73        | 5.36          |
| microrouter              | 3.1.3    | ✓      | 28294.4    | 34.83        | 5.05          |
| fastify-big-json         | 5.12.5   | ✓      | 11346.8    | 87.58        | 130.54        |
| frourio-express          | 1.3.1    | ✓      | 9308.3     | 106.79       | 1.66          |
| express                  | 5.2.1    | ✓      | 9295.3     | 106.99       | 1.66          |
| express-with-middlewares | 5.2.1    | ✓      | 8563.4     | 116.14       | 3.18          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
