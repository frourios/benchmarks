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
* __Run:__ Mon Nov 09 2026 05:44:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 46740.8    | 20.88        | 8.38          |
| bare                     | v20.20.2 | ✗      | 46720.0    | 20.89        | 8.33          |
| fastify                  | 5.12.8   | ✓      | 45836.0    | 21.31        | 8.22          |
| connect                  | 3.7.0    | ✗      | 44738.4    | 21.86        | 7.98          |
| server-base-router       | 7.1.32   | ✓      | 44564.0    | 21.95        | 7.95          |
| rayo                     | 1.4.6    | ✓      | 44312.8    | 22.07        | 7.90          |
| server-base              | 7.1.32   | ✗      | 44121.6    | 22.17        | 7.87          |
| polka                    | 0.5.2    | ✓      | 44054.2    | 22.21        | 7.86          |
| micro                    | 10.0.1   | ✗      | 43031.2    | 22.74        | 7.67          |
| 0http                    | 4.4.0    | ✓      | 42746.6    | 22.90        | 7.62          |
| connect-router           | 1.3.8    | ✓      | 42396.8    | 23.09        | 7.56          |
| polkadot                 | 1.0.0    | ✗      | 41709.6    | 23.47        | 7.44          |
| micro-route              | 2.5.0    | ✓      | 40966.4    | 23.91        | 7.31          |
| h3                       | 1.15.11  | ✗      | 40255.4    | 24.35        | 7.18          |
| adonisjs                 | 7.8.1    | ✓      | 39928.8    | 24.54        | 7.12          |
| restana                  | v5.2.0   | ✓      | 39856.4    | 24.59        | 7.11          |
| h3-router                | 1.15.11  | ✓      | 39554.0    | 24.78        | 7.05          |
| hono                     | 4.13.17  | ✓      | 38323.4    | 25.60        | 6.29          |
| koa                      | 2.16.4   | ✗      | 35716.4    | 27.51        | 6.37          |
| take-five                | 2.0.0    | ✓      | 34039.4    | 28.87        | 12.24         |
| restify                  | 11.1.0   | ✓      | 33305.4    | 29.52        | 6.00          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33297.4    | 29.53        | 5.94          |
| koa-router               | 13.1.1   | ✓      | 32457.2    | 30.30        | 5.79          |
| hapi                     | 21.4.13  | ✓      | 31358.6    | 31.38        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 28772.0    | 34.24        | 5.13          |
| fastify-big-json         | 5.12.8   | ✓      | 12203.4    | 81.38        | 140.39        |
| frourio-express          | 1.3.1    | ✓      | 10174.6    | 97.67        | 1.81          |
| express                  | 5.3.0    | ✓      | 10164.1    | 97.80        | 1.81          |
| express-with-middlewares | 5.3.0    | ✓      | 8273.3     | 120.18       | 3.08          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
