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
* __Node:__ `v20.20.1`
* __Run:__ Mon Mar 30 2026 01:20:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 49312.8    | 19.82        | 8.84          |
| fastify                  | 5.8.4    | ✓      | 48885.6    | 19.99        | 8.77          |
| bare                     | v20.20.1 | ✗      | 48854.4    | 19.99        | 8.71          |
| micro                    | 10.0.1   | ✗      | 47333.6    | 20.62        | 8.44          |
| connect                  | 3.7.0    | ✗      | 47141.6    | 20.70        | 8.41          |
| polka                    | 0.5.2    | ✓      | 46452.8    | 21.02        | 8.28          |
| rayo                     | 1.4.6    | ✓      | 46174.4    | 21.16        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46082.4    | 21.19        | 8.22          |
| 0http                    | 4.3.0    | ✓      | 45619.2    | 21.42        | 8.14          |
| server-base              | 7.1.32   | ✗      | 44722.4    | 21.87        | 7.98          |
| adonisjs                 | 7.8.0    | ✓      | 44255.2    | 22.10        | 7.89          |
| polkadot                 | 1.0.0    | ✗      | 44235.2    | 22.11        | 7.89          |
| connect-router           | 1.3.8    | ✓      | 44223.2    | 22.12        | 7.89          |
| h3                       | 1.15.10  | ✗      | 43396.0    | 22.55        | 7.74          |
| restana                  | v5.1.0   | ✓      | 42351.2    | 23.12        | 7.55          |
| micro-route              | 2.5.0    | ✓      | 41262.4    | 23.74        | 7.36          |
| h3-router                | 1.15.10  | ✓      | 40332.0    | 24.30        | 7.19          |
| koa                      | 2.16.4   | ✗      | 36510.2    | 26.88        | 6.51          |
| hono                     | 4.12.9   | ✓      | 35939.4    | 27.31        | 5.89          |
| take-five                | 2.0.0    | ✓      | 35226.0    | 27.88        | 12.66         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34876.4    | 28.16        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34595.0    | 28.40        | 6.24          |
| koa-router               | 13.1.1   | ✓      | 32906.4    | 29.89        | 5.87          |
| hapi                     | 21.4.7   | ✓      | 31608.2    | 31.13        | 5.64          |
| microrouter              | 3.1.3    | ✓      | 30174.4    | 32.63        | 5.38          |
| fastify-big-json         | 5.8.4    | ✓      | 11742.4    | 84.61        | 135.11        |
| express                  | 5.2.1    | ✓      | 10195.0    | 97.50        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 10081.0    | 98.59        | 1.80          |
| express-with-middlewares | 5.2.1    | ✓      | 9453.5     | 105.20       | 3.52          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
