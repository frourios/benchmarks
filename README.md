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
* __Node:__ `v20.18.2`
* __Run:__ Fri Feb 07 2025 08:22:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 48052.0    | 20.32        | 8.57          |
| bare                     | v20.18.2 | ✗      | 47592.8    | 20.52        | 8.49          |
| connect                  | 3.7.0    | ✗      | 47331.2    | 20.64        | 8.44          |
| frourio                  | 1.3.1    | ✓      | 47219.2    | 20.68        | 8.47          |
| fastify                  | 5.2.1    | ✓      | 47077.6    | 20.74        | 8.44          |
| server-base              | 7.1.32   | ✗      | 46853.6    | 20.83        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46484.8    | 21.00        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46352.8    | 21.05        | 8.27          |
| micro                    | 10.0.1   | ✗      | 46315.2    | 21.10        | 8.26          |
| 0http                    | 4.1.0    | ✓      | 46122.4    | 21.20        | 8.22          |
| polkadot                 | 1.0.0    | ✗      | 45896.0    | 21.29        | 8.18          |
| h3                       | 1.15.0   | ✗      | 45555.2    | 21.46        | 8.12          |
| connect-router           | 1.3.8    | ✓      | 43954.4    | 22.26        | 7.84          |
| micro-route              | 2.5.0    | ✓      | 43462.4    | 22.49        | 7.75          |
| h3-router                | 1.15.0   | ✓      | 43160.8    | 22.67        | 7.70          |
| adonisjs                 | 7.4.0    | ✓      | 42363.2    | 23.10        | 7.56          |
| hono                     | 4.7.0    | ✓      | 41147.2    | 23.80        | 6.75          |
| restana                  | v5.0.0   | ✓      | 41096.8    | 23.84        | 7.33          |
| koa                      | 2.15.3   | ✗      | 38175.4    | 25.69        | 6.81          |
| take-five                | 2.0.0    | ✓      | 35888.2    | 27.35        | 12.90         |
| restify                  | 11.1.0   | ✓      | 35710.6    | 27.51        | 6.44          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35333.6    | 27.81        | 6.30          |
| koa-router               | 13.1.0   | ✓      | 33730.0    | 29.15        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 32365.2    | 30.39        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 30476.4    | 32.30        | 5.44          |
| fastify-big-json         | 5.2.1    | ✓      | 11890.4    | 83.54        | 136.80        |
| express                  | 5.0.1    | ✓      | 10402.6    | 95.51        | 1.86          |
| frourio-express          | 1.3.1    | ✓      | 9934.6     | 100.05       | 1.77          |
| express-with-middlewares | 5.0.1    | ✓      | 9472.6     | 104.94       | 3.52          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
