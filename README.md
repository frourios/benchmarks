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
* __Node:__ `v20.19.5`
* __Run:__ Mon Oct 20 2025 01:07:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 57891.6    | 16.78        | 10.38         |
| server-base              | 7.1.32   | ✗      | 56318.4    | 17.26        | 10.04         |
| rayo                     | 1.4.6    | ✓      | 55547.6    | 17.51        | 9.91          |
| micro                    | 10.0.1   | ✗      | 55420.0    | 17.54        | 9.88          |
| server-base-router       | 7.1.32   | ✓      | 55121.6    | 17.65        | 9.83          |
| polka                    | 0.5.2    | ✓      | 55100.0    | 17.65        | 9.83          |
| fastify                  | 5.6.1    | ✓      | 52803.2    | 18.44        | 9.47          |
| connect                  | 3.7.0    | ✗      | 52571.2    | 18.52        | 9.38          |
| bare                     | v20.19.5 | ✗      | 52508.0    | 18.55        | 9.36          |
| connect-router           | 1.3.8    | ✓      | 51599.2    | 18.88        | 9.20          |
| micro-route              | 2.5.0    | ✓      | 51063.2    | 19.08        | 9.11          |
| adonisjs                 | 7.7.0    | ✓      | 47971.2    | 20.34        | 8.55          |
| hono                     | 4.10.1   | ✓      | 46367.2    | 21.07        | 7.61          |
| 0http                    | 4.3.0    | ✓      | 46204.0    | 21.15        | 8.24          |
| restana                  | v5.1.0   | ✓      | 45136.0    | 21.66        | 8.05          |
| koa                      | 2.16.3   | ✗      | 44953.6    | 21.75        | 8.02          |
| h3                       | 1.15.4   | ✗      | 43908.8    | 22.28        | 7.83          |
| polkadot                 | 1.0.0    | ✗      | 43618.4    | 22.43        | 7.78          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 43182.4    | 22.66        | 7.70          |
| take-five                | 2.0.0    | ✓      | 42572.0    | 22.99        | 15.31         |
| restify                  | 11.1.0   | ✓      | 40608.6    | 24.12        | 7.32          |
| koa-router               | 13.1.1   | ✓      | 39930.2    | 24.54        | 7.12          |
| h3-router                | 1.15.4   | ✓      | 39696.8    | 24.70        | 7.08          |
| microrouter              | 3.1.3    | ✓      | 35078.4    | 28.00        | 6.26          |
| hapi                     | 21.4.3   | ✓      | 35023.8    | 28.05        | 6.25          |
| fastify-big-json         | 5.6.1    | ✓      | 10692.6    | 92.96        | 123.02        |
| express                  | 5.1.0    | ✓      | 10512.6    | 94.53        | 1.87          |
| frourio-express          | 1.3.1    | ✓      | 10411.8    | 95.46        | 1.86          |
| express-with-middlewares | 5.1.0    | ✓      | 9742.0     | 102.05       | 3.62          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
