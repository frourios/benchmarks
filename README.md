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
* __Run:__ Mon Oct 05 2026 05:15:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.12.5   | ✓      | 112790.4   | 8.37         | 20.22         |
| frourio                  | 1.3.1    | ✓      | 111673.6   | 8.46         | 20.02         |
| polka                    | 0.5.2    | ✓      | 109545.6   | 8.62         | 19.54         |
| bare                     | v20.20.2 | ✗      | 106894.4   | 8.85         | 19.06         |
| rayo                     | 1.4.6    | ✓      | 106889.6   | 8.83         | 19.06         |
| server-base              | 7.1.32   | ✗      | 106811.2   | 8.84         | 19.05         |
| server-base-router       | 7.1.32   | ✓      | 106003.2   | 8.93         | 18.90         |
| connect                  | 3.7.0    | ✗      | 105665.6   | 8.97         | 18.84         |
| micro                    | 10.0.1   | ✗      | 104785.6   | 9.05         | 18.69         |
| polkadot                 | 1.0.0    | ✗      | 98761.6    | 9.62         | 17.61         |
| micro-route              | 2.5.0    | ✓      | 96673.6    | 9.84         | 17.24         |
| connect-router           | 1.3.8    | ✓      | 96547.2    | 9.86         | 17.22         |
| 0http                    | 4.4.0    | ✓      | 96532.8    | 9.86         | 17.21         |
| restana                  | v5.2.0   | ✓      | 95492.8    | 9.98         | 17.03         |
| hono                     | 4.13.13  | ✓      | 95099.2    | 10.00        | 15.60         |
| adonisjs                 | 7.8.1    | ✓      | 90369.6    | 10.56        | 16.12         |
| h3-router                | 1.15.11  | ✓      | 88444.8    | 10.83        | 15.77         |
| koa                      | 2.16.4   | ✗      | 88396.8    | 10.81        | 15.76         |
| h3                       | 1.15.11  | ✗      | 88270.4    | 10.83        | 15.74         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 82956.8    | 11.54        | 14.79         |
| take-five                | 2.0.0    | ✓      | 82777.6    | 11.58        | 29.76         |
| koa-router               | 13.1.1   | ✓      | 82558.4    | 11.59        | 14.72         |
| restify                  | 11.1.0   | ✓      | 82508.8    | 11.64        | 14.87         |
| microrouter              | 3.1.3    | ✓      | 74862.4    | 12.86        | 13.35         |
| hapi                     | 21.4.10  | ✓      | 71604.4    | 13.48        | 12.77         |
| frourio-express          | 1.3.1    | ✓      | 20165.6    | 49.07        | 3.60          |
| express                  | 5.2.1    | ✓      | 19531.6    | 50.69        | 3.48          |
| fastify-big-json         | 5.12.5   | ✓      | 19357.6    | 51.14        | 222.71        |
| express-with-middlewares | 5.2.1    | ✓      | 17433.8    | 56.83        | 6.48          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
