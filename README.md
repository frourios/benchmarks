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
* __Run:__ Mon May 25 2026 01:38:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| connect                  | 3.7.0    | ✗      | 49004.8    | 19.93        | 8.74          |
| bare                     | v20.20.2 | ✗      | 48745.6    | 20.03        | 8.69          |
| fastify                  | 5.8.5    | ✓      | 48512.8    | 20.15        | 8.70          |
| rayo                     | 1.4.6    | ✓      | 48023.2    | 20.34        | 8.56          |
| frourio                  | 1.3.1    | ✓      | 47555.2    | 20.53        | 8.53          |
| server-base              | 7.1.32   | ✗      | 47532.8    | 20.54        | 8.48          |
| server-base-router       | 7.1.32   | ✓      | 46995.2    | 20.77        | 8.38          |
| 0http                    | 4.4.0    | ✓      | 45833.6    | 21.33        | 8.17          |
| micro                    | 10.0.1   | ✗      | 45084.8    | 21.68        | 8.04          |
| polka                    | 0.5.2    | ✓      | 44650.4    | 21.90        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 44608.0    | 21.94        | 7.96          |
| adonisjs                 | 7.8.1    | ✓      | 43723.2    | 22.37        | 7.80          |
| restana                  | v5.2.0   | ✓      | 43698.4    | 22.38        | 7.79          |
| polkadot                 | 1.0.0    | ✗      | 43528.8    | 22.47        | 7.76          |
| micro-route              | 2.5.0    | ✓      | 42776.8    | 22.87        | 7.63          |
| h3-router                | 1.15.11  | ✓      | 41064.0    | 23.85        | 7.32          |
| h3                       | 1.15.11  | ✗      | 40424.8    | 24.24        | 7.21          |
| koa                      | 2.16.4   | ✗      | 37613.8    | 26.08        | 6.71          |
| take-five                | 2.0.0    | ✓      | 36160.2    | 27.14        | 13.00         |
| restify                  | 11.1.0   | ✓      | 35946.2    | 27.30        | 6.48          |
| hono                     | 4.12.22  | ✓      | 35297.4    | 27.83        | 5.79          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34133.8    | 28.80        | 6.09          |
| koa-router               | 13.1.1   | ✓      | 33687.8    | 29.18        | 6.01          |
| hapi                     | 21.4.9   | ✓      | 32378.4    | 30.38        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 29604.4    | 33.27        | 5.28          |
| fastify-big-json         | 5.8.5    | ✓      | 11437.4    | 86.87        | 131.59        |
| express                  | 5.2.1    | ✓      | 9711.0     | 102.38       | 1.73          |
| frourio-express          | 1.3.1    | ✓      | 9586.1     | 103.70       | 1.71          |
| express-with-middlewares | 5.2.1    | ✓      | 8930.5     | 111.36       | 3.32          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
