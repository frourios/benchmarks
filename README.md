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
* __Run:__ Mon Jun 29 2026 01:41:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 49135.2    | 19.88        | 8.76          |
| frourio                  | 1.3.1    | ✓      | 47856.0    | 20.39        | 8.58          |
| connect                  | 3.7.0    | ✗      | 47422.4    | 20.58        | 8.46          |
| polka                    | 0.5.2    | ✓      | 47328.0    | 20.61        | 8.44          |
| server-base-router       | 7.1.32   | ✓      | 47199.2    | 20.68        | 8.42          |
| rayo                     | 1.4.6    | ✓      | 46763.2    | 20.89        | 8.34          |
| fastify                  | 5.9.0    | ✓      | 46740.0    | 20.89        | 8.38          |
| server-base              | 7.1.32   | ✗      | 46633.6    | 20.93        | 8.32          |
| polkadot                 | 1.0.0    | ✗      | 46363.2    | 21.07        | 8.27          |
| micro                    | 10.0.1   | ✗      | 45916.0    | 21.28        | 8.19          |
| 0http                    | 4.4.0    | ✓      | 44550.4    | 21.96        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 43728.8    | 22.36        | 7.80          |
| h3                       | 1.15.11  | ✗      | 43509.6    | 22.48        | 7.76          |
| micro-route              | 2.5.0    | ✓      | 43063.2    | 22.70        | 7.68          |
| adonisjs                 | 7.8.1    | ✓      | 42955.2    | 22.78        | 7.66          |
| restana                  | v5.2.0   | ✓      | 40896.8    | 23.95        | 7.29          |
| h3-router                | 1.15.11  | ✓      | 40168.8    | 24.40        | 7.16          |
| koa                      | 2.16.4   | ✗      | 37173.0    | 26.39        | 6.63          |
| hono                     | 4.12.27  | ✓      | 36576.2    | 26.81        | 6.00          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35811.0    | 27.41        | 6.39          |
| take-five                | 2.0.0    | ✓      | 35363.0    | 27.77        | 12.71         |
| restify                  | 11.1.0   | ✓      | 34654.2    | 28.35        | 6.25          |
| koa-router               | 13.1.1   | ✓      | 34048.2    | 28.87        | 6.07          |
| hapi                     | 21.4.9   | ✓      | 33160.8    | 29.66        | 5.91          |
| microrouter              | 3.1.3    | ✓      | 31104.8    | 31.63        | 5.55          |
| fastify-big-json         | 5.9.0    | ✓      | 12015.2    | 82.65        | 138.25        |
| express                  | 5.2.1    | ✓      | 10257.2    | 96.90        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 9882.2     | 100.60       | 1.76          |
| express-with-middlewares | 5.2.1    | ✓      | 9322.1     | 106.67       | 3.47          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
