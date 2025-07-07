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
* __Run:__ Mon Jul 07 2025 01:08:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 47971.2    | 20.35        | 8.56          |
| polkadot                 | 1.0.0    | ✗      | 47650.4    | 20.49        | 8.50          |
| polka                    | 0.5.2    | ✓      | 47646.4    | 20.49        | 8.50          |
| frourio                  | 1.3.1    | ✓      | 47330.4    | 20.63        | 8.49          |
| rayo                     | 1.4.6    | ✓      | 47080.0    | 20.74        | 8.40          |
| server-base              | 7.1.32   | ✗      | 46892.0    | 20.81        | 8.36          |
| connect                  | 3.7.0    | ✗      | 46871.2    | 20.83        | 8.36          |
| micro                    | 10.0.1   | ✗      | 46838.4    | 20.85        | 8.35          |
| fastify                  | 5.4.0    | ✓      | 46827.2    | 20.85        | 8.40          |
| server-base-router       | 7.1.32   | ✓      | 46481.6    | 20.99        | 8.29          |
| 0http                    | 4.2.1    | ✓      | 46077.6    | 21.21        | 8.22          |
| h3                       | 1.15.3   | ✗      | 44760.0    | 21.85        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 44035.2    | 22.22        | 7.85          |
| micro-route              | 2.5.0    | ✓      | 43415.2    | 22.52        | 7.74          |
| h3-router                | 1.15.3   | ✓      | 43372.0    | 22.56        | 7.73          |
| adonisjs                 | 7.7.0    | ✓      | 43284.0    | 22.60        | 7.72          |
| restana                  | v5.0.0   | ✓      | 42180.0    | 23.21        | 7.52          |
| koa                      | 2.16.1   | ✗      | 38405.6    | 25.54        | 6.85          |
| hono                     | 4.8.4    | ✓      | 37982.4    | 25.83        | 6.23          |
| take-five                | 2.0.0    | ✓      | 36687.0    | 26.78        | 13.19         |
| restify                  | 11.1.0   | ✓      | 36198.2    | 27.12        | 6.52          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36163.0    | 27.15        | 6.45          |
| koa-router               | 13.1.1   | ✓      | 34277.4    | 28.67        | 6.11          |
| hapi                     | 21.4.0   | ✓      | 32828.8    | 29.95        | 5.85          |
| microrouter              | 3.1.3    | ✓      | 31362.0    | 31.37        | 5.59          |
| fastify-big-json         | 5.4.0    | ✓      | 12164.8    | 81.65        | 139.98        |
| express                  | 5.1.0    | ✓      | 10033.2    | 99.03        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 10029.4    | 99.09        | 1.79          |
| express-with-middlewares | 5.1.0    | ✓      | 9041.0     | 109.98       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
