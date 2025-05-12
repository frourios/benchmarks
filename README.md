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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 12 2025 01:07:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 49172.0    | 19.83        | 8.77          |
| frourio                  | 1.3.1    | ✓      | 47752.0    | 20.44        | 8.56          |
| fastify                  | 5.3.2    | ✓      | 47281.6    | 20.65        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47009.6    | 20.77        | 8.38          |
| rayo                     | 1.4.6    | ✓      | 46996.8    | 20.77        | 8.38          |
| connect                  | 3.7.0    | ✗      | 46644.8    | 20.92        | 8.32          |
| 0http                    | 4.2.0    | ✓      | 46136.8    | 21.18        | 8.23          |
| server-base              | 7.1.32   | ✗      | 46053.6    | 21.21        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 45749.6    | 21.36        | 8.16          |
| micro                    | 10.0.1   | ✗      | 45248.8    | 21.60        | 8.07          |
| polkadot                 | 1.0.0    | ✗      | 45245.6    | 21.60        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 44580.8    | 21.93        | 7.95          |
| h3-router                | 1.15.3   | ✓      | 44323.2    | 22.07        | 7.90          |
| h3                       | 1.15.3   | ✗      | 44167.2    | 22.14        | 7.88          |
| micro-route              | 2.5.0    | ✓      | 42278.4    | 23.15        | 7.54          |
| adonisjs                 | 7.6.0    | ✓      | 42123.2    | 23.24        | 7.51          |
| hono                     | 4.7.9    | ✓      | 40745.6    | 24.04        | 6.68          |
| restana                  | v5.0.0   | ✓      | 39020.0    | 25.13        | 6.96          |
| koa                      | 2.16.1   | ✗      | 38539.4    | 25.45        | 6.87          |
| take-five                | 2.0.0    | ✓      | 35796.2    | 27.41        | 12.87         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35456.2    | 27.69        | 6.32          |
| restify                  | 11.1.0   | ✓      | 35090.2    | 27.99        | 6.32          |
| koa-router               | 13.1.0   | ✓      | 33229.0    | 29.58        | 5.93          |
| hapi                     | 21.4.0   | ✓      | 31414.8    | 31.33        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 30815.6    | 31.95        | 5.50          |
| fastify-big-json         | 5.3.2    | ✓      | 11752.0    | 84.51        | 135.22        |
| express                  | 5.1.0    | ✓      | 9967.0     | 99.70        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9749.6     | 101.97       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 8955.3     | 111.05       | 3.33          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
