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
* __Node:__ `v20.20.0`
* __Run:__ Mon Mar 02 2026 01:14:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 47443.4    | 20.57        | 8.46          |
| fastify                  | 5.7.4    | ✓      | 47224.0    | 20.67        | 8.47          |
| frourio                  | 1.3.1    | ✓      | 47207.2    | 20.67        | 8.46          |
| polka                    | 0.5.2    | ✓      | 47080.0    | 20.74        | 8.40          |
| connect                  | 3.7.0    | ✗      | 46448.0    | 21.01        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46368.8    | 21.07        | 8.27          |
| server-base              | 7.1.32   | ✗      | 46352.8    | 21.06        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 45854.4    | 21.31        | 8.18          |
| micro                    | 10.0.1   | ✗      | 45777.6    | 21.34        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45308.0    | 21.58        | 8.08          |
| 0http                    | 4.3.0    | ✓      | 45284.8    | 21.59        | 8.08          |
| adonisjs                 | 7.8.0    | ✓      | 43827.2    | 22.33        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 43336.0    | 22.57        | 7.73          |
| h3                       | 1.15.5   | ✗      | 43260.0    | 22.62        | 7.72          |
| restana                  | v5.1.0   | ✓      | 42967.2    | 22.78        | 7.66          |
| h3-router                | 1.15.5   | ✓      | 42536.8    | 23.01        | 7.59          |
| micro-route              | 2.5.0    | ✓      | 41465.6    | 23.62        | 7.39          |
| hono                     | 4.12.3   | ✓      | 36679.2    | 26.74        | 6.02          |
| koa                      | 2.16.4   | ✗      | 36671.4    | 26.76        | 6.54          |
| restify                  | 11.1.0   | ✓      | 36017.4    | 27.26        | 6.49          |
| take-five                | 2.0.0    | ✓      | 35112.8    | 27.98        | 12.62         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34320.2    | 28.64        | 6.12          |
| koa-router               | 13.1.1   | ✓      | 33943.6    | 28.95        | 6.05          |
| hapi                     | 21.4.6   | ✓      | 32754.0    | 30.02        | 5.84          |
| microrouter              | 3.1.3    | ✓      | 30038.8    | 32.78        | 5.36          |
| fastify-big-json         | 5.7.4    | ✓      | 11782.0    | 84.30        | 135.55        |
| express                  | 5.2.1    | ✓      | 10382.6    | 95.73        | 1.85          |
| frourio-express          | 1.3.1    | ✓      | 10237.6    | 97.08        | 1.83          |
| express-with-middlewares | 5.2.1    | ✓      | 9421.0     | 105.55       | 3.50          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
