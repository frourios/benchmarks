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
* __Node:__ `v20.19.1`
* __Run:__ Mon Jun 09 2025 01:08:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 48168.0    | 20.29        | 8.59          |
| fastify                  | 5.3.3    | ✓      | 47475.2    | 20.56        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47412.8    | 20.58        | 8.46          |
| frourio                  | 1.3.1    | ✓      | 46494.4    | 21.00        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46298.4    | 21.09        | 8.26          |
| 0http                    | 4.2.1    | ✓      | 46158.4    | 21.17        | 8.23          |
| polka                    | 0.5.2    | ✓      | 46032.0    | 21.21        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 46028.8    | 21.21        | 8.21          |
| micro                    | 10.0.1   | ✗      | 45847.2    | 21.31        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45827.2    | 21.31        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 44723.2    | 21.86        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 44085.6    | 22.18        | 7.86          |
| h3                       | 1.15.3   | ✗      | 43195.2    | 22.65        | 7.70          |
| adonisjs                 | 7.6.1    | ✓      | 43077.6    | 22.71        | 7.68          |
| micro-route              | 2.5.0    | ✓      | 41737.6    | 23.47        | 7.44          |
| h3-router                | 1.15.3   | ✓      | 40598.4    | 24.14        | 7.24          |
| restana                  | v5.0.0   | ✓      | 40396.8    | 24.26        | 7.20          |
| hono                     | 4.7.11   | ✓      | 39478.4    | 24.84        | 6.48          |
| koa                      | 2.16.1   | ✗      | 36694.2    | 26.75        | 6.54          |
| restify                  | 11.1.0   | ✓      | 35056.0    | 28.02        | 6.32          |
| take-five                | 2.0.0    | ✓      | 34944.4    | 28.13        | 12.56         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34845.0    | 28.21        | 6.21          |
| koa-router               | 13.1.0   | ✓      | 32531.2    | 30.24        | 5.80          |
| hapi                     | 21.4.0   | ✓      | 30924.8    | 31.83        | 5.51          |
| microrouter              | 3.1.3    | ✓      | 29628.0    | 33.24        | 5.28          |
| fastify-big-json         | 5.3.3    | ✓      | 11541.2    | 86.07        | 132.78        |
| express                  | 5.1.0    | ✓      | 10303.4    | 96.47        | 1.84          |
| frourio-express          | 1.3.1    | ✓      | 9508.6     | 104.57       | 1.70          |
| express-with-middlewares | 5.1.0    | ✓      | 8807.6     | 112.92       | 3.28          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
