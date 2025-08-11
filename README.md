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
* __Run:__ Mon Aug 11 2025 01:09:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 46629.6    | 20.95        | 8.36          |
| fastify                  | 5.4.0    | ✓      | 46547.2    | 20.99        | 8.35          |
| bare                     | v20.19.4 | ✗      | 46483.8    | 21.00        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 45578.4    | 21.45        | 8.13          |
| polka                    | 0.5.2    | ✓      | 45548.8    | 21.46        | 8.12          |
| connect                  | 3.7.0    | ✗      | 45469.6    | 21.48        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 45346.4    | 21.56        | 8.09          |
| micro                    | 10.0.1   | ✗      | 45052.8    | 21.69        | 8.03          |
| 0http                    | 4.3.0    | ✓      | 44943.2    | 21.76        | 8.02          |
| server-base              | 7.1.32   | ✗      | 44904.8    | 21.80        | 8.01          |
| server-base-router       | 7.1.32   | ✓      | 44762.4    | 21.86        | 7.98          |
| h3                       | 1.15.4   | ✗      | 43501.6    | 22.49        | 7.76          |
| connect-router           | 1.3.8    | ✓      | 43300.8    | 22.60        | 7.72          |
| restana                  | v5.1.0   | ✓      | 42256.8    | 23.16        | 7.54          |
| h3-router                | 1.15.4   | ✓      | 41843.2    | 23.40        | 7.46          |
| adonisjs                 | 7.7.0    | ✓      | 41663.2    | 23.50        | 7.43          |
| micro-route              | 2.5.0    | ✓      | 41274.4    | 23.72        | 7.36          |
| koa                      | 2.16.2   | ✗      | 37231.4    | 26.37        | 6.64          |
| hono                     | 4.9.0    | ✓      | 36773.4    | 26.72        | 6.03          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35309.0    | 27.84        | 6.30          |
| restify                  | 11.1.0   | ✓      | 35174.6    | 27.93        | 6.34          |
| take-five                | 2.0.0    | ✓      | 34697.0    | 28.34        | 12.47         |
| koa-router               | 13.1.1   | ✓      | 33633.6    | 29.25        | 6.00          |
| hapi                     | 21.4.2   | ✓      | 31563.6    | 31.18        | 5.63          |
| microrouter              | 3.1.3    | ✓      | 30728.0    | 32.03        | 5.48          |
| fastify-big-json         | 5.4.0    | ✓      | 11804.0    | 84.17        | 135.81        |
| express                  | 5.1.0    | ✓      | 10113.0    | 98.31        | 1.80          |
| frourio-express          | 1.3.1    | ✓      | 9759.8     | 101.87       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 9065.1     | 109.70       | 3.37          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
