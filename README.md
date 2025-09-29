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
* __Run:__ Mon Sep 29 2025 01:05:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| connect                  | 3.7.0    | ✗      | 46724.0    | 20.90        | 8.33          |
| fastify                  | 5.6.1    | ✓      | 46162.4    | 21.16        | 8.28          |
| polka                    | 0.5.2    | ✓      | 46146.4    | 21.16        | 8.23          |
| bare                     | v20.19.5 | ✗      | 46037.4    | 21.21        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 46015.2    | 21.23        | 8.21          |
| frourio                  | 1.3.1    | ✓      | 45815.2    | 21.32        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45704.0    | 21.38        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45103.2    | 21.68        | 8.04          |
| 0http                    | 4.3.0    | ✓      | 44477.6    | 21.99        | 7.93          |
| polkadot                 | 1.0.0    | ✗      | 44168.0    | 22.15        | 7.88          |
| micro                    | 10.0.1   | ✗      | 44145.6    | 22.15        | 7.87          |
| connect-router           | 1.3.8    | ✓      | 42764.0    | 22.88        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 42591.2    | 22.98        | 7.60          |
| adonisjs                 | 7.7.0    | ✓      | 42372.0    | 23.10        | 7.56          |
| h3                       | 1.15.4   | ✗      | 42245.6    | 23.18        | 7.53          |
| restana                  | v5.1.0   | ✓      | 41352.0    | 23.68        | 7.37          |
| h3-router                | 1.15.4   | ✓      | 41280.0    | 23.73        | 7.36          |
| koa                      | 2.16.2   | ✗      | 37437.0    | 26.21        | 6.68          |
| hono                     | 4.9.9    | ✓      | 36688.8    | 26.75        | 6.02          |
| take-five                | 2.0.0    | ✓      | 35273.4    | 27.85        | 12.68         |
| restify                  | 11.1.0   | ✓      | 34805.4    | 28.22        | 6.27          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34213.0    | 28.73        | 6.10          |
| koa-router               | 13.1.1   | ✓      | 33965.6    | 28.94        | 6.06          |
| hapi                     | 21.4.3   | ✓      | 31310.0    | 31.44        | 5.58          |
| microrouter              | 3.1.3    | ✓      | 30441.2    | 32.35        | 5.43          |
| fastify-big-json         | 5.6.1    | ✓      | 11799.4    | 84.19        | 135.75        |
| express                  | 5.1.0    | ✓      | 9961.2     | 99.80        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9688.3     | 102.58       | 1.73          |
| express-with-middlewares | 5.1.0    | ✓      | 9045.5     | 109.95       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
