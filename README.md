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
* __Run:__ Mon Sep 07 2026 04:05:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56222.4    | 17.29        | 10.03         |
| connect                  | 3.7.0    | ✗      | 55236.8    | 17.61        | 9.85          |
| fastify                  | 5.12.3   | ✓      | 55117.6    | 17.65        | 9.88          |
| polka                    | 0.5.2    | ✓      | 54908.0    | 17.72        | 9.79          |
| rayo                     | 1.4.6    | ✓      | 54422.4    | 17.87        | 9.71          |
| frourio                  | 1.3.1    | ✓      | 54299.2    | 17.92        | 9.73          |
| server-base-router       | 7.1.32   | ✓      | 54242.4    | 17.94        | 9.67          |
| server-base              | 7.1.32   | ✗      | 53743.2    | 18.11        | 9.58          |
| connect-router           | 1.3.8    | ✓      | 51504.0    | 18.92        | 9.18          |
| micro-route              | 2.5.0    | ✓      | 50161.6    | 19.44        | 8.95          |
| micro                    | 10.0.1   | ✗      | 49805.6    | 19.58        | 8.88          |
| polkadot                 | 1.0.0    | ✗      | 48420.8    | 20.15        | 8.64          |
| hono                     | 4.13.7   | ✓      | 48009.6    | 20.33        | 7.88          |
| 0http                    | 4.4.0    | ✓      | 47667.2    | 20.48        | 8.50          |
| adonisjs                 | 7.8.1    | ✓      | 47435.2    | 20.59        | 8.46          |
| restana                  | v5.2.0   | ✓      | 44784.8    | 21.83        | 7.99          |
| koa                      | 2.16.4   | ✗      | 44380.0    | 22.03        | 7.91          |
| take-five                | 2.0.0    | ✓      | 43708.8    | 22.38        | 15.71         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 41880.8    | 23.37        | 7.47          |
| restify                  | 11.1.0   | ✓      | 41556.0    | 23.56        | 7.49          |
| h3                       | 1.15.11  | ✗      | 41312.0    | 23.71        | 7.37          |
| koa-router               | 13.1.1   | ✓      | 40752.0    | 24.04        | 7.27          |
| h3-router                | 1.15.11  | ✓      | 39952.8    | 24.54        | 7.12          |
| microrouter              | 3.1.3    | ✓      | 37995.2    | 25.82        | 6.78          |
| hapi                     | 21.4.10  | ✓      | 36476.8    | 26.90        | 6.51          |
| fastify-big-json         | 5.12.3   | ✓      | 11776.4    | 84.35        | 135.49        |
| express                  | 5.2.1    | ✓      | 11467.8    | 86.62        | 2.05          |
| frourio-express          | 1.3.1    | ✓      | 11381.4    | 87.29        | 2.03          |
| express-with-middlewares | 5.2.1    | ✓      | 10552.6    | 94.17        | 3.92          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
