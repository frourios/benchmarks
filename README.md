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
* __Run:__ Mon Feb 23 2026 01:15:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 47959.2    | 20.34        | 8.55          |
| fastify                  | 5.7.4    | ✓      | 47179.2    | 20.69        | 8.46          |
| connect                  | 3.7.0    | ✗      | 46544.8    | 20.96        | 8.30          |
| 0http                    | 4.3.0    | ✓      | 46289.6    | 21.11        | 8.26          |
| polkadot                 | 1.0.0    | ✗      | 46046.4    | 21.23        | 8.21          |
| frourio                  | 1.3.1    | ✓      | 45988.8    | 21.24        | 8.24          |
| polka                    | 0.5.2    | ✓      | 45932.0    | 21.27        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45460.8    | 21.50        | 8.11          |
| server-base              | 7.1.32   | ✗      | 45376.8    | 21.54        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45278.4    | 21.58        | 8.07          |
| micro                    | 10.0.1   | ✗      | 44506.4    | 21.96        | 7.94          |
| restana                  | v5.1.0   | ✓      | 43044.0    | 22.73        | 7.68          |
| connect-router           | 1.3.8    | ✓      | 42420.8    | 23.07        | 7.57          |
| adonisjs                 | 7.8.0    | ✓      | 42354.4    | 23.12        | 7.55          |
| micro-route              | 2.5.0    | ✓      | 41788.8    | 23.44        | 7.45          |
| h3                       | 1.15.5   | ✗      | 40194.4    | 24.38        | 7.17          |
| h3-router                | 1.15.5   | ✓      | 38245.6    | 25.65        | 6.82          |
| koa                      | 2.16.3   | ✗      | 36701.0    | 26.75        | 6.54          |
| take-five                | 2.0.0    | ✓      | 34849.0    | 28.19        | 12.53         |
| restify                  | 11.1.0   | ✓      | 34391.6    | 28.57        | 6.20          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34046.8    | 28.87        | 6.07          |
| koa-router               | 13.1.1   | ✓      | 32590.8    | 30.17        | 5.81          |
| hapi                     | 21.4.6   | ✓      | 30496.8    | 32.28        | 5.44          |
| microrouter              | 3.1.3    | ✓      | 29057.6    | 33.91        | 5.18          |
| hono                     | 4.12.1   | ✓      | 18441.0    | 53.72        | 3.02          |
| fastify-big-json         | 5.7.4    | ✓      | 11778.2    | 84.34        | 135.51        |
| express                  | 5.2.1    | ✓      | 10034.0    | 99.07        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9497.1     | 104.70       | 1.69          |
| express-with-middlewares | 5.2.1    | ✓      | 9112.5     | 109.11       | 3.39          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
