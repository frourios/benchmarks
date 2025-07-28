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
* __Node:__ `v20.19.4`
* __Run:__ Mon Jul 28 2025 01:10:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.4.0    | ✓      | 48096.0    | 20.33        | 8.62          |
| frourio                  | 1.3.1    | ✓      | 48056.0    | 20.32        | 8.62          |
| bare                     | v20.19.4 | ✗      | 47020.0    | 20.75        | 8.39          |
| polka                    | 0.5.2    | ✓      | 46884.8    | 20.82        | 8.36          |
| connect                  | 3.7.0    | ✗      | 46496.0    | 20.99        | 8.29          |
| polkadot                 | 1.0.0    | ✗      | 46447.2    | 21.03        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 46300.8    | 21.08        | 8.26          |
| server-base              | 7.1.32   | ✗      | 45650.4    | 21.39        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45598.4    | 21.42        | 8.13          |
| micro                    | 10.0.1   | ✗      | 45269.6    | 21.58        | 8.07          |
| 0http                    | 4.2.1    | ✓      | 45222.4    | 21.63        | 8.06          |
| h3                       | 1.15.3   | ✗      | 44639.2    | 21.91        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 43812.0    | 22.31        | 7.81          |
| adonisjs                 | 7.7.0    | ✓      | 42382.4    | 23.09        | 7.56          |
| micro-route              | 2.5.0    | ✓      | 42263.2    | 23.17        | 7.54          |
| h3-router                | 1.15.3   | ✓      | 42194.4    | 23.21        | 7.52          |
| restana                  | v5.0.0   | ✓      | 40406.4    | 24.25        | 7.21          |
| koa                      | 2.16.1   | ✗      | 38063.2    | 25.78        | 6.79          |
| hono                     | 4.8.9    | ✓      | 37231.2    | 26.35        | 6.11          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35801.8    | 27.44        | 6.38          |
| restify                  | 11.1.0   | ✓      | 35445.4    | 27.71        | 6.39          |
| take-five                | 2.0.0    | ✓      | 35140.2    | 27.97        | 12.63         |
| koa-router               | 13.1.1   | ✓      | 34628.0    | 28.35        | 6.18          |
| hapi                     | 21.4.0   | ✓      | 32407.2    | 30.36        | 5.78          |
| microrouter              | 3.1.3    | ✓      | 31324.4    | 31.41        | 5.59          |
| fastify-big-json         | 5.4.0    | ✓      | 12134.2    | 81.84        | 139.62        |
| express                  | 5.1.0    | ✓      | 10260.6    | 96.88        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 9907.3     | 100.34       | 1.77          |
| express-with-middlewares | 5.1.0    | ✓      | 9156.8     | 108.56       | 3.41          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
