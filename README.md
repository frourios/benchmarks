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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 16 2025 01:07:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 47477.6    | 20.57        | 8.47          |
| connect                  | 3.7.0    | ✗      | 46752.0    | 20.89        | 8.34          |
| fastify                  | 5.4.0    | ✓      | 46389.6    | 21.06        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46204.0    | 21.13        | 8.24          |
| polka                    | 0.5.2    | ✓      | 46048.0    | 21.21        | 8.21          |
| frourio                  | 1.3.1    | ✓      | 45784.8    | 21.34        | 8.21          |
| polkadot                 | 1.0.0    | ✗      | 45399.2    | 21.53        | 8.10          |
| server-base              | 7.1.32   | ✗      | 45152.8    | 21.65        | 8.05          |
| micro                    | 10.0.1   | ✗      | 45095.2    | 21.68        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 45044.0    | 21.70        | 8.03          |
| connect-router           | 1.3.8    | ✓      | 44064.8    | 22.20        | 7.86          |
| 0http                    | 4.2.1    | ✓      | 43409.6    | 22.54        | 7.74          |
| micro-route              | 2.5.0    | ✓      | 41844.8    | 23.40        | 7.46          |
| adonisjs                 | 7.6.1    | ✓      | 41659.2    | 23.50        | 7.43          |
| h3                       | 1.15.3   | ✗      | 41277.6    | 23.72        | 7.36          |
| h3-router                | 1.15.3   | ✓      | 40919.2    | 23.94        | 7.30          |
| hono                     | 4.7.11   | ✓      | 39787.2    | 24.62        | 6.53          |
| restana                  | v5.0.0   | ✓      | 39065.6    | 25.10        | 6.97          |
| koa                      | 2.16.1   | ✗      | 36710.2    | 26.74        | 6.55          |
| take-five                | 2.0.0    | ✓      | 35482.2    | 27.68        | 12.76         |
| restify                  | 11.1.0   | ✓      | 34741.8    | 28.28        | 6.26          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34591.0    | 28.41        | 6.17          |
| koa-router               | 13.1.0   | ✓      | 32711.8    | 30.06        | 5.83          |
| hapi                     | 21.4.0   | ✓      | 31057.6    | 31.69        | 5.54          |
| microrouter              | 3.1.3    | ✓      | 29864.8    | 32.97        | 5.33          |
| fastify-big-json         | 5.4.0    | ✓      | 11865.0    | 83.73        | 136.50        |
| express                  | 5.1.0    | ✓      | 9847.3     | 100.96       | 1.76          |
| frourio-express          | 1.3.1    | ✓      | 9594.0     | 103.62       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 8940.0     | 111.21       | 3.32          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
