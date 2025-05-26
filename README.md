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
* __Run:__ Mon May 26 2025 01:06:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 48592.0    | 20.11        | 8.66          |
| polka                    | 0.5.2    | ✓      | 47400.8    | 20.59        | 8.45          |
| frourio                  | 1.3.1    | ✓      | 47294.4    | 20.64        | 8.48          |
| fastify                  | 5.3.3    | ✓      | 47127.2    | 20.72        | 8.45          |
| rayo                     | 1.4.6    | ✓      | 47012.8    | 20.76        | 8.38          |
| connect                  | 3.7.0    | ✗      | 46815.2    | 20.85        | 8.35          |
| server-base-router       | 7.1.32   | ✓      | 46373.6    | 21.05        | 8.27          |
| server-base              | 7.1.32   | ✗      | 45751.2    | 21.35        | 8.16          |
| micro                    | 10.0.1   | ✗      | 45489.6    | 21.48        | 8.11          |
| 0http                    | 4.2.1    | ✓      | 45165.6    | 21.65        | 8.05          |
| polkadot                 | 1.0.0    | ✗      | 44988.8    | 21.73        | 8.02          |
| connect-router           | 1.3.8    | ✓      | 44427.2    | 22.01        | 7.92          |
| h3                       | 1.15.3   | ✗      | 43972.0    | 22.24        | 7.84          |
| adonisjs                 | 7.6.1    | ✓      | 43090.4    | 22.71        | 7.68          |
| micro-route              | 2.5.0    | ✓      | 43080.0    | 22.71        | 7.68          |
| h3-router                | 1.15.3   | ✓      | 42812.8    | 22.87        | 7.64          |
| restana                  | v5.0.0   | ✓      | 41821.6    | 23.42        | 7.46          |
| hono                     | 4.7.10   | ✓      | 40469.6    | 24.20        | 6.64          |
| koa                      | 2.16.1   | ✗      | 37413.6    | 26.24        | 6.67          |
| take-five                | 2.0.0    | ✓      | 35711.8    | 27.50        | 12.84         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35089.6    | 27.99        | 6.26          |
| restify                  | 11.1.0   | ✓      | 34626.2    | 28.38        | 6.24          |
| koa-router               | 13.1.0   | ✓      | 33200.6    | 29.61        | 5.92          |
| hapi                     | 21.4.0   | ✓      | 31858.4    | 30.88        | 5.68          |
| microrouter              | 3.1.3    | ✓      | 30041.6    | 32.78        | 5.36          |
| fastify-big-json         | 5.3.3    | ✓      | 11956.4    | 83.06        | 137.57        |
| express                  | 5.1.0    | ✓      | 9951.1     | 99.88        | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9718.2     | 102.27       | 1.73          |
| express-with-middlewares | 5.1.0    | ✓      | 8910.5     | 111.61       | 3.31          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
