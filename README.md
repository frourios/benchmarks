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
* __Run:__ Mon Sep 01 2025 01:10:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 46913.6    | 20.80        | 8.37          |
| fastify                  | 5.5.0    | ✓      | 46100.0    | 21.19        | 8.27          |
| polka                    | 0.5.2    | ✓      | 46054.4    | 21.22        | 8.21          |
| frourio                  | 1.3.1    | ✓      | 45997.6    | 21.23        | 8.25          |
| connect                  | 3.7.0    | ✗      | 45902.4    | 21.29        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45549.6    | 21.44        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45422.4    | 21.51        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 44730.4    | 21.89        | 7.98          |
| micro                    | 10.0.1   | ✗      | 44592.8    | 21.92        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 44559.2    | 21.94        | 7.95          |
| 0http                    | 4.3.0    | ✓      | 44253.6    | 22.11        | 7.89          |
| restana                  | v5.1.0   | ✓      | 43801.6    | 22.34        | 7.81          |
| connect-router           | 1.3.8    | ✓      | 42892.8    | 22.81        | 7.65          |
| h3-router                | 1.15.4   | ✓      | 42718.4    | 22.91        | 7.62          |
| h3                       | 1.15.4   | ✗      | 42475.2    | 23.05        | 7.57          |
| adonisjs                 | 7.7.0    | ✓      | 42188.0    | 23.20        | 7.52          |
| micro-route              | 2.5.0    | ✓      | 41822.4    | 23.41        | 7.46          |
| hono                     | 4.9.5    | ✓      | 36847.2    | 26.63        | 6.04          |
| koa                      | 2.16.2   | ✗      | 36720.6    | 26.73        | 6.55          |
| restify                  | 11.1.0   | ✓      | 34934.8    | 28.12        | 6.30          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34643.4    | 28.37        | 6.18          |
| take-five                | 2.0.0    | ✓      | 34483.0    | 28.48        | 12.40         |
| koa-router               | 13.1.1   | ✓      | 33905.0    | 28.99        | 6.05          |
| hapi                     | 21.4.3   | ✓      | 31507.4    | 31.24        | 5.62          |
| microrouter              | 3.1.3    | ✓      | 29792.4    | 33.05        | 5.31          |
| fastify-big-json         | 5.5.0    | ✓      | 11788.0    | 84.26        | 135.63        |
| express                  | 5.1.0    | ✓      | 9997.6     | 99.42        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9657.8     | 102.90       | 1.72          |
| express-with-middlewares | 5.1.0    | ✓      | 9172.0     | 108.42       | 3.41          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
