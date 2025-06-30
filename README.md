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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 30 2025 01:08:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 48646.6    | 20.09        | 8.67          |
| fastify                  | 5.4.0    | ✓      | 48040.8    | 20.34        | 8.61          |
| frourio                  | 1.3.1    | ✓      | 47971.2    | 20.35        | 8.60          |
| rayo                     | 1.4.6    | ✓      | 47555.2    | 20.52        | 8.48          |
| connect                  | 3.7.0    | ✗      | 47317.6    | 20.62        | 8.44          |
| polka                    | 0.5.2    | ✓      | 47008.8    | 20.76        | 8.38          |
| server-base              | 7.1.32   | ✗      | 46980.0    | 20.78        | 8.38          |
| server-base-router       | 7.1.32   | ✓      | 46932.0    | 20.81        | 8.37          |
| micro                    | 10.0.1   | ✗      | 46252.0    | 21.13        | 8.25          |
| 0http                    | 4.2.1    | ✓      | 46196.8    | 21.14        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45830.4    | 21.33        | 8.17          |
| connect-router           | 1.3.8    | ✓      | 44828.0    | 21.84        | 7.99          |
| micro-route              | 2.5.0    | ✓      | 43848.0    | 22.29        | 7.82          |
| h3                       | 1.15.3   | ✗      | 43836.8    | 22.31        | 7.82          |
| adonisjs                 | 7.7.0    | ✓      | 43002.4    | 22.75        | 7.67          |
| h3-router                | 1.15.3   | ✓      | 42391.2    | 23.09        | 7.56          |
| restana                  | v5.0.0   | ✓      | 41582.4    | 23.55        | 7.42          |
| hono                     | 4.8.3    | ✓      | 38190.4    | 25.68        | 6.26          |
| koa                      | 2.16.1   | ✗      | 38057.6    | 25.76        | 6.79          |
| take-five                | 2.0.0    | ✓      | 36004.6    | 27.26        | 12.94         |
| restify                  | 11.1.0   | ✓      | 35509.8    | 27.65        | 6.40          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35159.8    | 27.94        | 6.27          |
| koa-router               | 13.1.0   | ✓      | 33452.6    | 29.40        | 5.97          |
| hapi                     | 21.4.0   | ✓      | 32461.4    | 30.29        | 5.79          |
| microrouter              | 3.1.3    | ✓      | 31236.0    | 31.50        | 5.57          |
| fastify-big-json         | 5.4.0    | ✓      | 12099.4    | 82.10        | 139.21        |
| express                  | 5.1.0    | ✓      | 10208.2    | 97.32        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 9863.8     | 100.79       | 1.76          |
| express-with-middlewares | 5.1.0    | ✓      | 9068.4     | 109.66       | 3.37          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
