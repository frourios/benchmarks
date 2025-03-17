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
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 17 2025 01:04:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 48935.2    | 19.94        | 8.73          |
| frourio                  | 1.3.1    | ✓      | 48280.0    | 20.23        | 8.66          |
| connect                  | 3.7.0    | ✗      | 48151.2    | 20.29        | 8.59          |
| fastify                  | 5.2.1    | ✓      | 47712.0    | 20.46        | 8.55          |
| rayo                     | 1.4.6    | ✓      | 47699.2    | 20.48        | 8.51          |
| polkadot                 | 1.0.0    | ✗      | 47648.0    | 20.49        | 8.50          |
| 0http                    | 4.2.0    | ✓      | 47599.2    | 20.51        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47368.0    | 20.62        | 8.45          |
| server-base-router       | 7.1.32   | ✓      | 46464.0    | 20.98        | 8.29          |
| server-base              | 7.1.32   | ✗      | 46454.4    | 20.99        | 8.29          |
| micro                    | 10.0.1   | ✗      | 46056.8    | 21.22        | 8.21          |
| h3                       | 1.15.1   | ✗      | 45148.8    | 21.65        | 8.05          |
| h3-router                | 1.15.1   | ✓      | 45076.8    | 21.69        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 44311.2    | 22.09        | 7.90          |
| micro-route              | 2.5.0    | ✓      | 44008.0    | 22.20        | 7.85          |
| restana                  | v5.0.0   | ✓      | 43358.4    | 22.56        | 7.73          |
| adonisjs                 | 7.5.0    | ✓      | 42864.0    | 22.82        | 7.64          |
| hono                     | 4.7.4    | ✓      | 41928.0    | 23.34        | 6.88          |
| koa                      | 2.16.0   | ✗      | 37974.4    | 25.85        | 6.77          |
| restify                  | 11.1.0   | ✓      | 36428.2    | 26.94        | 6.57          |
| take-five                | 2.0.0    | ✓      | 36424.2    | 26.96        | 13.10         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35984.2    | 27.30        | 6.42          |
| koa-router               | 13.1.0   | ✓      | 34765.8    | 28.25        | 6.20          |
| hapi                     | 21.4.0   | ✓      | 32782.4    | 29.99        | 5.85          |
| microrouter              | 3.1.3    | ✓      | 31231.4    | 31.51        | 5.57          |
| fastify-big-json         | 5.2.1    | ✓      | 12011.8    | 82.69        | 138.20        |
| frourio-express          | 1.3.1    | ✓      | 10312.0    | 96.38        | 1.84          |
| express                  | 5.0.1    | ✓      | 10278.8    | 96.70        | 1.83          |
| express-with-middlewares | 5.0.1    | ✓      | 9361.6     | 106.16       | 3.48          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
