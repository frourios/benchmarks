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
* __Run:__ Mon Oct 26 2026 04:22:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 45984.8    | 21.24        | 8.20          |
| frourio                  | 1.3.1    | ✓      | 45772.8    | 21.34        | 8.21          |
| fastify                  | 5.12.7   | ✓      | 45174.2    | 21.63        | 8.10          |
| polka                    | 0.5.2    | ✓      | 44392.8    | 22.04        | 7.92          |
| connect                  | 3.7.0    | ✗      | 44303.2    | 22.08        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 43577.6    | 22.44        | 7.77          |
| rayo                     | 1.4.6    | ✓      | 43153.6    | 22.67        | 7.70          |
| server-base              | 7.1.32   | ✗      | 43100.2    | 22.69        | 7.69          |
| 0http                    | 4.4.0    | ✓      | 42748.8    | 22.90        | 7.62          |
| polkadot                 | 1.0.0    | ✗      | 41865.8    | 23.39        | 7.47          |
| micro                    | 10.0.1   | ✗      | 41852.0    | 23.39        | 7.46          |
| micro-route              | 2.5.0    | ✓      | 41095.2    | 23.83        | 7.33          |
| connect-router           | 1.3.8    | ✓      | 40733.2    | 24.06        | 7.26          |
| h3                       | 1.15.11  | ✗      | 40305.8    | 24.31        | 7.19          |
| restana                  | v5.2.0   | ✓      | 40032.8    | 24.48        | 7.14          |
| adonisjs                 | 7.8.1    | ✓      | 39909.8    | 24.55        | 7.12          |
| h3-router                | 1.15.11  | ✓      | 39769.6    | 24.64        | 7.09          |
| hono                     | 4.13.14  | ✓      | 37540.8    | 26.13        | 6.16          |
| koa                      | 2.16.4   | ✗      | 35191.6    | 27.90        | 6.28          |
| take-five                | 2.0.0    | ✓      | 33624.6    | 29.23        | 12.09         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33586.8    | 29.26        | 5.99          |
| restify                  | 11.1.0   | ✓      | 33257.0    | 29.55        | 5.99          |
| koa-router               | 13.1.1   | ✓      | 32146.0    | 30.61        | 5.73          |
| hapi                     | 21.4.11  | ✓      | 30652.8    | 32.13        | 5.47          |
| microrouter              | 3.1.3    | ✓      | 28365.6    | 34.74        | 5.06          |
| fastify-big-json         | 5.12.7   | ✓      | 11978.8    | 82.92        | 137.82        |
| express                  | 5.3.0    | ✓      | 10227.2    | 97.20        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 9954.7     | 99.85        | 1.78          |
| express-with-middlewares | 5.3.0    | ✓      | 8792.1     | 113.13       | 3.27          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
