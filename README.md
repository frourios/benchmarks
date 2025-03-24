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
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 24 2025 01:04:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 48108.0    | 20.30        | 8.58          |
| fastify                  | 5.2.1    | ✓      | 47440.8    | 20.58        | 8.51          |
| polkadot                 | 1.0.0    | ✗      | 47372.0    | 20.61        | 8.45          |
| 0http                    | 4.2.0    | ✓      | 46951.2    | 20.80        | 8.37          |
| frourio                  | 1.3.1    | ✓      | 46923.2    | 20.80        | 8.41          |
| polka                    | 0.5.2    | ✓      | 46885.6    | 20.82        | 8.36          |
| connect                  | 3.7.0    | ✗      | 46520.0    | 20.99        | 8.30          |
| rayo                     | 1.4.6    | ✓      | 46230.4    | 21.12        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 45890.4    | 21.31        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45457.6    | 21.50        | 8.11          |
| micro                    | 10.0.1   | ✗      | 44860.0    | 21.80        | 8.00          |
| h3                       | 1.15.1   | ✗      | 44426.4    | 22.01        | 7.92          |
| connect-router           | 1.3.8    | ✓      | 43852.0    | 22.30        | 7.82          |
| micro-route              | 2.5.0    | ✓      | 42898.4    | 22.80        | 7.65          |
| h3-router                | 1.15.1   | ✓      | 42131.2    | 23.24        | 7.51          |
| adonisjs                 | 7.5.0    | ✓      | 42102.4    | 23.26        | 7.51          |
| hono                     | 4.7.5    | ✓      | 40963.0    | 23.90        | 6.72          |
| restana                  | v5.0.0   | ✓      | 40023.8    | 24.49        | 7.14          |
| koa                      | 2.16.0   | ✗      | 37572.6    | 26.11        | 6.70          |
| restify                  | 11.1.0   | ✓      | 35312.0    | 27.82        | 6.36          |
| take-five                | 2.0.0    | ✓      | 35081.4    | 27.97        | 12.61         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34663.8    | 28.35        | 6.18          |
| koa-router               | 13.1.0   | ✓      | 32966.4    | 29.82        | 5.88          |
| hapi                     | 21.4.0   | ✓      | 32310.6    | 30.44        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 30274.0    | 32.52        | 5.40          |
| fastify-big-json         | 5.2.1    | ✓      | 11823.4    | 84.00        | 136.03        |
| express                  | 5.0.1    | ✓      | 10240.8    | 97.07        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 10212.6    | 97.31        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9231.5     | 107.72       | 3.43          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
