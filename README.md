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
* __Run:__ Mon May 04 2026 01:30:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 70272.0    | 13.75        | 12.60         |
| server-base              | 7.1.32   | ✗      | 69562.0    | 13.88        | 12.41         |
| server-base-router       | 7.1.32   | ✓      | 69228.0    | 13.95        | 12.35         |
| polka                    | 0.5.2    | ✓      | 69143.2    | 13.96        | 12.33         |
| bare                     | v20.20.2 | ✗      | 68772.4    | 14.04        | 12.26         |
| fastify                  | 5.8.5    | ✓      | 68604.8    | 14.08        | 12.30         |
| micro                    | 10.0.1   | ✗      | 68558.0    | 14.08        | 12.23         |
| rayo                     | 1.4.6    | ✓      | 68347.6    | 14.14        | 12.19         |
| connect                  | 3.7.0    | ✗      | 67328.0    | 14.34        | 12.01         |
| micro-route              | 2.5.0    | ✓      | 64196.8    | 15.10        | 11.45         |
| connect-router           | 1.3.8    | ✓      | 61940.8    | 15.65        | 11.05         |
| polkadot                 | 1.0.0    | ✗      | 60563.2    | 16.02        | 10.80         |
| adonisjs                 | 7.8.1    | ✓      | 60271.2    | 16.09        | 10.75         |
| restana                  | v5.2.0   | ✓      | 59806.4    | 16.23        | 10.67         |
| 0http                    | 4.4.0    | ✓      | 59206.4    | 16.39        | 10.56         |
| hono                     | 4.12.16  | ✓      | 54320.8    | 17.91        | 8.91          |
| koa                      | 2.16.4   | ✗      | 54277.6    | 17.92        | 9.68          |
| h3                       | 1.15.11  | ✗      | 53680.8    | 18.13        | 9.57          |
| take-five                | 2.0.0    | ✓      | 52572.8    | 18.52        | 18.90         |
| h3-router                | 1.15.11  | ✓      | 51901.6    | 18.77        | 9.26          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 50616.0    | 19.26        | 9.03          |
| restify                  | 11.1.0   | ✓      | 49793.6    | 19.58        | 8.98          |
| koa-router               | 13.1.1   | ✓      | 48580.0    | 20.09        | 8.66          |
| hapi                     | 21.4.8   | ✓      | 43822.4    | 22.31        | 7.82          |
| microrouter              | 3.1.3    | ✓      | 43232.0    | 22.63        | 7.71          |
| fastify-big-json         | 5.8.5    | ✓      | 12565.6    | 79.02        | 144.56        |
| express                  | 5.2.1    | ✓      | 12218.0    | 81.27        | 2.18          |
| frourio-express          | 1.3.1    | ✓      | 11774.0    | 84.36        | 2.10          |
| express-with-middlewares | 5.2.1    | ✓      | 11273.2    | 88.13        | 4.19          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
