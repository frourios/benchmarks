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
* __Run:__ Mon Apr 21 2025 01:06:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47950.4    | 20.35        | 8.55          |
| fastify                  | 5.3.2    | ✓      | 47219.2    | 20.67        | 8.47          |
| connect                  | 3.7.0    | ✗      | 46950.4    | 20.79        | 8.37          |
| frourio                  | 1.3.1    | ✓      | 46885.6    | 20.82        | 8.41          |
| rayo                     | 1.4.6    | ✓      | 46758.4    | 20.88        | 8.34          |
| polka                    | 0.5.2    | ✓      | 46636.8    | 20.93        | 8.32          |
| polkadot                 | 1.0.0    | ✗      | 45697.6    | 21.39        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45671.2    | 21.39        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45634.4    | 21.42        | 8.14          |
| micro                    | 10.0.1   | ✗      | 45228.8    | 21.61        | 8.06          |
| 0http                    | 4.2.0    | ✓      | 44741.6    | 21.86        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 43756.0    | 22.34        | 7.80          |
| h3-router                | 1.15.1   | ✓      | 42281.6    | 23.16        | 7.54          |
| micro-route              | 2.5.0    | ✓      | 42145.6    | 23.26        | 7.52          |
| adonisjs                 | 7.6.0    | ✓      | 41729.6    | 23.47        | 7.44          |
| h3                       | 1.15.1   | ✗      | 41227.2    | 23.75        | 7.35          |
| restana                  | v5.0.0   | ✓      | 40952.0    | 23.92        | 7.30          |
| hono                     | 4.7.7    | ✓      | 40308.0    | 24.30        | 6.61          |
| koa                      | 2.16.1   | ✗      | 37275.2    | 26.34        | 6.65          |
| take-five                | 2.0.0    | ✓      | 35332.2    | 27.79        | 12.70         |
| restify                  | 11.1.0   | ✓      | 34997.4    | 28.06        | 6.31          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34607.0    | 28.38        | 6.17          |
| koa-router               | 13.1.0   | ✓      | 32889.6    | 29.89        | 5.87          |
| hapi                     | 21.4.0   | ✓      | 31473.0    | 31.27        | 5.61          |
| microrouter              | 3.1.3    | ✓      | 29982.8    | 32.84        | 5.35          |
| fastify-big-json         | 5.3.2    | ✓      | 11774.0    | 84.36        | 135.46        |
| express                  | 5.1.0    | ✓      | 10267.4    | 96.79        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 9835.4     | 101.06       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 9127.8     | 108.93       | 3.39          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
