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
* __Run:__ Mon Jan 26 2026 01:10:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 70558.8    | 13.69        | 12.58         |
| frourio                  | 1.3.1    | ✓      | 68983.6    | 14.00        | 12.37         |
| fastify                  | 5.7.1    | ✓      | 67063.6    | 14.40        | 12.02         |
| connect                  | 3.7.0    | ✗      | 66954.4    | 14.44        | 11.94         |
| polka                    | 0.5.2    | ✓      | 66205.2    | 14.60        | 11.81         |
| rayo                     | 1.4.6    | ✓      | 64445.2    | 15.02        | 11.49         |
| server-base-router       | 7.1.32   | ✓      | 64125.6    | 15.10        | 11.44         |
| server-base              | 7.1.32   | ✗      | 64026.8    | 15.12        | 11.42         |
| micro                    | 10.0.1   | ✗      | 63708.4    | 15.20        | 11.36         |
| connect-router           | 1.3.8    | ✓      | 61499.2    | 15.76        | 10.97         |
| adonisjs                 | 7.8.0    | ✓      | 61028.0    | 15.89        | 10.88         |
| micro-route              | 2.5.0    | ✓      | 59743.2    | 16.24        | 10.65         |
| 0http                    | 4.3.0    | ✓      | 59598.4    | 16.29        | 10.63         |
| polkadot                 | 1.0.0    | ✗      | 59309.6    | 16.36        | 10.58         |
| h3                       | 1.15.5   | ✗      | 56821.6    | 17.11        | 10.13         |
| restana                  | v5.1.0   | ✓      | 54233.6    | 17.94        | 9.67          |
| h3-router                | 1.15.5   | ✓      | 53277.6    | 18.27        | 9.50          |
| hono                     | 4.11.5   | ✓      | 51641.6    | 18.87        | 8.47          |
| koa                      | 2.16.3   | ✗      | 51597.6    | 18.89        | 9.20          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 49249.6    | 19.80        | 8.78          |
| take-five                | 2.0.0    | ✓      | 48958.4    | 19.93        | 17.60         |
| restify                  | 11.1.0   | ✓      | 48672.8    | 20.04        | 8.77          |
| koa-router               | 13.1.1   | ✓      | 46217.6    | 21.14        | 8.24          |
| microrouter              | 3.1.3    | ✓      | 41342.4    | 23.69        | 7.37          |
| hapi                     | 21.4.4   | ✓      | 41161.6    | 23.79        | 7.34          |
| fastify-big-json         | 5.7.1    | ✓      | 12671.2    | 78.37        | 145.79        |
| express                  | 5.2.1    | ✓      | 12031.4    | 82.56        | 2.15          |
| frourio-express          | 1.3.1    | ✓      | 11879.8    | 83.61        | 2.12          |
| express-with-middlewares | 5.2.1    | ✓      | 11076.6    | 89.71        | 4.12          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
