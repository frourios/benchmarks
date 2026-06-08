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
* __Run:__ Mon Jun 08 2026 01:43:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 58722.4    | 16.53        | 10.47         |
| polka                    | 0.5.2    | ✓      | 56964.8    | 17.05        | 10.16         |
| connect                  | 3.7.0    | ✗      | 56899.2    | 17.07        | 10.15         |
| fastify                  | 5.8.5    | ✓      | 56840.0    | 17.09        | 10.19         |
| frourio                  | 1.3.1    | ✓      | 56787.2    | 17.11        | 10.18         |
| rayo                     | 1.4.6    | ✓      | 56640.8    | 17.14        | 10.10         |
| server-base-router       | 7.1.32   | ✓      | 56015.2    | 17.35        | 9.99          |
| server-base              | 7.1.32   | ✗      | 55712.8    | 17.44        | 9.94          |
| connect-router           | 1.3.8    | ✓      | 54066.4    | 18.00        | 9.64          |
| micro-route              | 2.5.0    | ✓      | 52512.0    | 18.55        | 9.36          |
| micro                    | 10.0.1   | ✗      | 52282.4    | 18.63        | 9.32          |
| polkadot                 | 1.0.0    | ✗      | 51615.2    | 18.88        | 9.20          |
| 0http                    | 4.4.0    | ✓      | 51522.4    | 18.92        | 9.19          |
| restana                  | v5.2.0   | ✓      | 49656.0    | 19.65        | 8.86          |
| adonisjs                 | 7.8.1    | ✓      | 48903.2    | 19.93        | 8.72          |
| h3                       | 1.15.11  | ✗      | 48327.2    | 20.19        | 8.62          |
| h3-router                | 1.15.11  | ✓      | 48192.0    | 20.25        | 8.59          |
| hono                     | 4.12.23  | ✓      | 46396.0    | 21.05        | 7.61          |
| koa                      | 2.16.4   | ✗      | 45823.2    | 21.32        | 8.17          |
| take-five                | 2.0.0    | ✓      | 44830.4    | 21.80        | 16.12         |
| restify                  | 11.1.0   | ✓      | 43452.8    | 22.52        | 7.83          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 43206.4    | 22.65        | 7.70          |
| koa-router               | 13.1.1   | ✓      | 41252.8    | 23.75        | 7.36          |
| microrouter              | 3.1.3    | ✓      | 39042.4    | 25.11        | 6.96          |
| hapi                     | 21.4.9   | ✓      | 38123.2    | 25.73        | 6.80          |
| fastify-big-json         | 5.8.5    | ✓      | 12047.0    | 82.45        | 138.61        |
| express                  | 5.2.1    | ✓      | 11961.2    | 83.02        | 2.13          |
| frourio-express          | 1.3.1    | ✓      | 11731.0    | 84.67        | 2.09          |
| express-with-middlewares | 5.2.1    | ✓      | 10903.6    | 91.12        | 4.06          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
