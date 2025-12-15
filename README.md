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
* __Run:__ Mon Dec 15 2025 01:09:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48076.8    | 20.33        | 8.57          |
| connect                  | 3.7.0    | ✗      | 47871.2    | 20.41        | 8.54          |
| frourio                  | 1.3.1    | ✓      | 47456.0    | 20.57        | 8.51          |
| fastify                  | 5.6.2    | ✓      | 47001.6    | 20.77        | 8.43          |
| 0http                    | 4.3.0    | ✓      | 46427.2    | 21.04        | 8.28          |
| polka                    | 0.5.2    | ✓      | 45973.6    | 21.24        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45887.2    | 21.26        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45864.8    | 21.31        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 45657.6    | 21.39        | 8.14          |
| micro                    | 10.0.1   | ✗      | 45437.6    | 21.51        | 8.10          |
| server-base              | 7.1.32   | ✗      | 45362.4    | 21.56        | 8.09          |
| connect-router           | 1.3.8    | ✓      | 43980.0    | 22.23        | 7.84          |
| restana                  | v5.1.0   | ✓      | 43923.2    | 22.26        | 7.83          |
| h3-router                | 1.15.4   | ✓      | 42868.0    | 22.83        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 42520.0    | 23.00        | 7.58          |
| h3                       | 1.15.4   | ✗      | 42132.8    | 23.23        | 7.51          |
| adonisjs                 | 7.7.0    | ✓      | 41578.4    | 23.55        | 7.41          |
| hono                     | 4.11.1   | ✓      | 37780.0    | 25.95        | 6.20          |
| koa                      | 2.16.3   | ✗      | 37596.8    | 26.11        | 6.70          |
| take-five                | 2.0.0    | ✓      | 35363.4    | 27.75        | 12.72         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34985.0    | 28.08        | 6.24          |
| restify                  | 11.1.0   | ✓      | 34815.4    | 28.22        | 6.28          |
| koa-router               | 13.1.1   | ✓      | 33674.2    | 29.20        | 6.01          |
| hapi                     | 21.4.4   | ✓      | 32078.8    | 30.67        | 5.72          |
| microrouter              | 3.1.3    | ✓      | 29993.6    | 32.84        | 5.35          |
| fastify-big-json         | 5.6.2    | ✓      | 11597.8    | 85.67        | 133.44        |
| express                  | 5.2.1    | ✓      | 10049.2    | 98.90        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9659.1     | 102.89       | 1.72          |
| express-with-middlewares | 5.2.1    | ✓      | 9159.4     | 108.56       | 3.41          |
| trpc-router              | 10.45.3  | ✓      | N/A        | N/A          | N/A           |
