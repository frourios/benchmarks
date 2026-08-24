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
* __Run:__ Mon Aug 24 2026 02:01:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56598.4    | 17.16        | 10.09         |
| fastify                  | 5.12.1   | ✓      | 56480.8    | 17.20        | 10.13         |
| frourio                  | 1.3.1    | ✓      | 56468.0    | 17.20        | 10.12         |
| rayo                     | 1.4.6    | ✓      | 56103.2    | 17.32        | 10.00         |
| polka                    | 0.5.2    | ✓      | 55793.6    | 17.42        | 9.95          |
| connect                  | 3.7.0    | ✗      | 55168.8    | 17.61        | 9.84          |
| server-base              | 7.1.32   | ✗      | 55085.6    | 17.65        | 9.82          |
| server-base-router       | 7.1.32   | ✓      | 54604.0    | 17.82        | 9.74          |
| connect-router           | 1.3.8    | ✓      | 52937.6    | 18.39        | 9.44          |
| micro-route              | 2.5.0    | ✓      | 52118.4    | 18.69        | 9.29          |
| micro                    | 10.0.1   | ✗      | 50800.0    | 19.18        | 9.06          |
| polkadot                 | 1.0.0    | ✗      | 49280.0    | 19.80        | 8.79          |
| 0http                    | 4.4.0    | ✓      | 49121.6    | 19.86        | 8.76          |
| hono                     | 4.13.3   | ✓      | 48644.8    | 20.05        | 7.98          |
| adonisjs                 | 7.8.1    | ✓      | 47724.0    | 20.46        | 8.51          |
| restana                  | v5.2.0   | ✓      | 46844.8    | 20.86        | 8.35          |
| h3                       | 1.15.11  | ✗      | 45551.2    | 21.46        | 8.12          |
| koa                      | 2.16.4   | ✗      | 45457.6    | 21.50        | 8.11          |
| take-five                | 2.0.0    | ✓      | 44692.8    | 21.88        | 16.07         |
| h3-router                | 1.15.11  | ✓      | 44187.2    | 22.13        | 7.88          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42640.0    | 22.95        | 7.60          |
| restify                  | 11.1.0   | ✓      | 42364.0    | 23.11        | 7.64          |
| koa-router               | 13.1.1   | ✓      | 41112.8    | 23.83        | 7.33          |
| microrouter              | 3.1.3    | ✓      | 37804.0    | 25.95        | 6.74          |
| hapi                     | 21.4.10  | ✓      | 37300.6    | 26.30        | 6.65          |
| fastify-big-json         | 5.12.1   | ✓      | 11802.2    | 84.18        | 135.78        |
| express                  | 5.2.1    | ✓      | 11648.8    | 85.28        | 2.08          |
| frourio-express          | 1.3.1    | ✓      | 11467.6    | 86.66        | 2.05          |
| express-with-middlewares | 5.2.1    | ✓      | 10639.2    | 93.42        | 3.96          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
