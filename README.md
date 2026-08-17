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
* __Run:__ Mon Aug 17 2026 01:59:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.12.0   | ✓      | 56465.6    | 17.20        | 10.12         |
| frourio                  | 1.3.1    | ✓      | 56153.6    | 17.30        | 10.07         |
| bare                     | v20.20.2 | ✗      | 56149.6    | 17.30        | 10.01         |
| connect                  | 3.7.0    | ✗      | 55648.0    | 17.46        | 9.92          |
| polka                    | 0.5.2    | ✓      | 55125.6    | 17.63        | 9.83          |
| rayo                     | 1.4.6    | ✓      | 55012.0    | 17.67        | 9.81          |
| server-base-router       | 7.1.32   | ✓      | 54495.2    | 17.86        | 9.72          |
| server-base              | 7.1.32   | ✗      | 54409.6    | 17.89        | 9.70          |
| connect-router           | 1.3.8    | ✓      | 51576.0    | 18.88        | 9.20          |
| micro-route              | 2.5.0    | ✓      | 51547.2    | 18.90        | 9.19          |
| 0http                    | 4.4.0    | ✓      | 50518.4    | 19.30        | 9.01          |
| micro                    | 10.0.1   | ✗      | 50396.0    | 19.35        | 8.99          |
| polkadot                 | 1.0.0    | ✗      | 49940.8    | 19.52        | 8.91          |
| hono                     | 4.13.2   | ✓      | 48184.0    | 20.26        | 7.90          |
| h3                       | 1.15.11  | ✗      | 47099.2    | 20.73        | 8.40          |
| adonisjs                 | 7.8.1    | ✓      | 46820.8    | 20.87        | 8.35          |
| restana                  | v5.2.0   | ✓      | 46800.8    | 20.87        | 8.35          |
| h3-router                | 1.15.11  | ✓      | 45902.4    | 21.29        | 8.19          |
| koa                      | 2.16.4   | ✗      | 44448.8    | 22.00        | 7.93          |
| take-five                | 2.0.0    | ✓      | 44228.0    | 22.11        | 15.90         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42016.8    | 23.30        | 7.49          |
| restify                  | 11.1.0   | ✓      | 41045.6    | 23.86        | 7.40          |
| koa-router               | 13.1.1   | ✓      | 40416.8    | 24.24        | 7.21          |
| hapi                     | 21.4.10  | ✓      | 37445.8    | 26.20        | 6.68          |
| microrouter              | 3.1.3    | ✓      | 37109.8    | 26.44        | 6.62          |
| fastify-big-json         | 5.12.0   | ✓      | 11954.8    | 83.09        | 137.54        |
| frourio-express          | 1.3.1    | ✓      | 11753.6    | 84.51        | 2.10          |
| express                  | 5.2.1    | ✓      | 11257.4    | 88.23        | 2.01          |
| express-with-middlewares | 5.2.1    | ✓      | 10658.0    | 93.24        | 3.96          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
