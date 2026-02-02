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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 02 2026 01:14:50 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 46830.4    | 20.84        | 8.40          |
| fastify                  | 5.7.2    | ✓      | 46007.2    | 21.24        | 8.25          |
| server-base              | 7.1.32   | ✗      | 45674.4    | 21.39        | 8.14          |
| polka                    | 0.5.2    | ✓      | 45661.6    | 21.39        | 8.14          |
| server-base-router       | 7.1.32   | ✓      | 45523.2    | 21.48        | 8.12          |
| bare                     | v20.20.0 | ✗      | 45204.0    | 21.62        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 44866.4    | 21.80        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 44796.8    | 21.83        | 7.99          |
| 0http                    | 4.3.0    | ✓      | 44336.0    | 22.06        | 7.91          |
| connect                  | 3.7.0    | ✗      | 43634.4    | 22.42        | 7.78          |
| micro                    | 10.0.1   | ✗      | 43469.6    | 22.51        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 43257.6    | 22.61        | 7.71          |
| h3                       | 1.15.5   | ✗      | 42514.4    | 23.02        | 7.58          |
| h3-router                | 1.15.5   | ✓      | 42356.0    | 23.11        | 7.55          |
| adonisjs                 | 7.8.0    | ✓      | 41895.2    | 23.37        | 7.47          |
| micro-route              | 2.5.0    | ✓      | 41266.4    | 23.73        | 7.36          |
| restana                  | v5.1.0   | ✓      | 40177.0    | 24.40        | 7.17          |
| koa                      | 2.16.3   | ✗      | 37126.6    | 26.43        | 6.62          |
| hono                     | 4.11.7   | ✓      | 36299.2    | 27.06        | 5.95          |
| take-five                | 2.0.0    | ✓      | 34773.0    | 28.25        | 12.50         |
| restify                  | 11.1.0   | ✓      | 34035.0    | 28.87        | 6.13          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33985.6    | 28.92        | 6.06          |
| koa-router               | 13.1.1   | ✓      | 33545.2    | 29.31        | 5.98          |
| hapi                     | 21.4.4   | ✓      | 31321.4    | 31.42        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 28733.2    | 34.29        | 5.12          |
| fastify-big-json         | 5.7.2    | ✓      | 11227.8    | 88.50        | 129.18        |
| express                  | 5.2.1    | ✓      | 10152.8    | 97.89        | 1.81          |
| frourio-express          | 1.3.1    | ✓      | 9548.5     | 104.08       | 1.70          |
| express-with-middlewares | 5.2.1    | ✓      | 8735.5     | 113.87       | 3.25          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
