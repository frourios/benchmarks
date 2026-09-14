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
* __Run:__ Mon Sep 14 2026 04:31:52 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47367.2    | 20.60        | 8.45          |
| frourio                  | 1.3.1    | ✓      | 47249.6    | 20.65        | 8.47          |
| fastify                  | 5.12.4   | ✓      | 46756.0    | 20.88        | 8.38          |
| polka                    | 0.5.2    | ✓      | 45630.4    | 21.42        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45118.4    | 21.68        | 8.05          |
| server-base              | 7.1.32   | ✗      | 44458.4    | 21.99        | 7.93          |
| micro                    | 10.0.1   | ✗      | 44438.4    | 22.00        | 7.93          |
| rayo                     | 1.4.6    | ✓      | 44150.4    | 22.15        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 44150.4    | 22.15        | 7.87          |
| 0http                    | 4.4.0    | ✓      | 43468.0    | 22.51        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42720.0    | 22.90        | 7.62          |
| adonisjs                 | 7.8.1    | ✓      | 42036.0    | 23.29        | 7.50          |
| micro-route              | 2.5.0    | ✓      | 40947.2    | 23.93        | 7.30          |
| polkadot                 | 1.0.0    | ✗      | 40928.8    | 23.93        | 7.30          |
| h3                       | 1.15.11  | ✗      | 40060.8    | 24.46        | 7.14          |
| restana                  | v5.2.0   | ✓      | 39742.4    | 24.66        | 7.09          |
| h3-router                | 1.15.11  | ✓      | 39525.6    | 24.80        | 7.05          |
| hono                     | 4.13.7   | ✓      | 38108.2    | 25.73        | 6.25          |
| koa                      | 2.16.4   | ✗      | 35506.6    | 27.66        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34249.8    | 28.70        | 6.11          |
| take-five                | 2.0.0    | ✓      | 33849.0    | 29.03        | 12.17         |
| restify                  | 11.1.0   | ✓      | 32982.4    | 29.81        | 5.95          |
| koa-router               | 13.1.1   | ✓      | 32558.6    | 30.22        | 5.81          |
| hapi                     | 21.4.10  | ✓      | 32028.4    | 30.72        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 28856.8    | 34.14        | 5.15          |
| fastify-big-json         | 5.12.4   | ✓      | 11851.6    | 83.82        | 136.36        |
| express                  | 5.2.1    | ✓      | 9756.4     | 101.85       | 1.74          |
| frourio-express          | 1.3.1    | ✓      | 9513.3     | 104.52       | 1.70          |
| express-with-middlewares | 5.2.1    | ✓      | 9030.4     | 110.13       | 3.36          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
