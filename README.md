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
* __Node:__ `v20.19.6`
* __Run:__ Mon Dec 08 2025 01:07:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 71698.0    | 13.46        | 12.79         |
| frourio                  | 1.3.1    | ✓      | 69977.6    | 13.81        | 12.55         |
| connect                  | 3.7.0    | ✗      | 69912.4    | 13.83        | 12.47         |
| fastify                  | 5.6.2    | ✓      | 69600.0    | 13.88        | 12.48         |
| polka                    | 0.5.2    | ✓      | 69454.4    | 13.92        | 12.39         |
| rayo                     | 1.4.6    | ✓      | 68948.4    | 14.01        | 12.30         |
| server-base              | 7.1.32   | ✗      | 67754.4    | 14.26        | 12.08         |
| micro                    | 10.0.1   | ✗      | 67614.4    | 14.29        | 12.06         |
| server-base-router       | 7.1.32   | ✓      | 67587.6    | 14.29        | 12.05         |
| connect-router           | 1.3.8    | ✓      | 63824.8    | 15.17        | 11.38         |
| micro-route              | 2.5.0    | ✓      | 62292.0    | 15.57        | 11.11         |
| adonisjs                 | 7.7.0    | ✓      | 62100.0    | 15.60        | 11.07         |
| 0http                    | 4.3.0    | ✓      | 60927.2    | 15.93        | 10.87         |
| polkadot                 | 1.0.0    | ✗      | 60705.6    | 15.98        | 10.83         |
| h3                       | 1.15.4   | ✗      | 57710.4    | 16.84        | 10.29         |
| restana                  | v5.1.0   | ✓      | 57513.6    | 16.90        | 10.26         |
| h3-router                | 1.15.4   | ✓      | 56706.4    | 17.14        | 10.11         |
| hono                     | 4.10.7   | ✓      | 54016.0    | 18.01        | 8.86          |
| koa                      | 2.16.3   | ✗      | 53725.6    | 18.10        | 9.58          |
| take-five                | 2.0.0    | ✓      | 51058.4    | 19.08        | 18.36         |
| restify                  | 11.1.0   | ✓      | 50875.2    | 19.16        | 9.17          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 50227.2    | 19.40        | 8.96          |
| koa-router               | 13.1.1   | ✓      | 48754.4    | 20.01        | 8.69          |
| microrouter              | 3.1.3    | ✓      | 44199.2    | 22.14        | 7.88          |
| hapi                     | 21.4.4   | ✓      | 42914.4    | 22.79        | 7.65          |
| fastify-big-json         | 5.6.2    | ✓      | 12849.2    | 77.28        | 147.84        |
| express                  | 5.2.1    | ✓      | 12204.6    | 81.36        | 2.18          |
| frourio-express          | 1.3.1    | ✓      | 11984.2    | 82.89        | 2.14          |
| express-with-middlewares | 5.2.1    | ✓      | 10593.8    | 93.81        | 3.94          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
