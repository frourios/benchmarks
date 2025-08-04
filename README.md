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
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 04 2025 01:10:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 47869.4    | 20.40        | 8.54          |
| frourio                  | 1.3.1    | ✓      | 46872.8    | 20.83        | 8.40          |
| fastify                  | 5.4.0    | ✓      | 46715.2    | 20.90        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46362.4    | 21.07        | 8.27          |
| connect                  | 3.7.0    | ✗      | 45760.0    | 21.34        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45514.4    | 21.48        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 44721.6    | 21.86        | 7.98          |
| server-base              | 7.1.32   | ✗      | 44592.0    | 21.93        | 7.95          |
| micro                    | 10.0.1   | ✗      | 44572.0    | 21.94        | 7.95          |
| 0http                    | 4.3.0    | ✓      | 44372.8    | 22.04        | 7.91          |
| polkadot                 | 1.0.0    | ✗      | 43424.8    | 22.52        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 43056.8    | 22.72        | 7.68          |
| h3                       | 1.15.4   | ✗      | 42804.0    | 22.86        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 41950.4    | 23.34        | 7.48          |
| adonisjs                 | 7.7.0    | ✓      | 41395.2    | 23.65        | 7.38          |
| restana                  | v5.1.0   | ✓      | 40916.0    | 23.94        | 7.30          |
| h3-router                | 1.15.4   | ✓      | 40639.2    | 24.11        | 7.25          |
| koa                      | 2.16.2   | ✗      | 36777.8    | 26.69        | 6.56          |
| hono                     | 4.8.12   | ✓      | 36615.0    | 26.81        | 6.01          |
| restify                  | 11.1.0   | ✓      | 35221.0    | 27.89        | 6.35          |
| take-five                | 2.0.0    | ✓      | 34971.6    | 28.09        | 12.57         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34780.8    | 28.25        | 6.20          |
| koa-router               | 13.1.1   | ✓      | 33645.2    | 29.21        | 6.00          |
| hapi                     | 21.4.0   | ✓      | 31322.0    | 31.42        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 30488.4    | 32.30        | 5.44          |
| fastify-big-json         | 5.4.0    | ✓      | 11817.0    | 84.06        | 135.97        |
| express                  | 5.1.0    | ✓      | 10035.2    | 99.05        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9595.0     | 103.61       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 9040.0     | 109.99       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
