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
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 15 2025 01:06:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.0    | ✓      | 46787.2    | 20.87        | 8.39          |
| frourio                  | 1.3.1    | ✓      | 46433.6    | 21.02        | 8.32          |
| bare                     | v20.19.5 | ✗      | 46268.0    | 21.09        | 8.25          |
| 0http                    | 4.3.0    | ✓      | 46162.4    | 21.17        | 8.23          |
| connect                  | 3.7.0    | ✗      | 45974.4    | 21.23        | 8.20          |
| polka                    | 0.5.2    | ✓      | 45823.2    | 21.33        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45804.8    | 21.33        | 8.17          |
| micro                    | 10.0.1   | ✗      | 45277.6    | 21.57        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 44735.2    | 21.87        | 7.98          |
| server-base              | 7.1.32   | ✗      | 43992.8    | 22.23        | 7.85          |
| rayo                     | 1.4.6    | ✓      | 43864.0    | 22.29        | 7.82          |
| h3                       | 1.15.4   | ✗      | 43407.2    | 22.54        | 7.74          |
| restana                  | v5.1.0   | ✓      | 43074.4    | 22.72        | 7.68          |
| connect-router           | 1.3.8    | ✓      | 42966.4    | 22.76        | 7.66          |
| h3-router                | 1.15.4   | ✓      | 42912.0    | 22.80        | 7.65          |
| adonisjs                 | 7.7.0    | ✓      | 41981.6    | 23.31        | 7.49          |
| micro-route              | 2.5.0    | ✓      | 41803.2    | 23.43        | 7.45          |
| koa                      | 2.16.2   | ✗      | 36465.4    | 26.92        | 6.50          |
| hono                     | 4.9.7    | ✓      | 36371.8    | 26.99        | 5.97          |
| restify                  | 11.1.0   | ✓      | 34905.8    | 28.14        | 6.29          |
| take-five                | 2.0.0    | ✓      | 34767.8    | 28.27        | 12.50         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34405.6    | 28.56        | 6.14          |
| koa-router               | 13.1.1   | ✓      | 33452.0    | 29.39        | 5.97          |
| hapi                     | 21.4.3   | ✓      | 32134.6    | 30.62        | 5.73          |
| microrouter              | 3.1.3    | ✓      | 29040.8    | 33.92        | 5.18          |
| fastify-big-json         | 5.6.0    | ✓      | 11794.6    | 84.22        | 135.70        |
| express                  | 5.1.0    | ✓      | 10067.2    | 98.74        | 1.80          |
| frourio-express          | 1.3.1    | ✓      | 9724.5     | 102.23       | 1.73          |
| express-with-middlewares | 5.1.0    | ✓      | 9136.0     | 108.85       | 3.40          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
