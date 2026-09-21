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
* __Run:__ Mon Sep 21 2026 04:31:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 47352.8    | 20.61        | 8.49          |
| bare                     | v20.20.2 | ✗      | 46175.2    | 21.15        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45039.2    | 21.71        | 8.03          |
| rayo                     | 1.4.6    | ✓      | 44966.4    | 21.74        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44930.4    | 21.76        | 8.01          |
| server-base              | 7.1.32   | ✗      | 44851.2    | 21.79        | 8.00          |
| fastify                  | 5.12.5   | ✓      | 44684.0    | 21.88        | 8.01          |
| micro                    | 10.0.1   | ✗      | 44616.0    | 21.92        | 7.96          |
| polka                    | 0.5.2    | ✓      | 44614.4    | 21.92        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 43006.4    | 22.75        | 7.67          |
| 0http                    | 4.4.0    | ✓      | 42213.6    | 23.20        | 7.53          |
| connect-router           | 1.3.8    | ✓      | 42024.0    | 23.29        | 7.49          |
| restana                  | v5.2.0   | ✓      | 41454.4    | 23.62        | 7.39          |
| micro-route              | 2.5.0    | ✓      | 41196.8    | 23.78        | 7.35          |
| adonisjs                 | 7.8.1    | ✓      | 41062.4    | 23.85        | 7.32          |
| hono                     | 4.13.8   | ✓      | 38851.0    | 25.24        | 6.37          |
| h3                       | 1.15.11  | ✗      | 38572.8    | 25.43        | 6.88          |
| h3-router                | 1.15.11  | ✓      | 38041.6    | 25.79        | 6.78          |
| koa                      | 2.16.4   | ✗      | 35837.8    | 27.40        | 6.39          |
| take-five                | 2.0.0    | ✓      | 34315.4    | 28.63        | 12.34         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33435.4    | 29.41        | 5.96          |
| restify                  | 11.1.0   | ✓      | 33222.8    | 29.59        | 5.99          |
| koa-router               | 13.1.1   | ✓      | 32700.2    | 30.08        | 5.83          |
| hapi                     | 21.4.10  | ✓      | 31256.4    | 31.48        | 5.57          |
| microrouter              | 3.1.3    | ✓      | 28880.4    | 34.12        | 5.15          |
| fastify-big-json         | 5.12.5   | ✓      | 11510.2    | 86.33        | 132.44        |
| express                  | 5.2.1    | ✓      | 9712.5     | 102.38       | 1.73          |
| frourio-express          | 1.3.1    | ✓      | 9559.5     | 103.96       | 1.70          |
| express-with-middlewares | 5.2.1    | ✓      | 9047.5     | 109.87       | 3.37          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
