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
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 27 2026 03:59:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48748.0    | 20.03        | 8.69          |
| fastify                  | 5.10.0   | ✓      | 47884.8    | 20.37        | 8.59          |
| server-base-router       | 7.1.32   | ✓      | 47712.8    | 20.45        | 8.51          |
| frourio                  | 1.3.1    | ✓      | 47496.0    | 20.55        | 8.52          |
| polka                    | 0.5.2    | ✓      | 47225.6    | 20.67        | 8.42          |
| micro                    | 10.0.1   | ✗      | 46284.0    | 21.11        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 46046.4    | 21.21        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45624.0    | 21.42        | 8.14          |
| 0http                    | 4.4.0    | ✓      | 45452.8    | 21.52        | 8.11          |
| connect                  | 3.7.0    | ✗      | 44940.0    | 21.78        | 8.01          |
| polkadot                 | 1.0.0    | ✗      | 43430.4    | 22.53        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 43024.0    | 22.73        | 7.67          |
| restana                  | v5.2.0   | ✓      | 42741.6    | 22.90        | 7.62          |
| micro-route              | 2.5.0    | ✓      | 42733.6    | 22.89        | 7.62          |
| adonisjs                 | 7.8.1    | ✓      | 42616.0    | 22.96        | 7.60          |
| h3                       | 1.15.11  | ✗      | 39932.8    | 24.55        | 7.12          |
| h3-router                | 1.15.11  | ✓      | 39087.2    | 25.09        | 6.97          |
| koa                      | 2.16.4   | ✗      | 36276.2    | 27.08        | 6.47          |
| hono                     | 4.12.32  | ✓      | 36124.8    | 27.16        | 5.93          |
| restify                  | 11.1.0   | ✓      | 35933.8    | 27.32        | 6.48          |
| take-five                | 2.0.0    | ✓      | 35572.2    | 27.60        | 12.79         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33792.4    | 29.09        | 6.03          |
| koa-router               | 13.1.1   | ✓      | 33555.6    | 29.30        | 5.98          |
| hapi                     | 21.4.10  | ✓      | 31795.8    | 30.94        | 5.67          |
| microrouter              | 3.1.3    | ✓      | 28724.0    | 34.31        | 5.12          |
| fastify-big-json         | 5.10.0   | ✓      | 11851.8    | 83.82        | 136.36        |
| express                  | 5.2.1    | ✓      | 9972.1     | 99.70        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9486.1     | 104.83       | 1.69          |
| express-with-middlewares | 5.2.1    | ✓      | 9062.0     | 109.67       | 3.37          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
